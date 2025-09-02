const { Titular } = require("./Titular.js");
const { Conta } = require("./Conta.js");

class ContaPoupanca extends Conta {
  static contasCP = [];

  constructor(saldo, senha, agencia, numero_conta, titular) {
    super(saldo, senha, agencia, numero_conta, titular);
    ContaPoupanca.contasCP.push(this);
  }

  renderJuros(periodos = 1) {
    for (let i = 0; i < periodos; i++) {
      this.saldo += this.saldo * 0.005;
    }
    return this;
  }

  cobrarTaxa() {
    return this.saldo;
  }

  static gerarContasPoupanca() {
    Titular.gerarTitulares();
    let titularesCP = Titular.titulares;

    new ContaPoupanca(1000, 1357, 201, 2001, titularesCP[0]);
    new ContaPoupanca(2500, 2468, 202, 2002, titularesCP[1]);
    new ContaPoupanca(1800, 3579, 203, 2003, titularesCP[2]);
    new ContaPoupanca(3200, 4680, 204, 2004, titularesCP[3]);
    new ContaPoupanca(500, 5791, 205, 2005, titularesCP[4]);
  }
}

module.exports = { ContaPoupanca };
