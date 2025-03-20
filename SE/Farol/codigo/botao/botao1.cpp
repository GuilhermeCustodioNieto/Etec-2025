// C++ code
//
int btnSet = 0;

void setup()
{
  pinMode(5, INPUT);
  pinMode(7, OUTPUT);
  Serial.begin(9600);

  btnSet = 0;
}

void loop()
{
  if (digitalRead(5) == 1) {
    btnSet = (btnSet + 1);
    if (btnSet % 2 == 0) {
      digitalWrite(7, HIGH);
    } else {
      digitalWrite(7, LOW);
    }
  }
  delay(200); // Wait for 200 millisecond(s)
  Serial.println(btnSet);
}