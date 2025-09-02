const { Titular } = require("./Titular.js");
const { Conta } = require("./Conta.js");

class ContaCorrente extends Conta {
  static contasCC = [];

  constructor(saldo, senha, agencia, numero_conta, titular, limite = 0) {
    super(saldo, senha, agencia, numero_conta, titular);
    this.limite = limite;

    ContaCorrente.contasCC.push(this);
  }

  cobrarTaxa() {
    this.saldo -= 20;
    return this;
  }

  saque(valor, usarLimite = false) {
    if (!usarLimite && valor > this.saldo) {
      return { saque: `Saque não realizado por falta de saldo` };
    }

    if (usarLimite && valor > this.saldo + this.limite) {
      return { saque: `Saque não realizado, ultrapassa o limite disponível` };
    }

    this.saldo -= valor;

    return {
      saque: `Saque de ${valor} realizado com sucesso, seu saldo atual é ${this.saldo} (Limite: ${this.limite})`,
    };
  }

  static gerarContasCorrentes() {
    Titular.gerarTitulares();
    let titularesCC = Titular.titulares;

    new ContaCorrente(1200, 4321, 101, 1001, titularesCC[0], 500);
    new ContaCorrente(750, 8765, 102, 1002, titularesCC[1], 300);
    new ContaCorrente(1800, 3412, 103, 1003, titularesCC[2], 600);
    new ContaCorrente(2200, 9988, 104, 1004, titularesCC[3], 700);
    new ContaCorrente(300, 1111, 105, 1005, titularesCC[4], 200);
    new ContaCorrente(640, 2222, 106, 1006, titularesCC[5], 100);
    new ContaCorrente(2700, 3333, 107, 1007, titularesCC[6], 500);
    new ContaCorrente(3500, 4444, 108, 1008, titularesCC[7], 1000);
    new ContaCorrente(900, 5555, 109, 1009, titularesCC[8], 300);
    new ContaCorrente(1300, 6666, 110, 1010, titularesCC[9], 400);
    new ContaCorrente(1550, 7777, 111, 1011, titularesCC[10], 200);
    new ContaCorrente(2100, 8888, 112, 1012, titularesCC[11], 500);
    new ContaCorrente(1700, 9999, 113, 1013, titularesCC[12], 300);
    new ContaCorrente(2800, 1212, 114, 1014, titularesCC[13], 600);
    new ContaCorrente(1900, 3434, 115, 1015, titularesCC[14], 400);
    new ContaCorrente(660, 5656, 116, 1016, titularesCC[15], 100);
    new ContaCorrente(1100, 7878, 117, 1017, titularesCC[16], 300);
    new ContaCorrente(2400, 9090, 118, 1018, titularesCC[17], 500);
    new ContaCorrente(500, 2020, 119, 1019, titularesCC[18], 200);
    new ContaCorrente(3100, 3030, 120, 1020, titularesCC[19], 700);
  }
}

module.exports = { ContaCorrente };
