#include <ESP8266WiFi.h>
#include <WiFiClient.h> 
#include <ESP8266WebServer.h>
#include <ESP8266HTTPClient.h>
#include <elapsedMillis.h>


/* Set these to your desired credentials. */
const char *ssid = "MeowMeowMeow";  //ENTER YOUR WIFI SETTINGS
const char *password = "meow@123";
 
const String host = "http://192.168.43.105:8080";

int arr[2];
int t,count;

//=======================================================================
//                    Power on setup
//=======================================================================

void setup() {
  delay(1000);
  Serial.begin(9600);
  WiFi.mode(WIFI_OFF);        //Prevents reconnection issue (taking too long to connect)
  delay(1000);
  WiFi.mode(WIFI_STA);        //This line hides the viewing of ESP as wifi hotspot
  WiFi.begin(ssid, password);     //Connect to your WiFi router

  Serial.print("Connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }

  //If connection successful show IP address in serial monitor
  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());  //IP address assigned to your ESP

  t = 0;
  count = 0;
}


void sendPost() {

  String endpoint = "data";
  HTTPClient http;    

  char postData[100];
  bp();

  
  sprintf (postData,"{'temp':%f,'osl':%d,'bp':'%d/%d','sl':%d,'hr':%d}", temp(), osl(), arr[0],arr[1],sl(),t); 

  String url = host+"/"+endpoint;

  Serial.println(postData);
  
  WiFiClient client;
  
  http.begin(client,url);              //Specify request destination
  http.addHeader("Content-Type", "application/json");    //Specify content-type header
  
  int httpCode = http.POST(postData);   //Send the request
  
  Serial.println(httpCode);   

  
  http.end();  //Close connection
}




int osl() {
  int a  = random(0,10) >= 9 ? 1:2;
  return 80 + ( random(0,5) * pow(-1,a));
}
int* bp() {
  int a  = random(0,10);

  if(a < 5) {
    arr[0] = random(90,120);
    arr[1] = random(40,80); 
  } else if(a <=7) {
    arr[0] = random(70,89);
    arr[1] = random(40,60);
  } else {
    arr[0] = random(120,160);
    arr[1] = random(40,100);
  }
}
int sl() {
  int a  = random(0,10);
  if(a  < 5) {
    return random(91,119);
  } else if(a <=6) {
    return random(120,129);
  } else if(a <=8) {
    return random(130,139);
  } else 
    return 140;
}
float temp() {
  int a  = random(0,10) >= 9 ? 1:2;
  float b = ((float)random(0,30) / 10);
  return 97 + ( (b) * (float)pow(-1,a));
}
int hr() {
  int a = analogRead(A0);
  t += (a/1024);
}

void loop() {
  //sendPost();
  
  elapsedMillis timeElapsed;
  unsigned int interval = 60000; //one minute in ms

  while(timeElapsed < interval){
    hr();
    delay(1);
  }
  t = (t / 6000) * 60;
  Serial.print("The BPM is");
  Serial.println(t);
  char postData[100];
  bp();
  sprintf (postData,"{'temp':%f,'osl':%d,'bp':'%d/%d','sl':%d,'hr':%d}", temp(),osl(),arr[0],arr[1],sl(),t); 
  Serial.println(postData);
  sendPost();
  t  = 0;
  count = 0;
}
