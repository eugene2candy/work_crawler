﻿/**
 * 批量下載快看漫画的工具。 Download kuaikanmanhua comics.
 */

'use strict';

require('../work_crawler_loder.js');

// ----------------------------------------------------------------------------

// <a class="" href="/web/comic/0000/" title="~">
// <a class="btn_lock" href="/web/comic/0000/" title="~">
// 2018/10/20-11/8 改版
// <a class="" href="/web/comic/101893/" title="~" data-vip="0">
var PATTERN_chapter_item = /<a class="(?:[^<>"]*)" href="([^<>"]+)" title="([^<>"]+)"[^<>]*>/,
//
crawler = new CeL.work_crawler({
	// recheck:從頭檢測所有作品之所有章節。
	// recheck : true,
	// one_by_one : true,
	base_URL : 'https://www.kuaikanmanhua.com/',

	// 最小容許圖案檔案大小 (bytes)。
	// 對於極少出現錯誤的網站，可以設定一個比較小的數值，並且設定.allow_EOI_error=false。因為這類型的網站要不是無法取得檔案，要不就是能夠取得完整的檔案；要取得破損檔案，並且已通過EOI測試的機會比較少。
	// 對於有些圖片只有一條細橫桿的情況。
	MIN_LENGTH : 150,

	// allow .jpg without EOI mark.
	// allow_EOI_error : true,
	// 當圖像檔案過小，或是被偵測出非圖像(如不具有EOI)時，依舊強制儲存檔案。
	// skip_error : true,

	// 解析 作品名稱 → 作品id get_work()
	search_URL_201805 : 'web/topic/search?keyword=',
	search_URL : function(work_title, get_label) {
		return 'v1/search/topic?q=' + encodeURIComponent(work_title)
				+ '&since=0&size=20&f=3';
	},
	parse_search_result : function(html, get_label) {
		html = JSON.parse(html).data.hit;
		return [ html, html ];
	},
	id_of_search_result : 'id',
	title_of_search_result : 'title',

	// 取得作品的章節資料。 get_work_data()
	work_URL : function(work_id) {
		return 'web/topic/' + work_id;
	},
	parse_work_data : function(html, get_label, extract_work_data) {
		var work_data = {
			// 必要屬性：須配合網站平台更改。
			title : get_label(html
					.between('<div class="comic-name">', '</div>')),
			author : get_label(html.between('<div class="author-nickname">',
					'</div>')),

			// 選擇性屬性：須配合網站平台更改。
			总热度 : get_label(html.between('<span class="hot-num">', '</span>')
					.replace(//, '')),
			赞 : get_label(html.between('<span class="tip-txt">', '</span>')
					.replace(/赞:/, ''))
		};
		extract_work_data(work_data, html);
		return work_data;
	},
	get_chapter_list : function(work_data, html, get_label) {
		work_data.chapter_list = [];
		html = html.between('<div class="article-list">', '</div>');

		html.each_between('<tr>', '</tr>', function(token) {
			var matched = token.match(PATTERN_chapter_item), data = {
				url : matched[1],
				title : matched[2],
				like : get_label(token.between(' class="like">', '</td>'))
			};
			matched = token.match(/<td>(\d{1,2}-\d{1,2})<\/td>/);
			if (matched) {
				data.update = matched[1];
			}
			work_data.chapter_list.push(data);
		});

		if (work_data.chapter_list.length > 1) {
			// 轉成由舊至新之順序。
			work_data.chapter_list.reverse();
		}
		// console.log(work_data.chapter_list);
	},

	// 取得每一個章節的各個影像內容資料。 get_chapter_data()
	parse_chapter_data : function(html, work_data, get_label) {
		var chapter_data = {
			// 赞我
			praise : +html.between('<li class="praise-comic">', '</li>')
					.between('<span class="num">', '</span>'),
			// 评论
			comment : +html.between('"去评论"', '</li>').between('</i>', '</a>'),
			image_list : []
		}, PATTERN_IMAGE = / data-kksrc="([^<>"]+)"([^<>]+)/g, matched;

		// 201805 快看漫画改版。
		html = html.between(' comic-imgs"', '</div>');

		while (matched = PATTERN_IMAGE.exec(html)) {
			var title = matched[2].match(/title="([^<>"]+)"/), image_data = {
				url : get_label(matched[1])
			};
			if (title)
				image_data.title = title[1];
			chapter_data.image_list.push(image_data);
		}

		return chapter_data;
	}
});

// ----------------------------------------------------------------------------

// CeL.set_debug(3);

start_crawler(crawler, typeof module === 'object' && module);
