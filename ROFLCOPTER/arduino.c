long randomNumber;

int rol1[] = {4,2,3,1,5};
int rol2[] = {3,4,2,1,5};
int rol3[] = {1,2,3,4,5};



//Set up - this is where you get things "set-up". It will only run once
void setup() {
  

  //setup serial communications through the USB
  Serial.begin(9600);

      //Random seed for loop
 for (int herhaling = 1; herhaling <= 100; herhaling = herhaling + 1){
      //Let's make it more random
  randomSeed(analogRead(A5));
  delay(10);
  }
int verplaatsingrol1 = random(0, 4);
int verplaatsingrol2 = random(0, 40);
int verplaatsingrol3 = random(0, 4);

Serial.print("verplaatsing1 is: ");
Serial.println ((verplaatsingrol1%5)+1);
Serial.print("verplaatsing2 is: ");
Serial.println ((verplaatsingrol2%5)+1);
Serial.print ("verplaatsing3 is: ");
Serial.println ((verplaatsingrol3%5)+1);

for (int r = 0; r <= 4; r = r + 1){
  Serial.print(rol1[(r+verplaatsingrol1)%5]); Serial.print(" "); Serial.print(rol2[(r+verplaatsingrol2)%5]); Serial.print(" "); Serial.print(rol3[(r+verplaatsingrol3)%5]);
  Serial.println();
}
}//close setup

void loop() {
/*
  //generate a random number
  randomNumber = random(1,250);
  delay(120);

  //display the random number on the serial monitor
  Serial.print("The Random Number is = ");
  Serial.println(randomNumber);
*/
}