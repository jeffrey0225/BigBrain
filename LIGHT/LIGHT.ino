#if CONFIG_FREERTOS_UNICORE
static const BaseType_t app_cpu = 0;
#else
static const BaseType_t app_cpu = 1;
#endif

// WiFi library 
#include <WiFi.h>

// HTTP library
#include <HTTPClient.h>

// WS2812 library
#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
#include <avr/power.h>

#endif
#define PIN       15  
#define NUMPIXELS 60
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);
#define DELAYVAL 10

// WiFi 設定
const char* ssid = "AndroidAPD757";   //網路名稱     
const char* password = "33403591";   //網路密碼

// Pins
static const int led_pin = LED_BUILTIN;

// 變數
int light = 0;
String red_1;
String green_1;
String blue_1;
String brightness_1;

void light_http(void *parameter){
  while(1){
    if(WiFi.status()== WL_CONNECTED){   //Check WiFi connection status
    
     HTTPClient http;   
    
     http.begin("https://bigbrain2.herokuapp.com/color");  //Specify destination for HTTP request
     http.addHeader("Content-Type", "text/plain");             //Specify content-type header
    
     int httpResponseCode = http.POST("POSTING from ESP32");   //Send the actual POST request
    
     if(httpResponseCode == 200){
    
      String response = http.getString();                       //Get the response to the request
      Serial.println(response);           //Print request answer
      if(response[0] == '1'){
        light = 1;  
      }
      if(response[0] == '2'){
        light = 2;  
      }
      if(response[0] == '3'){
        light = 3;  
      }
      if(response[0] == '4'){
        light = 4;  
      }
      if(response[0] == '5'){
        light = 5;  
      }
      if(response[0] == '6'){
        light = 6;  
      }
      red_1 = response.substring(3,6);
      green_1 = response.substring(8,11);
      blue_1 = response.substring(13,16);
      brightness_1 =response.substring(18,21);
     }else{
    
      Serial.print("Error on sending POST: ");
      Serial.println(httpResponseCode);
    
     }
    
     http.end();  //Free resources
    
   }else{
    
      Serial.println("Error in WiFi connection");   
    
   }
    
    vTaskDelay(500 / portTICK_PERIOD_MS);  
  }
  
}

void WS2812(void *parameter){
  while(1){
    if(light == 1){      //open
      int brightness = brightness_1.toInt();
      pixels.setBrightness(brightness);
      for(int i=0;i<60;i++){
        int red = red_1.toInt();
        int green = green_1.toInt();
        int blue = blue_1.toInt();
        pixels.setPixelColor( i, pixels.Color( red, green, blue));
        pixels.show(); //燈條開始作用     
      }
    }
    if(light == 2){     //close
      for(int i=0;i<60;i++){
          pixels.setPixelColor( i, pixels.Color( 0, 0, 0));
          pixels.show(); //燈條開始作用        
      }
    }
    if(light == 3){     //party
       pixels.setBrightness(255);  
       for(int i=0;i<60;i++){     //紅
          pixels.setPixelColor( i, pixels.Color( 255, 0, 0));
          pixels.show(); //燈條開始作用
          if(light != 3)break;       
      }
      
      vTaskDelay(200 / portTICK_PERIOD_MS); 
      for(int i=0;i<60;i++){      //橙
          pixels.setPixelColor( i, pixels.Color( 255, 97, 0));
          pixels.show(); //燈條開始作用 
          if(light != 3)break;       
      }
      vTaskDelay(200 / portTICK_PERIOD_MS); 
      
      for(int i=0;i<60;i++){      //黃
          pixels.setPixelColor( i, pixels.Color( 255, 255, 0));
          pixels.show(); //燈條開始作用 
          if(light != 3)break;     
      }
      vTaskDelay(200 / portTICK_PERIOD_MS); 
      
      for(int i=0;i<60;i++){      //綠
          pixels.setPixelColor( i, pixels.Color( 0, 255, 0));
          pixels.show(); //燈條開始作用 
          if(light != 3)break;
      }
      
      vTaskDelay(200 / portTICK_PERIOD_MS); 
      
      for(int i=0;i<60;i++){      //藍
          pixels.setPixelColor( i, pixels.Color( 0, 0, 255));
          pixels.show(); //燈條開始作用 
          if(light != 3)break;       
      }
      
      vTaskDelay(200 / portTICK_PERIOD_MS); 
      
      for(int i=0;i<60;i++){      //靛
          pixels.setPixelColor( i, pixels.Color( 8, 46, 84));
          pixels.show(); //燈條開始作用 
          if(light != 3)break;       
      }
      
      vTaskDelay(200 / portTICK_PERIOD_MS); 
      
      for(int i=0;i<60;i++){      //紫
          pixels.setPixelColor( i, pixels.Color( 255, 0, 255));
          pixels.show(); //燈條開始作用 
          if(light != 3)break;       
      }
      
      vTaskDelay(200 / portTICK_PERIOD_MS); 
       
    }
    if(light == 4){     //sleep
      pixels.setBrightness(250);
      for(int i=0;i<60;i++){
          pixels.setPixelColor( i, pixels.Color( 242, 85, 0));
          pixels.show(); //燈條開始作用        
      }  
      
    }
    if(light == 5){     //study
      pixels.setBrightness(250);
      for(int i=0;i<60;i++){
          pixels.setPixelColor( i, pixels.Color( 255, 255, 255));
          pixels.show(); //燈條開始作用        
      }  
      
    }
    if(light == 6){    //relax
      pixels.setBrightness(250); 
      for(int i=0;i<60;i++){
          pixels.setPixelColor( i, pixels.Color( 0, 200, 180));
          pixels.show(); //燈條開始作用        
      }
    }
    
      
  } 
}

// WiFi connect
void setup_wifi() {
  pinMode(LED_BUILTIN,OUTPUT);
  Serial.begin(115200);
  delay(3000);   //Delay needed before calling the WiFi.begin
  
  WiFi.begin(ssid, password); 
  
  while (WiFi.status() != WL_CONNECTED) { //Check for the connection
    delay(1000);
    Serial.println("Connecting to WiFi..");
  }
  
  Serial.println("Connected to the WiFi network");
}


//-------------------- S E T U P --------------------------
void setup() {
  //pin set
  pinMode(led_pin,OUTPUT);
  pinMode(15,OUTPUT);
  
  Serial.begin(115200); //baud
  setup_wifi();
  
  #if defined(__AVR_ATtiny85__) && (F_CPU == 16000000)
  clock_prescale_set(clock_div_1);
  #endif
  pixels.begin();

  for(int i=0;i<60;i++){
    pixels.setPixelColor( i, pixels.Color( 0, 0, 0));
    pixels.show(); //燈條開始作用        
  } 
        
  xTaskCreatePinnedToCore(  //Task 
            WS2812,
            "WS2812",
            1024,
            NULL,
            1,
            NULL,
            app_cpu);
  xTaskCreatePinnedToCore(  //Task 2
            light_http,
            "light",
            10000,
            NULL,
            1,
            NULL,
            0);
  vTaskDelete(NULL);                               
}

//-------------- L O O P -------------------
void loop(){
  
}
