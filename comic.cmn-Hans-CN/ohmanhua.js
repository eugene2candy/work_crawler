﻿/**
 * 批量下載 Oh漫画 的工具。 Download ohmanhua comics.
 * 
 * @see 集云数据 https://www.acloudmerge.com/
 * @see http://www.z1i.cn/ https://www.007ts.co/
 */

'use strict';

require('../work_crawler_loader.js');

// ----------------------------------------------------------------------------

var crawler = new CeL.work_crawler({
	// 所有的子檔案要修訂註解說明時，應該都要順便更改在CeL.application.net.comic中Comic_site.prototype內的母comments，並以其為主體。

	// 當圖像檔案過小，或是被偵測出非圖像(如不具有EOI)時，依舊強制儲存檔案。
	// e.g., 10560 春秋战雄\0203 第206回 神兵异宝
	// skip_error : true,

	// {Natural}MIN_LENGTH:最小容許圖案檔案大小 (bytes)。
	MIN_LENGTH : 350,

	// one_by_one : true,

	// 2019/9/27-2020/4/27: ONE漫画 https://www.onemanhua.com/
	// 2020/5/2: Oh漫画 https://www.ohmanhua.com/
	base_URL : 'https://www.ohmanhua.com/',

	// 解析 作品名稱 → 作品id get_work()
	search_URL : 'search?searchString=',
	parse_search_result : function(html, get_label) {
		// console.log(html);
		html = html.between('fed-list-head', 'fed-main-right');
		// console.log(html);
		var id_list = [], id_data = [];
		html.each_between('<dl', '</dl>', function(token) {
			var matched = token.between('<h1', '</h1>').match(
					/<a [^<>]*?href="\/(\d+)\/"[^<>]*?>(.+?)<\/a>/);
			if (matched) {
				id_list.push(+matched[1]);
				id_data.push(matched[2]);
			}
		});

		return [ id_list, id_data ];
	},

	// 取得作品的章節資料。 get_work_data()
	work_URL : function(work_id) {
		return work_id + '/';
	},
	parse_work_data : function(html, get_label, extract_work_data) {
		var text = html.between('fed-main-info', 'fed-tabs-info');
		// "fed-data-info"?
		text = text.between('fed-deta-info') || text;
		// console.log(text);

		var work_data = {
			// 必要屬性：須配合網站平台更改。
			title : get_label(text.between('<h1', '</h1>').between('>')),

		// 選擇性屬性：須配合網站平台更改。
		};

		extract_work_data(work_data, html);
		// console.log(work_data);

		// --------------------------------------

		// console.log(text.between('fed-part-rows', '</ul>'));
		text.between('fed-part-rows', '</ul>')
		// <li class="fed-col-xs12 fed-col-md6 fed-part-eone
		// website-padding-right-1">
		.each_between('<li', '</li>', function(token) {
			var matched = token.match(
			// <span class="fed-text-muted">状态</span>
			/fed-text-muted[^<>]+>([^<>]+)<\/span>([\s\S]+)/);
			if (matched) {
				// delete matched.input;
				// console.log(matched);
				work_data[get_label(matched[1])] = get_label(matched[2]);
			}
		});

		// --------------------------------------

		var matched = text.between('fed-deta-images', '</dt>').match(
				/<a [^<>]*?data-original="[^<>"]+"/);
		if (matched) {
			work_data.image = matched[1];
		}

		if (!work_data.last_update && work_data.更新) {
			work_data.last_update = work_data.更新;
		}

		// console.log(work_data);
		return work_data;
	},
	get_chapter_list : function(work_data, html) {
		var chapter_list = [], data = html.between(
				'fed-play-item fed-drop-item fed-visible')
		// <div class="all_data_list">
		.between('all_data_list', '</div>');

		// <li class="fed-padding fed-col-xs6 fed-col-md3 fed-col-lg3"><a
		// class="fed-btns-info fed-rims-info fed-part-eone" title="第846话
		// 亡魂山（下）" href="/10101/1/852.html">第846话 亡魂山（下） </a></li>
		data.each_between('<li ', '</li>', function(token) {
			var matched = token.match(
			//
			/<a [^<>]*?title="([^<>"]+?)"[^<>]*? href="([^<>"]+?)"/);
			var chapter_data = {
				title : matched[1],
				url : matched[2]
			};
			chapter_list.push(chapter_data);
		});
		work_data.chapter_list = chapter_list.reverse();
		// console.log(work_data.chapter_list);
	},

	using_webp : false,
	parse_chapter_data : function(html, work_data, get_label, chapter_NO) {
		// 2019/9/27: "JRUIFMVJDIWE569j"
		// 2020/8/21 14:39:33: "fw12558899ertyui"
		var __READKEY = "fw12558899ertyui";
		function decode_data(C_DATA, key, default_key) {
			// console.log(C_DATA);
			// @see https://www.ohmanhua.com/js/custom.js
			C_DATA = CryptoJS.enc.Base64.parse(C_DATA).toString(
					CryptoJS.enc.Utf8);

			// @search `if (typeof C_DATA !=` ...) { eval( @
			// https://www.ohmanhua.com/js/custom.js
			try {
				C_DATA = crawler.__cdecrypt(key || __READKEY, C_DATA);
			} catch (e) {
				C_DATA = crawler.__cdecrypt(
						typeof default_key === 'string' ? default_key
								: "JRUIFMVJDIWE569j", C_DATA);
			}
			return C_DATA;
		}

		function decode(C_DATA) {
			C_DATA = decode_data(C_DATA);
			// console.log(C_DATA);

			var mh_info, image_info;
			eval(C_DATA);
			mh_info.image_info = image_info;
			// @see `totalImageCount =
			// parseInt(eval(base64[__Ox97c0e[0x4]](__Ox97c0e[0x3])))` @
			// https://www.ohmanhua.com/js/manga.read.js
			if (mh_info.enc_code1) {
				mh_info.totalimg = eval(decode_data(mh_info.enc_code1));
			}
			if (mh_info.enc_code2) {
				mh_info.imgpath = decode_data(mh_info.enc_code2,
				// 2020/9/3 前改版
				// @see function __cr_getpice(_0xfb06x4a)
				"fw125gjdi9ertyui", "");
			}
			return mh_info;
		}

		var chapter_data = html.between("var C_DATA='", "'");
		if (!chapter_data || !(chapter_data = decode(chapter_data))) {
			CeL.warn(work_data.title + ' #' + chapter_NO
					+ ': No valid chapter data got!');
			return;
		}
		// console.log(chapter_data);

		// chapter_data.startimg often "1"
		var image_NO = parseInt(chapter_data.startimg) || 1;
		// 設定必要的屬性。
		chapter_data.title = chapter_data.pagename;
		// chapter_data.image_count = chapter_data.totalimg + image_NO - 1;

		// @see function __cr_getpice() @
		// https://www.ohmanhua.com/js/manga.read.js
		var chapter_image_base_path = this.base_URL.replace(/:\/\/.+/, '://')
		// "img.mljzmm.com"
		+ chapter_data.domain + "/comic/" + encodeURI(chapter_data.imgpath);
		chapter_data.image_list = [];
		for (; image_NO <= chapter_data.totalimg; image_NO++) {
			// @see __cr.PrefixInteger()
			var image_url = chapter_image_base_path + image_NO.pad(4) + ".jpg";
			if (this.using_webp) {
				// @see __cr.switchWebp()
				image_url += '.webp';
			}
			chapter_data.image_list.push(image_url);
		}

		// console.log(chapter_data);
		return chapter_data;
	}
});

// ----------------------------------------------------------------------------

// CeL.set_debug(3);

setup_crawler(crawler, typeof module === 'object' && module);

// 創建 main directory。
CeL.create_directory(crawler.main_directory);

// https://www.ohmanhua.com/js/l.js 事實上是 CryptoJS
var decode_filename = 'l.js';

CeL.get_URL_cache(crawler.base_URL + 'js/' + decode_filename,
		after_fetch_decode_file, crawler.main_directory + decode_filename);

function after_fetch_decode_file(contents, error) {
	contents = contents.replace(/==typeof exports/g, '==typeof exports_')
			.replace(/\}\(this,/g, '}(globalThis,').replace(
					'function __cdecrypt',
					'crawler.__cdecrypt=function __cdecrypt');
	eval(contents);

	start_crawler(crawler, typeof module === 'object' && module);
}
