#define KNOP2 2
#define LEDB 6
#define LEDUIT 255
#define LEDAAN 0

int teller;
void setup() {
teller = 0;
// aangeven of het out of input is
pinMode(KNOP2, INPUT);
pinMode(LEDB, OUTPUT);
digitalWrite (LEDB, LEDUIT);
Serial.begin(9600);
}

void wachtOpKnopXKeer(int hoeVaak){
while (digitalRead(KNOP2) == LOW){}                   // wachten tot je hem indrukt
teller = teller + 1;                                  // telt 1 op bij de teller
Serial.print("teller = "); Serial.println(teller);    // print teller zodat je kan zien wat hij doet en wat de teller waarde is
while (digitalRead(KNOP2) == HIGH){}                  // wacht tot de knop weer los laat. anders gaat de code meteen door naar 6
delay (100);
if (teller <= 5){
digitalWrite (LEDB, LEDAAN);
Serial.println("De led is aan joehoe");
}else if (teller => 5){
digitalWrite (LEDB, LEDUIT);
Serial.println("De is uit ... hoop ik");
}
}

void loop() {
wachtOpKnopXKeer(5);
//Serial.print("Knop = "); Serial.println(digitalRead(KNOP2));
}