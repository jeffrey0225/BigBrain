Arduino --> 注意事項 <br> 
    1. 版子要選對    <br> 
    2. 使用 ESP32 需要到偏好設定的額外額外的開發版管理員網址
       新增 https://dl.espressif.com/dl/package_esp32_index.json 才能下載版子
       (ESP8266 http://arduino.esp8266.com/stable/package_esp8266com_index.json)
    3. 有bug時記得先看錯誤訊息，常見錯誤（ 少分號、少誇號、資料型態錯誤 ）
    4. RTOS 請上yt查詢 Digi-key 第一部和第二部
    * HTTP-Client.h 要是使用本地端架設網站的同時又begin在同個ip和port會崩潰，詳情詢問沅洋

Web --> 注意事項
   需下載項目: VSCODE、Python、pip、Flask、git
      VSCODE --> https://code.visualstudio.com
      Python --> https://www.python.org
      pip --> https://www.maxlist.xyz/2019/07/13/pip-install-python/
      Flask --> 同上
      git --> https://git-scm.com
   檔案和資料夾層級要放對，一個放錯就全部再見
   請有耐心把前端三大語言的教學看完
      Html --> https://youtu.be/CLUPkcLQm64
      Css --> https://youtu.be/Ml78vnNTBLw
      Js --> https://youtu.be/yZwlW5INhgk
   上述影片觀看完後，即可進入Bootstrap5
      Bootstrap5是啥？
         一個讓你能快速編輯前端的速寫網站
      Bootstrap5教學影片 --> yt搜尋 Amos金魚都能懂的Bootstrap5
      Bootstrap常見問題
         Q:昨天好好的，怎麼今天打開就壞掉了
         A:Bootstrap5 時常更新，記得去官網（英文的，不是六角學院）重新抓取模板上的資料
   再來進入後端 Flask
      先搞懂 http 運作原理
      再來學習Flask --> https://youtu.be/Z1RJmh_OqeA

MQTT --> 
   教學網址 --> https://swf.com.tw/?p=1002
   appinventor 擴充功能 --> 
      https://ullisroboterseite.de/android-AI2-PahoDown.html

專題步驟 -->
   1.先寫簡單的程式來測試library
   2.先寫簡單的網頁來控制項目（例如：LED) 確定能運作
   3.慢慢將網頁和控制項目整合，這時機構開始組裝
   4.再來將網頁前端做的好看
   5.有多的時間做一大堆網頁特效和把機構貼皮或者噴漆，讓它更好看
   6.狂修PPT和練習稿子
         
    