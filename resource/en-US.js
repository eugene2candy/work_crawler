/*	Localized messages in CeL.
	本檔案為自動生成，請勿手動編輯！
	This file is auto created by auto-generate tool: build(.js) @ 2019.
*/'use strict';typeof CeL==='function'&&CeL.application.locale.gettext.set_text({"CeJS 網路小說漫畫下載工具":"CeJS online novels / comics downloader","欲採用圖形介面請執行 `%1`。":"To use the graphical interface, please execute `%1`.","警告：無法存取作品存放目錄 [%1]！":"Warning: Unable to access the storage directory [%1]!","下載的檔案將放在預設目錄下。":"The downloaded file will be placed in the default directory.","作品標題或 id":"work title / work id","作品列表檔案":"work title / work id","無法從網址擷取作品 id：%1":"Can not detect work id from URL: %1","\"%1\" 這個值所允許的數值類型為 %4，但現在被設定成 {%2} %3":"The allowed data type for \"%1\" is %4, but it was set to {%2} %3","有些 \"%1\" 所指定的%2路徑不存在：%3":"Some %2 path(s) specified by \"%1\" do not exist: %3","fso_file":"file path","fso_files":"file paths","fso_directory":"directory path","fso_directories":"directory paths","無法處理 \"%1\" 在數值類型為 %2 時之條件！":"Unable to process \"%1\" condition with value type %2!","\"%1\" 被設定成了有問題的值：{%2} %3":"\"%1\" is set to the problematic value: {%2} %3","未提供鍵值":"Key value not given","無法解析的時間":"Failed to parse time","未設定 User-Agent。":"User-Agent is not set.","Referer 不可為 undefined。":"`Referer` cannot be undefined.","設定 Referer：%1":"Configure Referer：%1","最小圖片大小應大於等於零":"Min image size should be greater than 0","無法解析 %1":"Can not parse %1","無法設定 %1：%2":"Unable to set %1 : %2","由命令列":"From CL","download_options.recheck":"All chapters and image of all works are detected. But will not re-download the completed image.","download_options.show_information_only":"Display the work information in the command line interface.","download_options.start_chapter":"Start/continue download. It will be automatically converted to .start_chapter_NO or .start_chapter_title. For the downloaded chapters, you must match .recheck.","download_options.start_chapter_NO":"Start/continue download from this chapter number.","download_options.start_chapter_title":"Start/continue download from this chapter title.","download_options.start_list_serial":"Specifies the serial number of the work to start downloading. The work before this signal will be skipped. Generally only used in command line settings. Default:1","download_options.rearrange_list_file":"Rearrange the list file.","download_options.regenerate":"When there is no change in the number of chapters, the cache is still used to reconstruct the data. (For example, when downloading a novel, do not re-acquire the webpage data, only rebuild the ebook file.)","download_options.reget_chapter":"Re-acquire the content of each detected chapter.","download_options.search_again":"Search work title again. Default: Using cache, won't search again.","download_options.cache_title_to_id":"When downloading a work with id, the title of the work corresponding to the cache of id will be saved. After setting this function, you don't have to search again when you enter the title of the work next time. If this feature is not set, it will not be generated as a cache file (default is .search_result_file_name=search.json).","download_options.chapter_time_interval":"When the website does not allow too frequent accesses to read/access, you can set the waiting time (ms) before downloading the next chapter information/chapter content. For example, it may take 30 seconds for a normal situation to read a chapter, you can set it to \"30s\". Can be used with one_by_one option.","download_options.chapter_filter":"Filter the chapter title keywords you want to download. For example, \"single book\".","download_options.archive_images":"Compress the image file after the comic is downloaded.","download_options.archive_all_good_images_only":"Compress the image file without any errors at all.","download_options.remove_images_after_archive":"After compressing the image file, delete the original image file.","download_options.images_archive_extension":"The file extension for image archives. For example, \"cbz\". Default: \"zip\".","download_options.MAX_ERROR_RETRY":"Number of retries: the number of times the download failed and retry when an error occurred. If the same file error exceeds this number, it will skip. If the value is too small, it is easy to break the image on some websites.","download_options.allow_EOI_error":"When the image does not have an EOI (end of image) tag, or if a non-image is detected, the file is still forcibly stored.","download_options.MIN_LENGTH":"Minimum image file size (bytes). If the value is too small, the broken image that is transmitted may be treated as a normal image without error.","download_options.timeout":"Timeout period (ms) for downloading a web page or image. If the timeout period is too small (such as 10 seconds), downloading a large file is easy to fail.","download_options.skip_error":"Ignore/skip image errors. When 404 image does not exist, the file is too small, or is detected as a non-image (if there is no EOI), the file is still forcibly stored.","download_options.skip_chapter_data_error":"When the chapter data is not available, try the next chapter directly.","download_options.preserve_work_page":"Whether to keep the work data cache under .cache_directory_name.","download_options.preserve_chapter_page":"Whether to keep the chapter page. False: explicitly not reserved, the existing chapter page will be deleted. Note: If .reget_chapter is not set, preserve_chapter_page should not be useful.","download_options.remove_ebook_directory":"After the e-book is packaged, the e-book directory is completely deleted. Please note: You must first install version 7-Zip **18.01 or higher**.","download_options.one_by_one":"Download the images one by one. Useful only for comics, not useful for novels. The chapters of the novel are downloaded one by one.","download_options.overwrite_old_file":"Overwrite the old file when the newly acquired file is larger.","download_options.main_directory":"The download location of the image file and the log file. After downloading the artwork on the website, it will be stored in this directory.","download_options.user_agent":"Browser identification. Always maintain the same browser recognition before and after the run, it should not affect the download.","download_options.proxy":"Proxy server: \"username:password@hostname:port\"","download_options.cookie":"Set the cookie to be added when downloading.","download_options.write_chapter_metadata":"Write the information of each chapter archive to the JSON file of the same name (add the .json extension) to facilitate the import of other tools.","download_options.write_image_metadata":"Write the information of each image to the JSON file of the same name (add the .json extension) to facilitate the import of other tools.","download_options.save_preference":"Save your preferences.","download_options.data_directory":"Preset the main download directory. The subdirectories of each website (ie main_directory) will be created in this directory, and the files downloaded by each website will be placed in this subdirectory. If deleted, the download directory will be recreated.","download_options.preserve_download_work_layer":"Retain download bar when download completed.","download_options.play_finished_sound":"Play a sound after download is completed.","從[%1]取得 %2 個圖片伺服器：%3":"Get %2 servers from [%1]: %3","無法從[%1]抽取出圖片伺服器列表！":"Unable to extract the image server list from [%1]!","%1: 沒有輸入 work_id！":"%1: work_id not given!","work_data.title":"Work title","work_data.id":"Work ID","work_data.author":"Author","work_data.status":"Status","work_data.chapter_count":"Count of chapter","work_data.last_update":"Last update","work_data.last_download.date":"Last download date","work_data.last_download.chapter":"Last download chapter","work_data.url":"URL","work_data.directory":"File directory","work_data.description":"Description","work_data.chapter_list":"Chapter list","work_data.chapter_NO":"Chapter number","work_data.chapter_title":"Chapter title","您可指定 \"start_chapter_NO=章節編號數字\" 或 \"start_chapter_title=章節標題\" 來選擇要開始下載的章節。":"You may set \"start_chapter_NO=chapter number \" or \"start_chapter_title=chapter title\" to decide where to start downloading,","或指定 \"chapter_filter=章節標題\" 僅下載某個章節。":"or set \"chapter_filter=chapter title\" to download specific chapter.","作品列表區塊注解 \"*/\" 後面的\"%1\"會被忽略":"\"%1\" at the back of listed work with \"*/\" will be ignored","無法讀取列表檔案：%1":"Cannot read series titles: %1","重新整理列表檔案：%1":"Rearrange series titles: %1","重新整理列表檔案 [%1]，處理了%2個作品。":"Processed %2 series titles: %1","重新整理列表檔案 [%1]，注解排除了%2個作品。":"Commented out %2 series titles: %1","重新整理列表檔案 [%1]，未作改變。":"No change to series titles: %1","網址無效：%1":"Invalid URL: %1","您可能錯把下載工具檔當作了列表檔案：%1":"You might have mistaken the download tools as series titles","改採用列表檔案：%1":"Using series titles: %1","作品 id 無效：%1":"Invalid work id: %1","MESSAGE_NEED_RE_DOWNLOAD":"The download has gone wrong, may cause by the server is temporarily unavailable or the file is lost (404). Please confirm that the error has been eliminated or the error is no longer continued and re-execute to continue the download.","警告：正下載以\"%2\"開始、長度 %1 的作品列表中。重複下載作品列表可能造成錯誤！":"Warning: downloading a list of works starting with \"%2\" and length %1. Repeating the download of the work list may cause an error!","共%1個作品下載完畢。":"A total of %1 works have been downloaded.","共%1個作品出現特殊狀況，記錄於[%2]。":"%1 works produced special conditions, recorded in [%2].","無法儲存作品《%1》之資訊至檔案！":"Can not save work data of <%1>!","創建並使用作品網址 RegExp：%1":"Create and use the work URL RegExp: %1","自作品網址提取出 work id：%1":"Extract work id from the work URL: %1","無法自作品網址提取出 work id！作品資訊：%1":"Unable to extract work id from the work URL! Work information: %1","找到%1個作品：%2":"Found %1 works: %2","crawler.extract_work_id() 不應回傳 true！請修改工具檔程式碼！":"crawler.extract_work_id() should not return true! Please modify the program code!","重新搜尋作品《%1》":"Re-searching title: [%1]","已緩存作品 id，不再重新搜尋：%1":"Cached work id, will no longer search again: %1","本網路作品網站 %1 的模組未提供搜尋功能。":"The search function is not available for %1 web site.","請先輸入作品 id，下載過一次後工具會自動記錄作品標題與 id 的轉換。":"Please enter the work id first. After downloading once, the tool will automatically record the title and id conversion.","亦可手動設定，編輯《%1》之 id 於 %2":"Can also be set manually, by editing the id of <%1> to %2","沒有《%1》的搜索結果（網站暫時不可用或改版？）":"No results for <%1> (The site is temporarily unavailable or redesigned?)","沒有搜索結果。網站暫時不可用或改版？":"No search results. Is the site temporarily unavailable or redesigned?","作品網址解析函數 parse_search_result 未回傳結果！":"The work URL resolution function parse_search_result has not returned the result!","作品網址解析函數 parse_search_result 未回傳正規結果！":"The work URL resolution function parse_search_result did not return the regular result!","無法解析搜尋作品《%1》之結果！":"Unable to parse the result of searching for <%1>!","無法解析搜尋作品之結果！":"Unable to parse the results of the search for works!","搜尋《%1》找到%2個作品：%3":"Searching <%1> and found %2 work(s): %3","未搜尋到與《%1》相符者。":"No matches were found for <%1>.","找到%2個與《%1》相符者。":"Found %2 matches with <%1>.","若您輸入的是 work id，請回報議題讓下載工具設定 extract_work_id()，以免將 work id 誤判為 work title。":"If you entered the work id, please infrom the tool by setting extract_work_id() to avoid misidentifying of work id as work title.","跳過之前已下載或檢查過，已無需再檢查的章節。":"Skip chapters that have been downloaded or checked before and no longer need to be checked.","跳過所有章節":"Skip all chapters","僅檢查%1個章節：%2":"Check only %1 chapters: %2","《%1》已 %2 沒有更新，時間過久不再強制重新下載，僅在章節數量有變化時才重新下載。":"<%1> has not been updated. %2 is no longer forced to re-download. It will only be re-downloaded if the number of chapters changes.","下載%1 - 資訊 @ %2":"Download %1 - Info @ %2","無法取得 %1 的作品資訊：%2":"Unable to get information for %1's: %2","取得空的內容":"No content found","等待 %2 之後再重新取得作品資訊頁面：%1":"Wait for %2 and re-acquiring the work information page: %1","重新取得作品資訊頁面：%1":"Re-acquiring the work information page: %1","《%1》（id：%2）非中日韓文作品標題。":"\"%1\" (id: %2) is not a Chinese, Japanese or Korean title.","無法取得或未設定作品標題《%1》（id：%2）。":"The title of the work \"%1\" (id: %2) could not be obtained or set.","下載%1 - 目次 @ %2":"Downloading %1 - Table of Contents @ %2","刪除已存在的作品資料 cache：%1":"Delete existing work data cache: %1","新資料→":"New information →","《%2》：執行 %1 時發生嚴重錯誤，異常中斷。":"<%2>: A serious error occurred during execution of %1, which was aborted.","自章節資料→":"From chapter data →","輸入 §%1 的網址，僅下載此一章節。":"Enter the URL for §%1 and download only this section.","作品不存在或已被刪除。":"The work does not exist or has been deleted.","或許作品已被刪除或屏蔽？":"Perhaps the work has been deleted or blocked?","或許作品已被刪除或屏蔽，或者網站改版了？":"Perhaps the work has been deleted or blocked, or has the website been revised?","僅下載章節編號：%1":"Download only chapter number: %1","手動指定了不下載任何章節！":"Manually specified not to download any chapters!","已設定 .recheck 選項，且之前曾下載過本作品，作品目錄有內容。":"The .recheck option has been set, the work has been downloaded before, and the catalogue has content.","既已設定 .recheck 選項，則將 .reget_chapter 選項設定為 %1 將無作用！":"With the .recheck option set, setting the .reget_chapter option to %1 will have no effect!","將自動把 .reget_chapter 轉為 true，明確指定 reget_chapter 以重新取得章節內容。":"It will automatically turn .reget_chapter to true and explicitly specify reget_chapter to re-acquire the chapter content.","作品變更過，且符合需要更新的條件。":"The work has been changed and is subject to the conditions that need to be updated.","因章節數量有變化，將重新下載並檢查所有章節內容：":"As the number of chapters changes, all chapters will be re-downloaded and checked:","章節數量無變化，共 %1 %2；":"The number of chapters has not changed, total %1 %2;","章節數量變化過小（僅差 %1 %2），因此不重新下載；":"The number of chapters with small changes (only %1 %2), but it will not be re-downloaded;","但已設定下載所有章節內容。":"However, all chapter content has been set to download.","僅利用 cache 重建資料（如小說、電子書），不重新下載所有章節內容。":"Rebuild data only with cache (such as novels, e-books), and not re-download all chapter content.","跳過本作品不處理。":"Skip this work without processing.","之前已下載到較新的第 %2 %3，因指定 start_chapter_NO=%1 而回溯。":"Previously downloaded to the newer %2 %3, backtracked by specifying start_chapter_NO=%1.","章節數量 %1 比將開始/接續之下載章節編號 %2 還少，或許因為章節有經過重整，或者上次下載時中途增刪過章節。":"The number of chapters %1 is less than the start/continued download chapter number %2, perhaps because the chapter has been reorganized, or the chapter has been added or deleted midway during the last download.","將先備份舊內容、移動目錄，而後重新自第 %1 %2下載！":"The old content will be backed up, the directory will be moved, and then re-downloaded from %1 %2!","將從頭檢查、自第 %1 %2重新下載。":"It will be re-downloaded from %1 %2.","將從頭檢查、自第 %1 %2重新生成電子書。":"The e-book will be regenerated from %1%2 .","跳過 %1 不處理。":"Skip %1 without processing.","自 §%1 接續下載。":"Download from §%1.","準備取消下載作業中，":"Ready to cancel the download job.","準備暫停下載作業中，":"Prepare to pause the download.","將會在下載完本章節後生效。":" It will take effect after downloading this chapter.","繼續下載《%1》。":"Continue to download 《%1》.","預估還需 %1 下載完本作品。":"Estimated %1 is required to complete download.","取消下載《%1》。":"Cancel download 《%1》.","暫停下載《%1》。":"Suspend downloading 《%1》.","跳過本章節不下載。":"Skipping this section without downloading.","不在 chapter_filter 所篩範圍內。跳過本章節不下載。":"Not in the range of chapter_filter. Skipping this section without downloading.","跳過 %1 不處理：%2":"Skipping %1 not processed: %2","下載第 %1 %2之章節內容前先等待 %3。":"Waiting for %3 before downloading %1 %2.","《%2》§%3：執行 %1 時發生嚴重錯誤，異常中斷。":"<%2> §%3: A serious error occurred during execution of %1, process aborted.","原已設定 chapter_list.%1=%2，後又設定 chapter_data.%1=%3，兩者相衝突！":"There is a conflict with setting chapter_list.%1=%2 with chapter_data.%1=%3!","《%1》：轉成由舊至新之順序。":"<%1> : Sort oldest to newest.","《%1》：":"<%1>: ","本作依章節標題來決定章節編號；":"This section determines the chapter number according to the chapter title;","本作存有不同的 part；":"This work has a different part;","建議設置 recheck=multi_parts_changed 選項來避免多次下載時，遇上缺話的情況。":"It is recommended to set recheck=multi_parts_changed option to avoid a missed situation when downloading multiple times.","《%1》出現章節編號倒置的情況：":"In the case of <%1>, the chapter number is inverted:","無法從章節標題《%1》判斷章節序號。":"Can not determine chapter NO from title: <%1>. ","無法從章節資料判斷章節序號：%1。":"Can not determine chapter NO from chapter data: %1","依序將章節序號設定為 %1。":" (Set as %1)","工具檔設定了 part_title %1，卻似乎未設定應設定的 `work_data.chapter_list.part_NO`? (part_NO: %2)":"The tool file has set part_title %1, but it seems that the `work_data.chapter_list.part_NO`? (part_NO: %2) should be set.","無法取得 §%1 的網址。":"Unable to receive web address of §%1.","先創建章節目錄：%1":"Creating a chapter directory：%1","解開圖片壓縮檔：%1":"Extracting image files: %1","讀取圖片壓縮檔：%1":"Reading image archive: %1","刪除章節內容頁面：%1":"Deleting image from chapter：%1","（本章為需要付費/被鎖住的章節）":" (Limited access)","%1：已派發完工作，開始並行下載各圖片。":"%1: The work has been dispatched and the images are downloaded in parallel.","下載圖 %1":"Download image #%1","下載第%2張圖前先等待%1。":"Waiting for %1 before downloading the %2 image.","無法取得第 %1 章的內容。":"Failed to get data of chapter %1","跳過 %1 §%2 並接著下載下一章。":"Skip %1 §%2 and continue next chapter.","因 cache file 壞了（例如為空檔案），將重新取得 chapter_URL，設定 .reget_chapter。":"Since the cache file is broken (for example, an empty file), chapter_URL will be retrieved and .reget_chapter will be set.","章節編號依序應為 %1，但無法自章節內容取得編號。":"The chapter number should be %1 in order, but the number cannot be obtained from the chapter content.","章節編號不一致：依序應為 %1，但從內容擷取出 %2。":"The chapter numbers are inconsistent: the order should be %1, but the %2 is taken from the content.","等待 %2 之後再重新取得章節內容頁面：%1":"Waitting for %2 and re-obtaining the chapter content page: %1","重新取得章節內容頁面：%1":"Re-acquiring chapter content page: %1","等待 %2 之後再取得章節內容頁面：%1":"Waiting for %2 and then get the chapter content page: %1","取得章節內容頁面：%1":"Get the chapter content page: %1","解析出空的頁面資訊！":"Parse out empty page information!","解析章節頁面時發生錯誤，中斷跳出：%1":"An error occurred while parsing the chapter page, it is interrupted at: %1","本章為需要付費/被鎖住的章節。":"This chapter is a chapter that requires payment/locking.","本章節沒有獲取到任何圖片！":"Did not get any image from this chapter!","所登記的圖形數量%1與有圖形列表長度%2不同！":"The number of registered images %1 is different from the length of the images list %2!","剩 %1 張圖...":"%1 images left...","等待尚未下載完成的圖片檔案：":"Waiting for the image file that has not been downloaded yet:","%1：%2筆圖片下載錯誤紀錄":"%1: %2 image download error record","從圖片壓縮檔刪除%1張本次下載成功、上次下載失敗的損壞圖片：%2":"Remove %1 images from the image compression file. The downloaded image was successfully downloaded and the last failed download is: %2","更新圖片壓縮檔：%1":"Update image archive: %1","創建圖片壓縮檔：%1":"Create image archive: %1","若欲動態增加章節，必須手動增加章節數量: work_data.chapter_count++！":"If you want to dynamically add chapters, you must manually increase the number of chapters: work_data.chapter_count++!","（本次下載共處理%1個字）":" (This download has processed a total of %1 word)","（本次下載共處理%1張圖）":" (This download has processed a total of %1 image)","於 %1 下載完畢。":"Download completed for %1.","有些為付費/受限章節。":" Some are paid/restricted chapters.","%1：本次下載作業，本作品共%2張圖片下載錯誤。":"%1: This download has a total of %2 image download errors.","未指定圖片資料":"Unspecified image data","測試圖片是否完整：%1":"Completed image testing: %1","無法處理類型為%2之圖片檔：%1":"Unable to process image file of type %2: %1","無法判別圖片檔之類型：%1":"Unable to determine the type of image file: %1","出錯次數：%1":"Number of errors: %1","強制將非圖片檔儲存為圖片":"Force non-image files to be saved as images","強制將空內容儲存為圖片":"Force empty content to be saved as an image","強制儲存損壞的圖片":"Force storage of damaged image","刪除損壞的舊圖片檔：%1":"Delete corrupted old image file: %1","壓縮檔內的圖片品質比目錄中的更好：%1":"The quality of the image in the archive is better than in the directory: %1","壓縮檔內的圖片品質比目錄中的更好，但在下載完後將可能在壓縮時被覆蓋：%1":"The quality of the image in the archive is better than in the directory, but will be overwritten after downloading: %1","保存圖片數據到硬碟上：%1":"Save image data to your hard drive: %1","無法寫入圖片檔案 [%1]。":"Unable to write to image file [%1].","可能因為作品下載目錄改變了，而 cache 資料指向不存在的舊位置。":"It may be because the download directory of the work has changed, and the cache data points to the old location that does not exist.","可能因為作品資訊 cache 與當前網站上之作品章節結構不同。":"It may be because the work information cache is different from the structure of the work chapter on the current website.","若您之前曾經下載過本作品的話，請封存原有作品目錄，或將作品資訊 cache 檔（作品目錄下的 作品id.json）改名之後嘗試全新下載。":"If you have downloaded this work before, please save the original work catalog, or rename the work cache file (the work id.json under the work directory) and try the new download.","存在較大的舊檔 (%2)，將不覆蓋：%1":"There is a large old file (%2) that will not be overwritten: %1","圖檔損壞：":"Image damaged: ","無法成功取得圖片。":"Failed to get image. ","HTTP狀態碼%1，":"HTTP status code %1,","圖片無內容：":"no contents: ","檔案過小，僅 %1 bytes：":"%1 bytes, too small:","檔案僅 %1 bytes：":"%1 bytes: ","或許圖片是完整的，只是過小而未達標，例如幾乎為空白之圖片。":"Perhaps the image is complete, just too small and not up to standard, such as an almost blank image.","您可設定 MIN_LENGTH，如 MIN_LENGTH=%1 表示允許最小為 %1 bytes 的圖片；或者先設定 skip_error=true 來忽略圖片錯誤，待取得檔案後，自行更改檔名，去掉錯誤檔名後綴%2以跳過此錯誤。":"You can set MIN_LENGTH. For example, MIN_LENGTH=%1 means to allow a image with a minimum of %1 bytes; or set skip_error=true to ignore the image error. After the file is obtained, change the file name yourself and remove the error file name suffix %2 to skip this error.","下載所得的圖片大小不同：%1。":"The downloaded image is different in size: %1.","若非因網站提早截斷連線，那麼您或許需要增長時限來提供足夠的時間下載圖片？":"If it is not because the website cuts off the connection early, then you may need to increase the time limit to provide enough time to download the image?","若錯誤持續發生，您可以設定 skip_error=true 來忽略圖片錯誤。":"If the error persists, you can set skip_error=true to ignore the image error.","您必須設定 skip_error 或 allow_EOI_error 選項，才會儲存損壞的檔案。":"You must set the skip_error or allow_EOI_error option to store corrupted files.","若您需要重新下載之前下載失敗的章節，請開啟 recheck 選項。":"If you need to re-download the section that failed to download before, turn on the recheck option.","圖片下載錯誤":"Failed to download image","等待 %2 之後再重新取得圖片：%1":"Waitting for %2 and retake the image: %1","章節編號%1：":"Chapter %1: ","字數過少（%1字元）":"Too few words (%1 characters)","無內容":"No content","不存在封存檔案用的目錄：%1":"There is no directory for archive files: %1","移除舊檔案：":"Removed old files:","打包 epub 電子書：%1":"Archive epub eBook: %1","已無閱讀卷可用。":"No read volumes are available.","此後的作品標題都被當作是網頁限定作品。":"Subsequent titles of the work are considered to be web-limited works.","下次收到閱讀券還要 %1。":"The next time you receive a reading voucher, you will need %1.","還有%1張閱讀卷，且第 %2/%3 章還有沒下載過，從此章開始檢查。":"There are still %1 reading volume, but %2/%3 chapter has not been downloaded yet. So checking from this chapter.","已付費購買章節《%1》。":"<%1>  has been purchased.","在 %1 之前（還有 %2）可以閱讀本章節《%3》。":"You can read <%3> in this section before %1 (and %2).","之前已下載過章節《%1》，不再重新購買。":"The section <%1> has been downloaded before and will not be re-purchased.","本章節狀況不明(%1)。跳過《%1》不採用閱讀卷。":"The status of this chapter is unknown (%1). Skipping \"%1\" does not use reading volumes.","未設定讓本工具自動使用閱讀卷。若您並非使用安裝包，並想要讓本工具自動使用閱讀卷，請打開檔案總管，到安裝本工具的目錄下（若是您使用安裝包，就不能夠設定帳號密碼了。），在 work_crawler.configuration.js 這個檔案中設定好帳號密碼資料，以及 \"auto_use_ticket:true\"。您可以參考 work_crawler.default_configuration.js 這個檔案來做設定。":"The tool is not set to automatically use the reading volume. If you are not using the installation package and want to have the tool automatically use the reading volume, please open the file manager and go to the directory where the tool is installed (if you use the installation package, you cannot set the account password). Sets the account password information in  Configuration.js  and set \"auto_use_ticket:true\". You can refer to the work_crawler.default_configuration.js file for configuration.","用閱讀券閱讀《%1》。":"Reading <%1> with a reading voucher.","網頁改版？無法解析！":"Web page revision? Unable to parse!","已收到%1項有期限的物品。":"%1 items with a time limit have been received.","下載時發生錯誤，無法順利取得檔案內容！":"An error occurred while downloading, and the file contents could not be obtained smoothly!","或許是下載的檔案出現錯誤？您可嘗試過段時間再下載，或選用 .recheck 選項來忽略 cache、重新下載每個圖片的頁面。":"Maybe the downloaded file has an error? You can try to download it later, or use the .recheck option to ignore the cache and re-download the page for each image.","有些篇章之URL檔名非數字：%1":"Some chapter URL names are not numbers: %1","無法解析《%1》§%2 之章節資料！":"Unable to parse chapter data for <%1> §%2!","本章節上一張圖片下載成功。下載本章節下一幅圖片。":"The previous image in this chapter was successfully downloaded. Download the next image in this chapter.","第一張圖就下載失敗了。結束下載本作品。":"The first image failed to download. Ending download for this work.","嘗試取得被屏蔽的作品。":"Trying to get the blocked work.","使用之前的 cache，自 §%1 接續下載。":"Using the previous cache to download §%1.","因為本章節內容也被屏蔽，因此不再嘗試解析其他章節。":"Because the content of this chapter is also blocked, no further attempts are made to resolve other chapters.","§%1 已被屏蔽，不再嘗試解析其他章節。":"§%1 has been blocked and no longer attempts to resolve other chapters.","無法解析章節資料並取得章節內容文字！":"Unable to parse chapter data and get chapter content text!","無法從章節內容中之連結抽取出圖片網址：%1":"Unable to extract image URL from link in chapter content: %1","作品名稱或🆔":"Series title or 🆔","貼上":"Paste","開始下載":"Start downloading","搜尋":"Search","搜尋各網站並下載作品。":"Searching form each website and downloading the work.","搜尋結果":"Search results","開啓下載目錄":"Open the download directory","網路作品網站":"Web fictions/comics sites","繁體字漫畫":"Traditional Chinese webcomics","中国内地漫画":"Simplified Chinese webcomics","日本語のウェブコミック":"Japanese webcomics","中国内地小说":"Simplified Chinese web fictions","日本語のオンライン小説":"Japanese web fictions","最愛作品清單":"Favorite series list","下載選項":"Download options","選擇%1路徑":"Select %1 path","未選擇檔案或目錄。":"No file or directory selected.","選擇了%2的路徑：%1":"Path of %2 selected: %1","自動儲存選項設定與最愛作品清單#1":"Auto-save download options","自動儲存選項設定與最愛作品清單#2":"and favorite series list","已設定自動儲存選項設定。":"Auto-save options set.","已設定不自動儲存選項設定。":"Auto-save options cancel.","重設下載選項與最愛作品清單#1":"Reset download options","重設下載選項與最愛作品清單#2":"and favorite series list","已設定自動儲存選項設定":"Automatic storage setting has been enabled","已設定不自動儲存選項設定":"Automatic storage setting has been disabled","已重設下載選項。":"Download options reset.","同時更改已手動設定下載目錄的網站 %1：%2 → %3":"Updating and setting up download website for %1：%2 → %3","舊下載目錄 \"%1\" 為空目錄，將之移除。":"The old download directory \"%1\" is an empty directory so it will be removed.","下載中的作品":"Series downloading","清除訊息":"Clear log","顯示/隱藏訊息":"Show / hidden log","限制訊息行數":"Limit log lines","不限制訊息行數":"Do not limit log lines","開啟偵錯工具":"Open DevTools","開始檢測並更新安裝包……":"Start release updating...","所執行的並非安裝包版本，因此不執行安裝包版本的升級檢查。":"You are on git master branch, skipping release upgrade check.","開始檢測安裝包更新……":"Checking for release update...","有新版安裝包：%1":"Release update available: %1","開始下載安裝包。若還沒下載完就離開程式，下次會從頭下載。您可升高訊息欄的偵錯等級，以得知下載進度。":"Started downloading the installation package. If you have not downloaded the program, leave the program and download it from the beginning. You can increase the debug level of the message bar to know the download progress.","沒有新安裝包。當前版本：%1":"Release update not available. Current version: %1","安裝包更新出錯：%1":"Error in auto-updater: %1","安裝包已下載 %1，下載速度 %2 bytes/s。":"Download speed: %2 bytes/s - Downloaded %1","安裝包已下載 %1，預估還需 %1 分鐘下載完畢。":"The installation package has been downloaded %1 and it is estimated that it will take %1 minutes to complete.","新版安裝包下載完成：%1":"New release downloaded: %1","重新啟動程式即可更新。":"Restart the application to apply the updates.","安裝包更新失敗：%1":"There was a problem updating the application: %1","請在每一行鍵入一個作品名稱或🆔：":"Enter one series title or 🆔 per line","儲存最愛作品清單":"Save favorite series list","放棄編輯最愛作品清單":"Discard editing favorite series list","儲存最愛作品清單的檔案不存在或者沒有內容。採用舊有的最愛作品列表。":"Favorite series list not found or empty. Using old favorite series list.","作品已完結。":"Series has ended.","從最愛名單中注解掉本作品。":"Remove series from favorite series list.","%1 已完結的作品名稱或🆔：%2":"%1 Ended series or 🆔: %2","檢查所有最愛作品之更新，並下載更新作品。":"Check and download updates of all favorite series.","🈳 尚無最愛作品。":"There is no favorite series list","🈳 尚未設定最愛作品。":"Favorite series list is empty","編輯最愛作品清單":"Edit favorite series list","刪除所有%1個注解、%2個重複與%3個空白行。":"Delete all %1 annotations, %2 repetitions, and %3 blank lines.","列表檔案中有%1個重複作品名稱或 id。":"There are %1 duplicate titles or ids in the list.","注解掉重複的作品名稱或🆔":"Annotate duplicate work names or 🆔","刪除重複的作品名稱或🆔":"Delete duplicate work names or 🆔","注解掉%1個已完結的作品名稱或🆔":"Commented out %1 finished work names or 🆔","讀取本網站作品資訊檔案以判別作品是否已下載過、是否完結。":"Reading the website information file of this website to determine whether the work has been downloaded and completed. ","選擇網站時，這可能造成幾十秒鐘無回應。":"When choosing a website, it can cause few seconds of unresponsiveness.","讀取所有網站之作品資訊檔案":"Reading the work information from all websites","連結":"link","網站":"site","標題":"title","僅於所獲得之作品標題特殊，不同於所查詢之作品標題時，才會標示。":"Only if the title of the obtained work is special and different from the title of the work in question, will it be marked.","作者":"Author","最愛":"Favorite","😘: 在最愛清單中, ➕: 加入最愛清單":"😘: In the list of favorites, ➕: Add to favorites list","話數":"#chapters","章節數量":"Number of chapters","曾下載":"Once downloaded","當之前下載過時，標示上次下載到第幾章節。":"Last downloaded chapter.","限":"Restricted","部份章節需要付費/被鎖住/被限制":"Some chapters need to be paid / locked / restricted","完":"Completed","作品已完結。":"Work is completed.","狀況":"Status","作品狀況":"Status of work","最新":"Lastest","最新章節":"Lastest chapter","資訊來自章節清單":"Information from the list of chapters","點擊網站名稱可下載此網站之本作品。":"Click on the website name to download this work on this website.","所有網站都未能找到本作品。":"This work was not found on all websites.","搜尋作品[%1]之結果：":"Search results for [%1]:","下載所有%1個網站找到的作品":"Download all works found on %1 websites","將所有%1個網站找到的作品全部加入網站各自之最愛清單":"Add all the works found on %1 websites to the website's favorite list.","下載所有最愛清單中的本作品":"Download all work from favorite lists","以下%1個網站未能找到本作品：":"The following %1 websites could not find this work:","錯誤原因":"Error reason","作品網站":"Website","請先在網路作品區指定要搜尋的作品類別。":"Please specify the category of the item you want to search in the online production area.","正在搜尋[%1]中，必須先取消當前的搜尋程序才能重新搜尋。":"Searching for [%1], you must cancel the current search process before you can search again.","正在搜尋[%1]中……":"Searching for [%1]...","尚無任何網站回傳結果……":"There are no website returns yet...","取消搜尋":"Cancel search","放棄還沒搜尋完成的網站":"Abandon the website that has not yet completed the search","本網站強制等待時間過長，為防封鎖不作搜尋。":"This website is forced to wait too long and is not searched for anti-blocking.","已完成 %1":"Completed %1","%1個網站仍在搜尋中：%2":"%1 sites are still searching: %2","請先輸入作品名稱或🆔。":"Input series name or 🆔 first.","請先指定要下載的網站。":"Please specify site to download first.","當前路徑：%1":"Current path: %1","載入並使用下載工具 %1":"Load %1","選擇下載工具：%1":"Select download tool: %1","下載任務初始化、讀取作品資訊中……":"Download task initialization, reading work information...","暫停":"Stop","繼續":"Continue","暫停/恢復下載":"Pause/resume","取消":"Cancel","取消下載":"Cancel download","不會馬上反應，會等到當前的章節處理完畢才處理。":"It will not react immediately, and will wait until the current chapter is processed.","開啓作品下載目錄":"Open download folder","正在從%1下載《%2》這個作品。將等到這個作品下載完畢，或者取消下載後，再下載 %3。":"Downloading <%2> from %1. Please wait until the download is complete, or cancel the download before downloading %3.","重新下載":"Redownloading","清除本下載紀錄":"Clearing downloaded record","（總共有%1個錯誤）":"(There are %1 errors in total)","自動更新非安裝包版本中……":"Auto-updating to git master branch version......","非安裝包版本更新失敗：%1":"Updating tool failed: %1","非安裝包版本更新完畢。您需要重新啟動程式以使用新版本。":"Git master branch update completed. You have to restart the application to use the new version.","更新完畢。":"Update completed. ","重新啟動應用程式。":"Restart the program.","所有當前作業都會中斷！":"All current jobs will be interrupted!","建議重新啟動應用程式以使用完整更新後的程式。":"It is recommended to restart the application to use the fully updated program.","已設定不自動更新。":"Automatically update is disabled.","檢查更新中……":"Checking update...","有新版本：%1":"Update available: %1","未發現新版本。":"Good, You're Updated!","無法讀取版本資訊 package.json！":"Unable to read version information package.json!","更新檢測失敗：%1":"Update checking failed: %1","更新失敗！":"Update failed!","本欄基本上僅供調試使用。若您有下載功能方面的需求，煩請提報議題，謝謝。":"This column is basically for debugging purposes only. If you have downloading problems, please feel free to report the issue, thank you.","布景主題：":"Theme:","light theme":"light","dark theme":"dark","因為最大的檔案有 %1 bytes，因此跳過這個%2的目錄：%3":"Because the largest file has %1 bytes, skipping this %2 directory: %3","為遊戲可執行檔或函式庫":"It is a executable or DLL file.","含有 %1/%2 個可執行檔或函式庫":"Contains %1/%2 executable files or libraries","含有 %1/%2 張圖片":"Contains %1/%2 images","次目錄中含有可執行檔或函式庫":"Subdirectory contains executable files or libraries","需要手動檢查的目錄：%1":"Directory to be checked manually: %1","因為未設定要壓縮 (do_compress)，有 %1 個檔案或目錄沒有壓縮。":"Since there is no compression (do_compress), there are %1 files or folders that are not compressed.","%1 未提供這種功能：%2":"%1 does not provide this feature: %2","在壓縮檔所在目錄下操作 %1。":"Operate %1 in the directory where the archive is located.","本函式庫尚不支援多 rootfile (.opf)！":"This library not yet support multiple rootfiles (.opf)!","未設定電子書章節目錄，將把所有章節內容直接放在電子書根目錄底下！":"If the e-book chapter directory is not set, all chapter content will be placed directly under the e-book root directory!","重建 index_of_id……":"Rebuild index_of_id...","<spine> 中包含了重複的 id，將跳過之：%1":"<spine> contains a duplicate id, will be skipping: %1","已經存在相同 id 之資源，後面的資源將直接消失！":"Resources with the same id already exist, so the resources that follow will deleted!","已經存在相同 id 之章節，後面的章節將直接消失！":"Resources with the same chapter already exist, so the resources that follow will deleted!","無法編碼無效的 id：%1":"Unable to encode, invalid id: %1","無法解碼：[%1]":"Unable to decode: [%1]","無法判別檔案 [%1] 的類型。":"Unable to determine the type of file for [%1].","項目資訊無效：%1":"Invalid item data: %1","先前已經存在相同 id 之章節，將更改後者之 id。":"This id already exists, will change the id of former chapter.","未設定 media-type，或 media-type 無效：%1":"Media-type is not set, or media-type is invalid: %1","正規化 XHTML 書籍章節內容：%1":"Formalizating XHTML chapter content: %1","正規化後之章節內容：%1":"The content of the chapter after formalization: %1","設定多個檔案為相同的內容：%1":"Set multiple files to the same content: %1","已經有相同的資源檔 [%1] %2。":"Already have the same resource file [%1] %2.","但 .href 不同，您必須手動修正：%1":"but .href is different, please manually fix it: %1","檔案已在下載隊列中，跳過重複下載動作：%1":"The file is already in the download queue, skipping the repeated download request: %1","下載隊列中存在相同檔名，卻有著不同網址的資源：下載隊列中 URL [%1] ≠ 準備下載之 URL [%2]，嘗試改成另一個檔案名稱。":"There are resources in the download queue that have the same file name but different URLs: URL [%1] in the download queue ≠ URL [%2] to be downloaded, try to change to another file name.","儲存檔名改變，您需要自行修正原參照文件中之檔名：":"To update changed file name, you need to manually change the original file name from the original folder","id 改變，您需要自行修正原參照文件中之檔名：":"The id changes, you need to correct the file name in the original folder:","已取得之資源，其媒體類型為 [%1]，與從副檔名所得到的媒體類型 [%2] 不同！":"The resource that has been obtained has a media-type of [%1], which is different from the media-type [%2] obtained from the extension file!","無法判別已取得資源之媒體類型：%1":"Unable to identify the media type of the acquired resource: %1","所取得之資源，類型為[%1]，並非圖像檔：%2":"The resource obtained, type [%1], is not a image file: %2","已取得資源：[%1] %2":"Resource acquired: [%1] %2","檔案並未在下載隊列中：%1":"The file is not in the download queue: %1","資源仍在下載中：":"Still downloading:","所有資源下載完畢。開始執行後續 %1 個已登記之作業。":"All resources have been downloaded. Start performing subsequent %1 register jobs.","已經有相同的篇章或資源檔，將不覆寫：%1":"Already have the same chapter or resource file, it will not be overwritten: %1","跳過資料 URI scheme：%1":"Skip data URI scheme: %1","檔案路徑：%1":" of file %1","跳過網頁資源：%1":"Skip web-page resource: %1","檔案路徑：%1":" of file %1","未設定標題：%1……":"Title not set: %1...","內容共長 %1 字元":"contents length: %1 chars","因為欲設定的內容長度過短或者無內容，將從 cache 檔案中取得舊的內容（%1 字元）：":"Because the content you want to set is too short or has no content, the old content (%1 characters) will be use from the cache file:","僅設定項目資料索引，未自動寫入檔案 [%1]，您需要自己完成這動作。":"Only the project data index is set, and the file [%1] is not automatically written. You need to do this yourself.","跳過長度過短的內容（%1 字元）：":"Skip content that is too short (%1 characters):","跳過無內容/空章節：":"Skip the no content/empty chapter:","若是已存在此章節則先移除：%1":"If this chapter already exists, remove it first: %1","TOC.identifier":"identifier","TOC.title":"title","TOC.language":"language","TOC.date":"date","TOC.creator":"creator","TOC.subject":"tags","TOC.description":"description","TOC.publisher":"publisher","TOC.source":"source","TOC.dcterms:modified":"Last modified date of work","TOC.calibre:series":"Series","開始寫入電子書資料……":"Start writing e-book materials...","丟失資源項目 %1":"Missing resource item %1","所欲封入注釋的詮釋資料本身含有 \"%2D%2D\" 或 \"%2D-\" 之類文字，將造成解碼時出現錯誤！":"The instructed material to be enclosed in the comment itself contains text such as \"%2D%2D\" or \"%2D-\", which will cause an error in decoding!","開始建構電子書……":"Start building e-books...","移除空目錄：%1":"Removing empty directory: %1","以 7zip 創建電子書：%1……":"Creating an eBook with 7zip: %1...","檔案列表過長，改成壓縮整個目錄。":"The file list is too long, so it is changed to compress the entire directory.","電子書創建完畢：%1":"The e-book is created: %1","不處理非字串之參數：[%1]":"Did not process non-string parameters: [%1]","共%1個參數：":"A total of %1 parameters:","輸入了非字串之參數：[%1]":"Enter a non-string parameter: [%1]","自網路取得 URL：%1":"Fetching URL: %1","自網路取得 URL：%1，%2位元組。":"Get URL from the network: %1, %2 bytes.","cookie 名稱重複！以後來/新出現者為準。":"Duplicate cookie name! The later/newcomer will prevail.","正下載 URL [%1] 中。同時間重複請求？":"Downloading URL [%1]. Repeat requests at the same time?","使用新 agent。":"Using new agent.","使用自定義 agent。":"Using custom agent.","自定義 agent 與 URL 之協定不同，將嘗試採用符合的協定：%1":"The custom agent is different from the URL and will try to adopt the conforming agreement: %1","採用泛用的 agent。":"Using generic agent.","重新設定 cookie 成：%1":"Reset the cookie to: %1","異常 HTTP 狀態碼 %2：%1":"Exception HTTP status code %2: %1","以點 \".\" 作為結尾的目錄名稱，將導致沒有辦法刪除或者複製：%1":"A directory name ending with a \".\" will result in no way to delete or copy: %1","創建目錄 [%1] 失敗：%2":"Create directory [%1] failed: %2","不存在檔案或目錄：%1":"No file or directory exists: %1","處理完畢：%1":"Processing completed: %1","JScript 檔案只能在 Windows 環境下執行！":"JScript files can only be executed in Windows environment!","無法將真偽值轉為樣式。":"unable to convert the value to a style.","欲設定的樣式值並非數字。":"the style value is not a number.","樣式值不在可設定的樣式資料[%1]中。":"The style value is not in the style sheet [%1] that can be set.","已載入過 [%1]，直接設定 user domain resource。":" [%1] is loaded, setting up user domain resource now.","強制再次載入/使用 [%2] (%1) 領域/語系。":"Force loading / using domain/locale [%2] (%1).","載入/使用 [%2] (%1) 領域/語系。":"Loading / using domain/locale [%2] (%1).","所指定之 domain [%1] 尚未載入，若有必要請使用強制載入 flag。":"Specified domain [%1] is not yet loaded. You may need to set the FORCE flag.","無法判別 domain，卻設定有 callback。":"Unable to distinguish domain, but set callback.","轉換數字：[%1]成 %2 格式。":"Convert number: [%1] to %2 format.","無法轉換數字 [%1]！":"Unable to convert number [%1]!","語法錯誤！":"Syntax error!","函數名稱不相符，可能是用了 reference？":"Function name unmatched.","轉換模式 [%1] 出錯：並非 RegExp？ %2":"Conversion mode [%1] Error: Invaild RegExp? %2","無法轉換模式 [%1]！":"Unable to convert mode [%1]!","所有環境變數：%1":"Environment variables: %1","複製貼上快速鍵":"Shortcuts","複製選取的項目：":"Copy:","貼上項目：":"Paste:","不再維護":"No longer maintained","歡迎與我們一同翻譯介面文字！#1":"Let's ","歡迎與我們一同翻譯介面文字！#2":"translate the interface","歡迎與我們一同翻譯介面文字！#3":" together!","現有%1條%2訊息尚未翻譯，歡迎您一同參與翻譯訊息！":"There are currently %1 %2 messages that have not been translated. Welcome to translate with us!","untranslated message count":"0","using language":"English"},
'en-US');