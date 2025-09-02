const express = require("express");
const { Conta } = require("./model/Conta.js");
const { ContaCorrente } = require("./model/ContaCorrente.js");

Conta.gerarContas();
ContaCorrente.gerarContasCorrentes();

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/contas", (req, res) => {
  res.json(Conta.contas);
});

app.post("/consultar_saldo", (req, res) => {
  let agencia = parseInt(req.body.agencia);
  let numero = parseInt(req.body.numero);
  let senha = parseInt(req.body.senha);
  let retorno = Conta.autenticar(agencia, numero, senha);
  try {
    let resp = retorno.conta.visualizarSaldo(retorno.acesso);
    res.json({
      mensagem: "Seu saldo é:",
      valor: "R$ " + resp.saldo,
    });
  } catch (error) {
    res.json({
      mensagem: "Acesso negado",
    });
  }
});

app.get("/contas/:limite", (req, res) => {
  let limite = parseFloat(req.params.limite);
  let contasAcima = Conta.contas.filter((conta) => conta.saldo > limite);
  res.json(contasAcima);
});

app.post("/conta/retirada", (req, res) => {
  let agencia = parseInt(req.body.agencia);
  let numero = parseInt(req.body.numero);
  let senha = parseInt(req.body.senha);
  let valor = parseFloat(req.body.valor);
  let retorno = Conta.autenticar(agencia, numero, senha);
  try {
    let resp = retorno.conta.saque(valor, retorno.acesso);
    res.json({
      mensagem: resp.saque,
    });
  } catch (error) {
    res.json({
      mensagem: "Acesso negado",
    });
  }
});

app.post("/conta/adicionar", (req, res) => {
  let agencia = parseInt(req.body.agencia);
  let numero = parseInt(req.body.numero);
  let senha = parseInt(req.body.senha);
  let valor = parseFloat(req.body.valor);
  let retorno = Conta.autenticar(agencia, numero, senha);
  try {
    let resp = retorno.conta.depositar(valor, retorno.acesso);
    res.json({
      mensagem: resp.deposito,
    });
  } catch (error) {
    res.json({
      mensagem: "Acesso negado",
    });
  }
});

app.get("/contasCC", (req, res) => {
  ContaCorrente.gerarContasCorrentes();
  res.json(ContaCorrente.contasCC);
});

const porta = 3000;
app.listen(porta, () => {
  console.log(`Operando na porta ${porta}`);
});
