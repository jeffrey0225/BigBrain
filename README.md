Arduino --> 注意事項<br> 
    1. 版子要選對<br> 
    2. 使用 ESP32 需要到偏好設定的額外額外的開發版管理員網址<br> 
       新增 https://dl.espressif.com/dl/package_esp32_index.json 才能下載版子<br>
       (ESP8266 http://arduino.esp8266.com/stable/package_esp8266com_index.json)<br> 
    3. 有bug時記得先看錯誤訊息，常見錯誤（ 少分號、少誇號、資料型態錯誤 <br> 
    4. RTOS 請上yt查詢 Digi-key 第一部和第二部<br>
    * 可以參考我給予的程式碼做運用 
    * HTTP-Client.h 要是使用本地端架設網站的同時又begin在同個ip和port會崩潰，詳情詢問沅洋<br> 

Web --> 注意事項<br> 
   需下載項目: VSCODE、Python、pip、Flask、git<br> 
      VSCODE --> https://code.visualstudio.com<br> 
      Python --> https://www.python.org<br> 
      pip --> https://www.maxlist.xyz/2019/07/13/pip-install-python/<br> 
      Flask --> 同上<br> 
      git --> https://git-scm.com<br> 
   檔案和資料夾層級要放對，一個放錯就全部再見<br> 
   請有耐心把前端三大語言的教學看完<br> 
      Html --> https://youtu.be/CLUPkcLQm64<br> 
      Css --> https://youtu.be/Ml78vnNTBLw<br> 
      Js --> https://youtu.be/yZwlW5INhgk<br> 
   上述影片觀看完後，即可進入Bootstrap5<br> 
      Bootstrap5是啥？<br> 
         一個讓你能快速編輯前端的速寫網站<br> 
      Bootstrap5教學影片 --> yt搜尋 Amos金魚都能懂的Bootstrap5<br> 
      Bootstrap常見問題<br> 
         Q:昨天好好的，怎麼今天打開就壞掉了<br> 
         A:Bootstrap5 時常更新，記得去官網（英文的，不是六角學院）重新抓取模板上的資料<br> 
   再來進入後端 Flask<br> 
      先搞懂 http 運作原理<br> 
      再來學習Flask --> https://youtu.be/Z1RJmh_OqeA<br> 

Heroku注意事項--><br>
檔案名稱"Procfile"要全部一致，只要不一樣就不能執行，要是開啟heroku時出現錯誤，再安裝一次gunicorn，<br>
要是還有問題請看錯誤訊息（依照它給予的指令複製到終端機）<br>

MQTT --><br> 
   教學網址 --> https://swf.com.tw/?p=1002<br> 
   appinventor 擴充功能 -->  https://ullisroboterseite.de/android-AI2-PahoDown.html<br> 

專題步驟 --><br> 
   1.先寫簡單的程式來測試library<br> 
   2.先寫簡單的網頁來控制項目（例如：LED) 確定能運作<br> 
   3.慢慢將網頁和控制項目整合，這時機構開始組裝<br> 
   4.再來將網頁前端做的好看<br> 
   5.有多的時間做一大堆網頁特效和把機構貼皮或者噴漆，讓它更好看<br> 
   6.狂修PPT和練習稿子<br> 
         
    