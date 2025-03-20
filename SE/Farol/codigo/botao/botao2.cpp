
// C++ code
//
void setup()
{
  pinMode(5, INPUT);
  pinMode(7, OUTPUT);
  pinMode(6, INPUT);
}

void loop()
{
  if (digitalRead(5) == 1) {
    digitalWrite(7, HIGH);
  } else {
    if (digitalRead(6) == 1) {
      digitalWrite(7, LOW);
    }
  }
  delay(10); // Delay a little bit to improve simulation performance
}