﻿/**
 * 批量下載 有妖气原创漫画梦工厂 漫畫 的工具。 Download u17 comics.
 */

'use strict';

require('../work_crawler_loder.js');

// ----------------------------------------------------------------------------

// [ all, chapter id, url, title + date, short title, page count ]
var PATTERN_chapter = /<a id="cpt_(\d+)" href="([^<>"]+)"[\n\s]+title="([^<>"]+)"[^<>]*>([\s\S]+?)<\/a>([\s\S]*?)<\/li>/g,
//
crawler = new CeL.work_crawler({
	// 所有的子檔案要修訂註解說明時，應該都要順便更改在CeL.application.net.comic中Comic_site.prototype內的母comments，並以其為主體。

	// one_by_one : true,
	base_URL : 'http://www.u17.com/',

	// 解析 作品名稱 → 作品id get_work()
	search_URL : 'www/ajax.php?mod=comic&act=comic_suggest&q=',
	parse_search_result : function(html) {
		var id_list = [], id_data = [];
		html = JSON.parse(html);

		html.forEach(function(work_data) {
			id_list.push(work_data.comicId);
			id_data.push(work_data.comicName);
		});

		return [ id_list, id_data ];
	},

	// 取得作品的章節資料。 get_work_data()
	work_URL : function(work_id) {
		return 'comic/' + work_id + '.html';
	},
	parse_work_data : function(html, get_label, extract_work_data) {
		var text = html.between('<div class="comic_info">',
				'<div class="chapterlist">'), matched,
		//
		PATTERN_status = /static\.u17i\.com\/[^<>"]+" title="([^<>"]+)"/g,
		//
		work_data = {
			// 更新頻率
			update_frequency : get_label(text.between('<i class="sign', '</i>')
					.between('>')),
			status : [],
			last_update : get_label(html.between('最后更新时间：', '<'))
		};
		eval(html.match(/var comic_id[^\r\n]+(?:\r?\nvar [^\r\n]+)+/)[0]
				.replace(/var /g, 'work_data.').replace(/=\s*cfg_host_base/,
						'=work_data.cfg_host_base'));

		while (matched = PATTERN_status.exec(text)) {
			work_data.status.push(matched[1]);
		}

		PATTERN_status = /class="class_tag">([^<>"]+)/g;

		while (matched = PATTERN_status.exec(text)) {
			work_data.status.push(matched[1]);
		}

		extract_work_data(work_data, html);

		extract_work_data(work_data, text,
		// e.g., "<div class="comic_infor_status">状态：<span
		// class="color_green">连载中</span></div>"
		/class="comic_infor_status">([^<>]+)<span[^<>]+>([^<>]+)<\/span>/g);

		extract_work_data(work_data, text.between('<div class="pop_box">',
				'</div>'),
		// e.g., "<span>总月票：<em>446</em></span>"
		/<span>([^<>]+)<em>([^<>]+)<\/em><\/span>/g);

		work_data.status.unshift(work_data.状态);

		Object.assign(work_data, {
			title : work_data.comic_name,
			作品简介 : get_label(html.between('<p class="ti2">', '</p>'))
		});

		return work_data;
	},
	get_chapter_list : function(work_data, html, get_label) {
		html = html.between('<div class="chapterlist">', '</ul>');
		work_data.chapter_list = [];

		var matched;
		// [ all, chapter id, url, title + date, short title, page count ]
		while (matched = PATTERN_chapter.exec(html)) {
			matched[3] = get_label(matched[3]);
			matched[5] = get_label(matched[5]);
			var title_date = matched[3].match(/^(.+)\s(\d{4}-\d{2}-\d{2})$/),
			//
			chapter_data = {
				// 採用呼叫網頁的方法，有些頁面無圖片資料。
				// url : matched[2],
				// 採用呼叫API的方法。
				url : 'comic/ajax.php?mod=chapter'
						+ '&act=get_chapter_v5&chapter_id=' + matched[1],
				title : (title_date ? title_date[1].trim() : matched[3])
				// e.g., "(9p)"
				+ (matched[5] ? ' ' + matched[5] : '')
			};
			if (title_date) {
				chapter_data.date = title_date[2];
			}
			work_data.chapter_list.push(chapter_data);
		}
	},

	parse_chapter_data : function(html, work_data, get_label, chapter_NO) {
		var chapter_data;

		if (html.startsWith('{')) {
			// 採用呼叫API的方法。
			chapter_data = JSON.parse(html);
			if (!chapter_data.image_list && chapter_data.message) {
				CeL.error(work_data.title + ' #' + chapter_NO + ': '
				// e.g., "没有阅读权限"
				+ chapter_data.message);
			} else {
				chapter_data.image_list.forEach(function(image_data) {
					image_data.url = image_data.src;
				});
			}

		} else if (chapter_data = html.between('image_config =', '\nvar')) {
			// 採用呼叫網頁的方法，有些頁面無圖片資料。
			eval('chapter_data=' + chapter_data);

			(chapter_data.image_list = Object.values(chapter_data.image_list))
			//
			.forEach(function(image_data) {
				image_data.url = atob(image_data.src);
			});

		} else {
			throw '網站結構改變，無法取得資料！';
		}

		return chapter_data;
	}
});

// ----------------------------------------------------------------------------

// CeL.set_debug(3);

start_crawler(crawler, typeof module === 'object' && module);
