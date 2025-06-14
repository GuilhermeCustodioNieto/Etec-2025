const express = require("express");
const env = require("dotenv");
const ClienteRoutes = require("./src/router/router_cliente.js");
const ProdutoRoutes = require("./src/router/router_produto.js");

const { incluirCliente } = require("./src/DAO/cliente/inserir_cliente.js");
const {
  conexao,
  closeConexao,
  testarConexao,
} = require("./src/DAO/conexao.js");
const PedidoRoutes = require("./src/router/router_pedido.js");

const app = express();
env.config();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/firma/1.0.1/", (req, res) => {
  res.send("Hello World");
});

app.use("/firma/1.0.1/", ClienteRoutes);
app.use("/firma/1.0.1/", PedidoRoutes);

app.listen(process.env.PORTA, () => {
  console.log(`Operando na porta ${process.env.PORTA}`),
    testarConexao(conexao());
});
