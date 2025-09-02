const { Conta } = require("./Conta");
const { Titular } = require("./Titular");

class ContaPoupanca extends Conta {
  static contasCP = [];

  constructor(saldo, senha, agencia, numero, titular) {
    super(saldo, senha, numero, agencia, titular);
    ContaPoupanca.contasCP.push(this);
  }

  aplicarRendimento() {
    this.saldo = this.saldo + this.saldo * 0.005;

    return this.saldo;
  }

  static gerarContasPoupancas() {
    Titular.gerarTitulares();
    let titularesCP = Titular.titulares;
    new ContaPoupanca(1500, 1234, 201, 2001, titularesCP[0]);
    new ContaPoupanca(800, 5678, 202, 2002, titularesCP[1]);
    new ContaPoupanca(2500, 9101, 203, 2003, titularesCP[2]);
    new ContaPoupanca(3000, 1121, 204, 2004, titularesCP[3]);
    new ContaPoupanca(600, 3141, 205, 2005, titularesCP[4]);
    new ContaPoupanca(900, 5161, 206, 2006, titularesCP[5]);
    new ContaPoupanca(2800, 7181, 207, 2007, titularesCP[6]);
    new ContaPoupanca(4000, 9202, 208, 2008, titularesCP[7]);
    new ContaPoupanca(1200, 1222, 209, 2009, titularesCP[8]);
    new ContaPoupanca(1600, 3242, 210, 2010, titularesCP[9]);
  }
}

module.exports = { ContaPoupanca };
