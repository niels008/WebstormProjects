void setup(){
Serial.begin(9600);
}

void delayTime (int waitTime){
int time = millis() + waitTime;
while (millis() < time ){}
}

void loop(){
delayTime(1000);
}