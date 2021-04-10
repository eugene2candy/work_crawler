﻿/**
 * @name CeJS 線上小說漫畫下載工具 命令列介面自動產生新安裝包工具。
 * 
 * @fileoverview You may using this tool to generate executable packages.
 * 
 * @since 2018/9/9 20:54:21
 * 
 * @see work_crawler.updater.js
 */

'use strict';

var repository = 'work_crawler', branch = 'master', update_script_url = 'https://raw.githubusercontent.com/kanasimi/'
		+ repository + '/' + branch + '/' + repository + '.updater.js';

// ----------------------------------------------------------------------------

// const
var node_https = require('https'), node_fs = require('fs'), child_process = require('child_process'),
// path segment separator
path_separator = require('path').sep;

// You may need to change the working directory first.

show_info('Build package in current directory [' + process.cwd() + ']...');

download_update_tool(update_script_url, build_package);

function show_info(message) {
	process.title = message;
	console.info('\x1b[35;46m' + message + '\x1b[0m');
}

/**
 * <code>
 curl -O https://raw.githubusercontent.com/kanasimi/work_crawler/master/work_crawler.updater.js
 * </code>
 */
function download_update_tool(update_script_url, callback) {
	show_info('下載 ' + repository + ' 更新工具...');
	node_https.get(update_script_url, function(response) {
		var buffer_array = [], sum_size = 0;

		response.on('data', function(data) {
			sum_size += data.length;
			buffer_array.push(data);
		});

		response.on('end', function(e) {
			var contents = Buffer.concat(buffer_array, sum_size).toString(),
			//
			update_script_name = update_script_url.match(/[^\\\/]+$/)[0];
			console.info(update_script_name + ': ' + sum_size + ' bytes.');
			node_fs.writeFileSync(update_script_name, contents);

			if (typeof callback === 'function')
				callback(update_script_name);
		});
	})
	//
	.on('error', function(e) {
		// network error?
		// console.error(e);
		throw e;
	});
}

// 刪除目錄與底下所有檔案。
function remove_directory(directory_path) {
	var is_windows = process.platform.startsWith('win');
	if (is_windows)
		directory_path = directory_path.replace(/[\\\/]/g, path_separator);

	if (!node_fs.existsSync(directory_path))
		return;

	child_process.execSync((is_windows ? 'rd /s /q' : 'rm -rf') + ' "'
			+ directory_path + '"', {
		stdio : 'inherit'
	});
}

function build_package(update_script_name) {
	var directory_name = repository + '-' + branch;
	if (node_fs.existsSync(directory_name)) {
		show_info('清理戰場...');
		// node_fs.renameSync(directory_name, directory_name + '.old');
		remove_directory(directory_name);
	}
	// clean previous cache
	try {
		node_fs.unlinkSync(repository + '-' + branch + '.version.json');
	} catch (e) {
		// TODO: handle exception
	}

	show_info('建立執行環境...');
	// node work_crawler.updater.js
	child_process.execSync('node ' + update_script_name, {
		stdio : 'inherit'
	});

	node_fs.renameSync(directory_name + '.version.json', directory_name
			+ path_separator + directory_name + '.version.json');

	// cd work_crawler-master
	process.chdir(directory_name);
	// node_fs.mkdirSync('node_modules');

	show_info('安裝打包時需要的套件...');
	// @see "dependencies" @ package.json
	// npm install electron-builder
	child_process.execSync('npm install --save-dev electron-builder', {
		stdio : 'inherit'
	});

	remove_directory('node_modules/cejs');

	// mv CeJS-master node_modules/cejs
	node_fs.renameSync('CeJS-master', 'node_modules' + path_separator + 'cejs');

	show_info('開始打包...');
	child_process.execSync('npm run-script dist', {
		stdio : 'inherit'
	});

	// cd build
	// ls -al
}
