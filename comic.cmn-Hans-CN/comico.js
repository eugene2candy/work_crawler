﻿/**
 * 批量下載 comico (韓國 NHN Taiwan Corp.) 的工具。 Download comico comics.
 * (comic.cmn-Hant-TW)
 */

'use strict';

require('../work_crawler_loder.js');

// ----------------------------------------------------------------------------

CeL.run('application.net.work_crawler.comico');

// ----------------------------------------------------------------------------

// CeL.set_debug(3);

CeL.comico({
	base_URL : 'http://www.comico.com.tw/',

	search_head_token : '<li class="list-article02__item">',
	PATTERN_search : /<a href="[^<>"]*?titleNo=(\d+)"[\s\S]*? alt="([^"]+)"/,

	// 取得作品的章節資料。 get_work_data()
	work_URL : function(work_id) {
		return work_id + '/';
	}

}, function(crawler) {
	start_crawler(crawler, typeof module === 'object' && module);
}, function(crawler) {
	setup_crawler(crawler, typeof module === 'object' && module);
});
