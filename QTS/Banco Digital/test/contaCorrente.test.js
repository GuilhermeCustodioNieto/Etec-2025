const { ContaCorrente } = require("../model/ContaCorrente.js");
const { Titular } = require("../model/Titular.js");

ContaCorrente.gerarContasCorrentes();

let contas = ContaCorrente.contas;

const titular = Titular.titulares[0];
test("Deve criar uma conta corrente e cobrar taxa", () => {
  const cc = new ContaCorrente(1000, 1111, 101, 1001, titular);

  cc.cobrarTaxa();
  expect(cc.saldo).toBe(980);
});

test("Deve criar conta corrente com limite", () => {
  let contaC = new ContaCorrente(500, 2222, 202, 2002, titular, 200);
  expect(contaC.saldo).toBe(500);
  expect(contaC.limite).toBe(200);
});

const conta = contas[1];
test("Saque dentro do saldo", () => {
  let result = conta.saque(500, true);
  expect(result.saque).toBe(
    `Saque de 500 realizado com sucesso, seu saldo atual é 250 (Limite: 300)`
  );
});

test("saque acima do saldo, sem limite", () => {
  let result = conta.saque(2000, false);
  expect(result.saque).toBe(`Saque não realizado por falta de saldo`);
});

test("saque acima do saldo ultrapassando o limite", () => {
  let result = conta.saque(900, true);
  expect(result.saque).toBe(
    `Saque não realizado, ultrapassa o limite disponível`
  );
});

test("saque exatamente no limite máximo", () => {
  let result = conta.saque(550, true);
  expect(result.saque).toBe(
    `Saque de 550 realizado com sucesso, seu saldo atual é -300 (Limite: 300)`
  );
});

test("saque com saldo zero, usando limite suficiente", () => {
  conta.saldo = 0;
  let result = conta.saque(150, true);
  expect(result.saque).toBe(
    `Saque de 150 realizado com sucesso, seu saldo atual é -150 (Limite: 300)`
  );
});

test("Transferência realizada com sucesso", () => {
  let origem = contas[5];
  let destino = contas[6];

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
    400
  );

  expect(result).toEqual({ transferencia: "Realizada com sucesso" });
  expect(origem.saldo).toBe(240);
  expect(destino.saldo).toBe(3100);
});

test("Falha transferência: saldo insuficiente", () => {
  let origem = contas[5];
  let destino = contas[6];

  origem.saldo = 50;
  origem.limite = 30;

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
  expect(destino.saldo).toBe(3100);
});

test("Falha transferência: conta de destino inexistente", () => {
  let origem = contas[5];

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
