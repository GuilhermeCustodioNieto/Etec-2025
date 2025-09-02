const { ContaPoupanca } = require("../model/ContaPoupanca.js");
const { Titular } = require("../model/Titular.js");

ContaPoupanca.gerarContasPoupanca();
const contas = ContaPoupanca.contasCP;
const titular = Titular.titulares[1];

describe("ContaPoup", () => {
  beforeEach(() => {
    ContaPoupanca.gerarContasPoupanca();
  });

  test("Deve criar uma conta poupança, render juros e não taxar", () => {
    const cp = new ContaPoupanca(2000, 2222, 202, 2002, titular);

    cp.renderJuros(2);

    expect(cp.saldo).toBeCloseTo(2020.05, 2);

    const saldoAntesTaxa = cp.saldo;
    cp.cobrarTaxa();
    expect(cp.saldo).toBe(saldoAntesTaxa);
  });

  test("Deve render juros corretamente", () => {
    const cp = contas[2];
    cp.renderJuros();

    expect(cp.saldo).toBeCloseTo(1809, 2);
  });

  test("Deve render juros por múltiplos períodos", () => {
    const cp = contas[2];
    cp.renderJuros(3);

    expect(cp.saldo).toBeCloseTo(1836.27, 2);
  });

  test("Saque dentro do saldo deve funcionar", () => {
    const cp = new ContaPoupanca(1500, 1234, 201, 2001, titular);
    const result = cp.saque(500, true);
    expect(result.saque).toBe(
      `Saque de 500 realizado com sucesso, seu saldo atual é 1000`
    );
  });

  test("Saque acima do saldo deve impedir saque", () => {
    const cp = new ContaPoupanca(500, 1234, 201, 2001, titular);
    const result = cp.saque(600, true);
    expect(result.saque).toBe(`Saque não realizado por falta de saldo`);
  });

  test("ContaPoupanca não deve reduzir saldo ao taxar", () => {
    const cp = new ContaPoupanca(2000, 1234, 201, 2001, titular);
    const saldoAntes = cp.saldo;
    cp.cobrarTaxa();
    expect(cp.saldo).toBe(saldoAntes);
  });

  test("Transferência CP → CP", () => {
    const origem = contas[2];
    const destino = contas[3];

    origem.renderJuros(3);

    const result = origem.transferir(
      {
        agencia: origem.agencia,
        numero: origem.numero_conta,
        senha: origem.senha,
      },
      {
        agencia: destino.agencia,
        numero: destino.numero_conta,
        senha: destino.senha,
      },
      100
    );

    expect(result).toEqual({ transferencia: "Realizada com sucesso" });
    expect(origem.saldo).toBeCloseTo(1763.95, 2);
    expect(destino.saldo).toBeCloseTo(3300);
  });

  test("Falha de transferência CP → CP por saldo insuficiente", () => {
    let origem = contas[2];
    let destino = contas[3];

    origem.saldo = 50;
    const result = origem.transferir(
      {
        agencia: origem.agencia,
        numero: origem.numero_conta,
        senha: origem.senha,
      },
      {
        agencia: destino.agencia,
        numero: destino.numero_conta,
        senha: destino.senha,
      },
      100
    );

    expect(result).toEqual({ transferencia: "Não realizada com sucesso" });
    expect(origem.saldo).toBe(50);
    expect(destino.saldo).toBe(3200);
  });

  test("Falha de transferência CP → CP para conta inexistente", () => {
    let origem = contas[2];

    const result = origem.transferir(
      {
        agencia: origem.agencia,
        numero: origem.numero_conta,
        senha: origem.senha,
      },
      { agencia: 0, numero: 0, senha: 0 },
      100
    );

    expect(result).toEqual({ conta: "Conta de destino inexistente" });
  });
});
