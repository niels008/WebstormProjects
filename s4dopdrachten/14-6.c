#include "_init.h"

 void setup(){
 bb_init();

 }

 void delayTime(int waitTime){                      // je doet een waarde in het variable waittime time = millis() + 5. wanneer tijd hoger is als millis en de knop is actief dan activeer je de buzzer
 int time = millis() + waitTime;
 while(millis() < time){                            //millis() is tijd in miliseconde
    if(digitalRead(BUTTON3_PIN) == 1){              // digitalRead leest de knop wanneer je hier op drukt
    //buzzer activeren
    // druk op de knop
    Serial.println("knop gedrukt in delay");        // Serial.println ("binnen deze haakjes laat hij zien als txt") zonder haakjes word het letterlijk wat er staat als object
    for (int i=0; i<500; i++)                       // het variable i is 0 als i lageris als 500 komt er 1 bij
      {
         digitalWrite(BUZZER_PIN, HIGH);            // output van je buzzer (arduino maakt nu herrie)
         delayMicroseconds(1915);                   // het aantal micro seconde als dilay dit is dus 1915 micro seconden / miliseconde
         digitalWrite(BUZZER_PIN, LOW);             // output is low betekend dat de output uit gaat dus ook de buzzer niet meer actief is en stopt
      }
    }
   }
 }


 void loop () {
 delay(300);                                        // delay maakt gebruik van een 300 bit delay dus geen secondes voor secondes moet je gebruik maken van parseInt
 analogWrite(RGB2_BLUE, 100);                       // je geeft RGB2_BLUE een waarde van 100 uit een 0 - 255
 while(digitalRead(BUTTON3_PIN) == 0){}             // als digitalRead dus de knop niet gelezen word gebeurt er niks of krijg je een korte pause
 delay(150);                                        // direct daarna krijg je een pause van 150 bits
 analogWrite(RGB2_BLUE, 255);                       // na de pause krijg je een waarde van 255 uit 0 - 255 dit houd in dat je let volledig aan staat
 //wacht op knop
 //als knop -> led uit, terug naar loop
 }