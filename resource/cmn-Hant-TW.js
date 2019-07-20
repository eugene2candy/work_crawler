/*	Localized messages in CeL.
	本檔案為自動生成，請勿手動編輯！
	This file is auto created by auto-generate tool: build(.js) @ 2019.
*/'use strict';if(typeof CeL==='function')CeL.application.locale.gettext.set_text({"Usage:":"用法：","option=true":"選項=true","option=value":"選項=數值","Options:":"選項：","boolean":"真偽","number":"數字","string":"字串","function":"函數","Starting %1":"載入 %1","file":"檔案","files":"檔案","directory":"目錄","directories":"目錄","fso_file":"檔案路徑","fso_files":"檔案路徑","fso_directory":"目錄路徑","fso_directories":"目錄路徑","Using proxy server: %1":"使用代理伺服器：%1","download_options.recheck":"從頭檢測所有作品之所有章節與所有圖片。但不重新下載已完成圖片。","download_options.start_chapter":"將開始/接續下載的章節編號。對已下載過的章節，必須配合 .recheck。","download_options.start_list_serial":"指定了要開始下載的列表序號。將會跳過這個訊號之前的作品。一般僅使用於命令列設定。default:1","download_options.rearrange_list_file":"重新整理列表檔案。","download_options.regenerate":"章節數量無變化時依舊利用 cache 重建資料(如下載小說時不重新獲取網頁資料，只重建ebook檔)。","download_options.reget_chapter":"重新獲取每個所檢測的章節內容。","download_options.search_again":"重新搜尋。default:false","download_options.chapter_time_interval":"當網站不允許太過頻繁的訪問讀取/access時，可以設定下載章節資訊/章節內容前的等待時間(ms)。例如正常情況可能30秒才看一章節，可設定成 \"30s\"。可配合 one_by_one 選項使用。","download_options.chapter_filter":"篩選想要下載的章節標題關鍵字。例如\"單行本\"。","download_options.archive_images":"漫畫下載完畢後壓縮圖片檔案。","download_options.archive_all_good_images_only":"完全沒有出現錯誤才壓縮圖片檔案。","download_options.remove_images_after_archive":"壓縮圖片檔案之後，刪掉原先的圖片檔案。","download_options.MAX_ERROR_RETRY":"重試次數：下載失敗、出錯時重新嘗試下載的次數。同一檔案錯誤超過此數量則跳出。若值太小，傳輸到一半壞掉的圖片可能被當作正常圖片而不會出現錯誤。","download_options.allow_EOI_error":"當圖片不存在 EOI (end of image) 標記，或是被偵測出非圖片時，依舊強制儲存檔案。","download_options.MIN_LENGTH":"最小容許圖片檔案大小 (bytes)。若值太小，傳輸到一半壞掉的圖片可能被當作正常圖片而不會出現錯誤。","download_options.timeout":"下載網頁或圖片的逾時等待時間(ms)。若逾時時間太小（如10秒），下載大檔案容易失敗。","download_options.skip_error":"忽略/跳過圖片錯誤。當404圖片不存在、檔案過小，或是被偵測出非圖片(如不具有EOI)時，依舊強制儲存檔案。","download_options.skip_chapter_data_error":"當無法獲取 chapter 資料時，直接嘗試下一章節。","download_options.preserve_work_page":"是否保留作品資料 cache 於 .cache_directory_name 下。","download_options.preserve_chapter_page":"是否保留 chapter page。false: 明確指定不保留，將刪除已存在的 chapter page。注意: 若是沒有設定 .reget_chapter，則 preserve_chapter_page 不應發生效用。","download_options.remove_ebook_directory":"在包裝完電子書之後，把電子書目錄整個刪掉。請注意：必須先安裝 7-Zip **18.01 以上的版本**。","download_options.one_by_one":"循序逐個、一個個下載圖片。僅對漫畫有用，對小說無用。小說章節皆為逐個下載。","download_options.overwrite_old_file":"當新獲取的檔案比較大時，覆寫舊的檔案。","download_options.main_directory":"下載網站的檔案後，將儲存於此目錄下。圖片檔+紀錄檔下載位置。","download_options.user_agent":"瀏覽器識別。運行前後始終維持相同的瀏覽器識別，應該就不會影響到下載。","download_options.proxy":"代理伺服器 proxy_server: \"proxy=username:password@hostname:port\"","download_options.write_chapter_metadata":"將每個章節壓縮檔的資訊寫入同名(添加.json延伸檔名)的JSON檔，方便其他工具匯入用。","download_options.write_image_metadata":"將每張圖片的資訊寫入同名(添加.json延伸檔名)的JSON檔，方便其他工具匯入用。","download_options.save_preference":"儲存偏好選項。","download_options.data_directory":"預設主要下載目錄。將會在這個目錄下創建各網站的子目錄（即 main_directory），再將各網站下載的檔案放在此子目錄下。若全部清空將會重設下載目錄。","download_options.preserve_download_work_layer":"下載完成後保留下載進度條。","download_options.play_finished_sound":"任務完成後播放音效。","Starting %1, save to %2":"開始處理《%1》，儲存至 %2","Can not create base directory: %1":"無法創建下載基層目錄：%1","MESSAGE_NEED_RE_DOWNLOAD":"神仙打鼓有時錯，腳步踏差誰人無。下載出錯了，例如服務器暫時斷線、檔案闕失(404)。請確認排除錯誤或錯誤不再持續後，重新執行以接續下載。","Error: %1":"錯誤發生：%1","Using convert_id[%1]":"使用解析器[%1]","Using convert_id[%1] via url: %2":"使用解析器[%1]，從 %2 解析出作品列表。","Invalid id converter for %1":"解析器無效：%1","Download %1: %2":"下載作品列表 %1: %2","not found":"未找到","limited":"有限制","finished":"已完結","Invalid token pattern: {%1} %2":"無法採用此種分隔作品欄位之樣式：{%1} %2","search result file: %1":"搜尋結果快取檔案：%1","Use title:":"採用標題：","Can not get chapter list page!":"無法成功取得章節列表頁面！","Create work_data.directory: %1":"創建作品目錄：%1","last updated date":"作品最後更新日期","last saved date":"最後儲存日期","Can not get chapter count! ":"無法取得作品數量！","Romove chapter list page: %1":"刪除已存在的章節列表頁面：%1","Unknown":"未知","Invalid NO_in_part: ":"作品分部之序號無效：","Can not determine chapter NO from %1.":"無法從%1判斷章節序號。","title: %1":"章節標題《%1》","chapter: %1":"章節資料：%1"," (Set as %1)":"依序將章節序號設定為 %1。","Invalid chapter_data: %1":"章節資料無效：%1","Get data of chapter %1":"獲取章節資料 %1",", %1":"，%1","%1 [%2] %3 images.":"%1 [%2] 共 %3 張圖片。","file extension: %1":"延伸檔名：%1","Retry %1":"重試 %1","%2: jump to chapter %1":"《%2》：跳到章節編號%1","Invalid acceptable_types: %1":"`acceptable_types` 無效：%1","Invalid URL, MUST encode first: %1":"必須先將URL編碼：%1"," (status %1)":"（HTTP狀態碼%1）"," (error: %1)":"（發生錯誤：%1）"," %1 bytes":"，檔案大小 %1 bytes","Insert a chapter url after chapter %1":"在章節編號%1之後插入新頁面","Extract ebook as cache: [%1]":"解開電子書以當作 cache：","Preserve ":"保留舊檔：","move to →":"搬移至 →","Invalid image url: %1":"圖片網址錯誤：%1","Login as [%1]":"登入為[%1]","Different url: %1 ≠ %2":"網址不同：%1 ≠ %2","中国内地漫画":"中國內地漫畫","日本語のウェブコミック":"日語網路漫畫","English webcomics":"英語網路漫畫","中国内地小说":"中國內地小說","日本語のオンライン小説":"日語網路小說","自動儲存選項設定與最愛作品清單#1":"自動儲存選項設定","自動儲存選項設定與最愛作品清單#2":"與最愛作品清單","重設下載選項與最愛作品清單#1":"重設下載選項","重設下載選項與最愛作品清單#2":"與最愛作品清單","import configuration of %1: %2":"匯入%1的整體設定：%2","import preference of %1: %2":"匯入%1的偏好：%2","Invalid theme name: %1":"無此布景名稱：%1","light theme":"明亮","dark theme":"暗色","Unknown type: %1, please install %2":"無法處理壓縮類型 %1，請安裝程式 %2","Callback execution error!":"回呼函式執行出錯！","%1 execution error!":"%1 執行出錯！","Duplicate FSO path: %1":"檔案或目錄路徑衝突：%1","Changing working directory: [%1]→[%2]":"改變操作目錄：[%1]→[%2]","Invalid id prefix: %1":"id 前綴無效：%1","%2: The target directory [%1] does not exist?":"%2：不存在標的目錄 [%1]？","%3: %1: %2 files / directories to check.":"%3：%1：將檢查 %2 個檔案或目錄。","Create directory of sub-catalog [%1]:":"創建子分類 %1 的目錄：","Invalid catalog: %1":"子分類無效：%1","Can not read file / directory: %1":"無法讀取檔案或目錄 %1","Can not read directory: %1":"無法讀取目錄 %1","Empty directory: %1":"空目錄：%1","Move %1: ":"搬移 %1：","Move %1:":"搬移 %1：","Remove empty directory: %1":"刪除空目錄：","Directory of sub-catalog [%1] created: %2":"已創建子分類 %1 的目錄：%2","%2: %1 directories to compress.":"%2: 壓縮%1個目錄。","%1/%2 compressing":"%1/%2 壓縮中","Compress":"壓縮","Target exists: %1":"已存在壓縮標的：%1","Compress %1:":"壓縮 %1：","Working directory: %1":"當前操作目錄：%1","Default download location: %1":"預設主要下載目錄：%1","歡迎與我們一同翻譯介面文字！#1":"歡迎與我們一同","歡迎與我們一同翻譯介面文字！#2":"翻譯介面文字","歡迎與我們一同翻譯介面文字！#3":"！","untranslated message count":"0","using language":"繁體中文"},
'cmn-Hant-TW');