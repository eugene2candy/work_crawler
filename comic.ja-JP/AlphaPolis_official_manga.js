﻿/**
 * 批量下載アルファポリス - 電網浮遊都市 - 公式漫画的工具。 Download AlphaPolis official mangas.
 */

'use strict';

require('../work_crawler_loader.js');

// ----------------------------------------------------------------------------

var crawler = new CeL.work_crawler({

	// 當網站不允許太過頻繁的訪問/access時，可以設定下載之前的等待時間(ms)。
	// 模仿實際人工請求。
	// chapter_time_interval : '5s',

	base_URL : 'https://www.alphapolis.co.jp/',

	// 解析 作品名稱 → 作品id get_work()
	search_URL : 'search?category=official_manga&query=',
	parse_search_result : function(html, get_label) {
		// console.log(html);
		var id_data = [],
		// {Array}id_list = [id,id,...]
		id_list = [];
		html.each_between(' class="title">', '</a>', function(text) {
			// console.log(text);
			var id = text.between(' href="/manga/official/', '"');
			if (id) {
				id_list.push(id);
				id_data.push(get_label(text.between('>')));
			}
		});
		// console.log([ id_list, id_data ]);
		return [ id_list, id_data ];
	},

	// 取得作品的章節資料。 get_work_data()
	work_URL : function(work_id) {
		return 'manga/official/' + work_id.replace('-', '/');
	},
	parse_work_data : function(html, get_label, extract_work_data) {
		var work_data = {
			// 必要屬性：須配合網站平台更改。
			title : get_label(html.between(
			// 2019/1/21 アルファポリス 公式漫画 改版
			'<div class="manga-detail-description', '</div>')
			// <div class="manga-detail-description section"> <div
			// class="title"> <h1>title</h1> </div>
			.between('<h1>', '</h1>')),

			// 選擇性屬性：須配合網站平台更改。
			// e.g., 连载中, 連載中
			// <div class="wrap-content-status">
			status : html.between('<div class="status">', '</div>').split(
					'</span>').map(get_label),
			author : get_label(html.between('<div class="author-label">',
					'</a>')),
			last_update : get_label(html.between('<div class="up-time">',
					'</div>')),
			next_update : get_label(html
			// <span class="next-up-time">
			.between(' class="next-up-time">', '<')),
			description : get_label(html.between('<div class="outline">',
					'</div>')),
			// site_name : 'アルファポリス'
			language : 'ja-JP'

		};

		// console.log(html);
		extract_work_data(work_data, html);

		work_data.status = work_data.status.concat(
				html.between(' class="manga-detail-tags', '</div>')
						.between('>').split('</a>').map(get_label))
		//
		.filter(function(tag) {
			return !!tag;
		});

		// console.log(work_data);
		return work_data;
	},
	get_chapter_list : function(work_data, html) {
		work_data.chapter_list = [];
		// <a data-order="34" class="episode RentalContent"
		// <a data-order="35" class="episode "
		html = html.between('<div class="episode', '<div class="scroll')
		// <div class="scroll scroll-up" id="ScrollUp"><img
		// src="/img/official_manga/under_arrow.svg?1543454323"
		// alt="最上部へ"/></div>
		.between('>').split(' href="/manga/official/').slice(1)
		// <a href="/manga/official/462000159/1705" data-order="16"
		// class="episode RentalContent" target="_blank"
		// data-href="/manga/official/462000159/1705"><div class="thumbnail
		// lazyloading"><img src="/?1553506644" alt=""
		// data-src="https://cdn-image.alphapolis.co.jp/official_manga/rental_episode/462000159/1705/5af0f21a-8f08-4111-adcf-109dac113c05/thumbnail.png"
		// class="lazyload"/></div>
		.forEach(function(text) {
			// console.log(JSON.stringify(text));
			work_data.chapter_list.push({
				url : '/manga/official/'
				//
				+ text.between(null, '"'),
				date : text.between('<div class="up-time">', '</div>')
				//
				.replace('更新', ''),
				// <div class="title">第1回</div>
				title : text.between(' class="title">', '</'),
				// <div class="rental-coin">70AC</div>
				limited : text.between(' class="rental-coin">', '</'),
				// <div class="volume"> 1巻収録 </div>
				収録 : text.between(' class="volume">', '</')
			});
		});
		work_data.chapter_list.reverse();
		// console.log(work_data.chapter_list);
	},

	parse_chapter_data : function(html, work_data, get_label, chapter_NO) {
		// console.log(html);
		var chapter_data = work_data.chapter_list[chapter_NO - 1];
		Object.assign(chapter_data, {
			// 設定必要的屬性。
			title : get_label(html.between('<h2>', '</h2>')),
			image_list : []
		});

		html.each_between('_pages.push("', '"', function(url) {
			if (url.includes('://'))
				chapter_data.image_list.push(url);
		});

		return chapter_data;
	}
});

// ----------------------------------------------------------------------------

// CeL.set_debug(3);

// for 年齢確認 eternityConfirm()
crawler.setup_value('cookie', [ 'confirm=' + Math.floor(Date.now() / 1000)
// location.hostname
+ ';domain=' + crawler.base_URL.match(/\/\/([^\/]+)/)[1] + ';path=/;' ]);

start_crawler(crawler, typeof module === 'object' && module);
