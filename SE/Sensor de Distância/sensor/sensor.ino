// C++ code
//
int ultrassonicSensor = 0;

long readUltrasonicDistance(int triggerPin, int echoPin)
{
  pinMode(triggerPin, OUTPUT);  // Clear the trigger
  digitalWrite(triggerPin, LOW);
  delayMicroseconds(2);
  // Sets the trigger pin to HIGH state for 10 microseconds
  digitalWrite(triggerPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(triggerPin, LOW);
  pinMode(echoPin, INPUT);
  // Reads the echo pin, and returns the sound wave travel time in microseconds
  return pulseIn(echoPin, HIGH);
}

void setup()
{
  Serial.begin(9600);
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
}

void loop()
{
  Serial.println(0.01723 * readUltrasonicDistance(A0, A1));
  if (0.01723 * readUltrasonicDistance(A0, A1) <= 7) {
    digitalWrite(2, HIGH);
    digitalWrite(3, LOW);
    digitalWrite(4, LOW);
  } else {
    if (0.01723 * readUltrasonicDistance(A0, A1) > 7 && 0.01723 * readUltrasonicDistance(A0, A1) <= 11) {
      digitalWrite(2, LOW);
      digitalWrite(3, HIGH);
      digitalWrite(4, LOW);
    } else {
      if (0.01723 * readUltrasonicDistance(A0, A1) > 11 && 0.01723 * readUltrasonicDistance(A0, A1) <= 15) {
        digitalWrite(2, LOW);
        digitalWrite(3, LOW);
        digitalWrite(4, HIGH);
      } else {
        digitalWrite(2, HIGH);
        digitalWrite(3, HIGH);
        digitalWrite(4, HIGH);
      }
    }
  }
  delay(10); // Delay a little bit to improve simulation performance
}