// C++ code
//
int counter;

void setup()
{
  pinMode(2, OUTPUT);
  pinMode(4, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(3, OUTPUT);
  pinMode(5, OUTPUT);
}

void loop()
{
  digitalWrite(2, LOW);
  digitalWrite(4, HIGH);
  digitalWrite(6, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(3, HIGH);
  digitalWrite(4, LOW);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(3, LOW);
  digitalWrite(6, LOW);
  digitalWrite(5, HIGH);
  digitalWrite(2, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(5, LOW);
  for (counter = 0; counter < 5; ++counter) {
    digitalWrite(6, HIGH);
    delay(500); // Wait for 500 millisecond(s)
    digitalWrite(6, LOW);
    delay(500); // Wait for 500 millisecond(s)
  }
}