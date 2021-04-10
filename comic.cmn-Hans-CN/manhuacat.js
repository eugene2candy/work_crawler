﻿/**
 * 批量下載 漫画猫 的工具。 Download manhuacat comics.
 */

'use strict';

require('../work_crawler_loader.js');

// ----------------------------------------------------------------------------

CeL.run('application.net.work_crawler.sites.manhuadb');

// ----------------------------------------------------------------------------

var crawler = new CeL.manhuadb({

	// manhuacat.js: 一次下載太多檔案，會造成IP被圖片伺服器封鎖超過1天。
	// chapter_time_interval : '10s',
	// 單行本圖片較多且大，因此採用一個圖一個圖取得的方式。
	one_by_one : '2s',

	base_URL : 'https://www.manhuacat.com/',

	acceptable_types : 'webp|jpg',

	// reget_image_page : true,

	// 解析 作品名稱 → 作品id get_work()
	search_URL : 'search.html?q=',
	PATTERN_search
	//
	: /<a href="(?:[^"]*?)\/manga\/(\d+)\.html" title="([^<>"]+)"/,

	// 取得作品的章節資料。 get_work_data()
	work_URL : function(work_id) {
		return 'manga/' + work_id + '.html';
	},
	inverted_order : true,

	decoder_URL :
	//
	'https://raw.githubusercontent.com/pieroxy/lz-string/master/libs/'
			+ 'lz-string.js',
	decode_chapter_data : function(chapter_data) {
		// var LZString = require(this.main_directory + 'lz-string.js');
		return LZString.decompressFromBase64(chapter_data)
		//
		.split(',');
	},
	// asset_domain=vg_r_data[_0x4cb2('0xc','s$hR')](_0x4cb2('0x4e','I8#P'));
	// img_pre=_0x4cb2('0x52','yKDU');
	image_prefix : "https://mao.mhtupian.com/uploads/"

});

// ----------------------------------------------------------------------------

setup_crawler(crawler, typeof module === 'object' && module);

// 創建 main directory。
CeL.create_directory(crawler.main_directory);

var LZString;
CeL.get_URL_cache(crawler.decoder_URL, function(contents, error) {
	eval(contents.replace(/var\s+(LZString)/, '$1'));
	start_crawler(crawler, typeof module === 'object' && module);
}, {
	directory : crawler.main_directory
});
