/*
  Código base para comandar o funcionamento de um dos lados do carrinho.
  
  by Professor Junior -2025
*/

//Declaração das variáveis 
//Cada par de variáveis cuida das direções dos motores.



int IN1 = 2; //frente
int IN2 = 3; //tras
int IN3 = 4; //frente
int IN4 = 5; //tras


void setup() {
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(IN3, OUTPUT);
  pinMode(IN4, OUTPUT);
}

void loop() {
  frente();
  delay(3000);

  parar();
  delay(1000);

  re();
  delay(3000);
   
  parar();
  delay(1000);



  frenteD();
  delay(3000);

  parar();
  delay(1000);

  frenteE();
  delay(3000);


  parar();
  delay(1000);

  reD();
  delay(3000);

  parar();
  delay(1000);

  reE();
  delay(3000);


  parar();
  delay(1000);

  rodaEixoD();
  delay(3000);

  parar();
  delay(1000);

  rodaEixoE();
  delay(3000);

}





void frente(){
  digitalWrite(IN1,HIGH);
  digitalWrite(IN2,LOW);
  digitalWrite(IN3,HIGH);
  digitalWrite(IN4,LOW);
  delay(3000);
}

void parar(){
  digitalWrite(IN1,0);
  digitalWrite(IN2,0);
  digitalWrite(IN3,0);
  digitalWrite(IN4,0);
  delay(1000);
}

void re(){ 
  digitalWrite(IN1,LOW);
  digitalWrite(IN2,HIGH);
  digitalWrite(IN3,LOW);
  digitalWrite(IN4,HIGH);
  delay(3000);
} 



void frenteE() {
  digitalWrite(IN1, LOW);   // esquerda parado
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, HIGH);  // direita frente
  digitalWrite(IN4, LOW);
  delay(3000);
}


void frenteD() {
  digitalWrite(IN1, HIGH);  // esquerda frente
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);   // direita parado
  digitalWrite(IN4, LOW);
  delay(3000);
}


void reE() {
  digitalWrite(IN1,LOW);
  digitalWrite(IN2,HIGH);
  digitalWrite(IN3,LOW);
  digitalWrite(IN4,LOW);
  delay(3000);
}

void reD() {
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);
  delay(3000);
}


void rodaEixoD(){
  digitalWrite(IN1, HIGH);
  digitalWrite(IN2, LOW);
  digitalWrite(IN3, LOW);
  digitalWrite(IN4, HIGH);
  delay(3000);
}

void rodaEixoE(){
  digitalWrite(IN1, LOW);
  digitalWrite(IN2, HIGH);
  digitalWrite(IN3, HIGH);
  digitalWrite(IN4, LOW);
  delay(3000);
}