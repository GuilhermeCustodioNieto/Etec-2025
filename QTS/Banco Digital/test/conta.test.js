const { Conta } = require("../model/Conta.js");

beforeEach(() => {
  Conta.contas = [];
  Conta.gerarContas();
});

describe("Testes da classe Conta", () => {
  test("Lista de contas deve ter 13 elementos", () => {
    expect(Conta.contas.length).toBe(13);
  });

  test("Função transferir deve transferir saldo corretamente", () => {
    let origem = Conta.contas[5];
    let destino = Conta.contas[6];

    let resp = origem.transferir(origem, destino, 200);

    expect(resp.transferencia).toBe("Realizada com sucesso");
    expect(origem.saldo).toBe(700);
    expect(destino.saldo).toBe(650);
  });

  test("Transferência não deve ser realizada sem saldo", () => {
    let origem = Conta.contas[5];
    let destino = Conta.contas[6];

    let resp = origem.transferir(origem, destino, 5000);

    expect(resp.transferencia).toBe("Não realizada com sucesso");
    expect(origem.saldo).toBe(900);
    expect(destino.saldo).toBe(450);
  });

  test("Função saque", () => {
    let conta = Conta.contas[1];

    let resp1 = conta.saque(500, true);
    expect(resp1.saque).toBe(
      `Saque de 500 realizado com sucesso, seu saldo atual é 1000`
    );

    let resp2 = conta.saque(500, false);
    expect(resp2.error).toBe("Acesso negado");

    let resp3 = conta.saque(5000, true);
    expect(resp3.saque).toBe("Saque não realizado por falta de saldo");
  });

  test("Função autenticar", () => {
    let resp = Conta.autenticar(543, 2598, 1234);
    expect(resp.acesso).toBe(true);
    expect(resp.conta.saldo).toBe(500);

    let resp2 = Conta.autenticar(543, 2598, 9999);
    expect(resp2.acesso).toBe(false);
    expect(resp2.conta).toBe(null);
  });

  test("Depositar", () => {
    let conta = Conta.contas[3];

    let resp1 = conta.depositar(100, true);
    expect(resp1.deposito).toBe(
      `Realizado deposito de 100 com sucesso, seu saldo atual é 850`
    );

    let resp2 = conta.depositar(100, false);
    expect(resp2.deposito).toBe("Acesso negado");
  });

  test("Visualizar saldo", () => {
    let conta = Conta.contas[0];

    let resp1 = conta.visualizarSaldo(true);
    expect(resp1.saldo).toBe(500);

    let resp2 = conta.visualizarSaldo(false);
    expect(resp2.error).toBe("Acesso negado");
  });
});
