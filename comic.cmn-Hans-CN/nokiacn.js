﻿/**
 * 批量下載 乙女漫画 的工具。 Download nokiacn.net comics.
 * 
 * @see qTcms 晴天漫画程序 晴天漫画系统 http://manhua3.qingtiancms.com/
 */

'use strict';

require('../work_crawler_loader.js');

// ----------------------------------------------------------------------------

CeL.run('application.net.work_crawler.qTcms2017');

// ----------------------------------------------------------------------------

var crawler = CeL.qTcms2017({
	// {Natural}最小容許圖案檔案大小 (bytes)。
	MIN_LENGTH : 500,

	base_URL : 'http://www.nokiacn.net/',

	// function f_qTcms_Pic_curUrl_realpic(v){
	// 2019/3: 'http://n.aiwenwo.net:55888'
	// 2019/9: 'http://n.aiwenwo.net'
	image_base_url : 'http://n.aiwenwo.net',

	image_preprocessor : function(contents, image_data) {
		var index = contents && contents.length - 1;

		if (!(index > 0) || contents[index] !== 0) {
			return;
		}

		// 修正圖片結尾非正規格式之情況。
		// e.g., http://www.nokiacn.net/yinv/baozhuzheshigeyijinyueye/
		// http://n.aiwenwo.net:55888/upload2/1774/2018/03-17/20180317232906_4691cbjowu29a_small.jpeg

		while (index > 0 && contents[--index] === 0)
			;

		return contents.slice(0, index + 1);
	}
});

// ----------------------------------------------------------------------------

// CeL.set_debug(3);

start_crawler(crawler, typeof module === 'object' && module);
