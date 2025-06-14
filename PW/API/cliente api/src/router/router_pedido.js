const express = require("express");
const { buscarPedido, buscarPedidos } = require("../DAO/pedido/buscar_pedido");
const incluirPedido = require("../DAO/pedido/inserir_pedido");
const atualizarPedido = require("../DAO/pedido/atualizar_cliente");
const deletarPedido = require("../DAO/pedido/deletar_pedido");

const PedidoRoutes = express.Router();

PedidoRoutes.get("/pedidos", async (req, res) => {
  const pedidos = await buscarPedidos();
  res.json(pedidos);
});

PedidoRoutes.get("/pedido/:numero", async (req, res) => {
  const numero = parseInt(req.params.numero);
  const pedido = await buscarPedidoPorNumero(numero);
  res.json(pedido);
});

PedidoRoutes.post("/pedido", async (req, res) => {
  const { numero, data_elaboracao, cliente_id } = req.body;
  const infos = [numero, data_elaboracao, cliente_id];
  const resultado = await incluirPedido(infos);
  res.json(resultado);
});

PedidoRoutes.put("/pedido", async (req, res) => {
  const { numero, data_elaboracao, cliente_id } = req.body;
  const infos = { numero, data_elaboracao, cliente_id };
  const resultado = await atualizarPedido(infos);
  res.json(resultado);
});

PedidoRoutes.patch("/pedido/:codigo", async (req, res) => {
  const { codigo } = req.params;
  const camposParaAtualizar = req.body;

  try {
    const resultado = await atualizarPedido.atualizarParcialPedido(
      codigo,
      camposParaAtualizar
    );
    res.status(200).json(resultado);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

PedidoRoutes.delete("/pedido/:numero", async (req, res) => {
  const numero = parseInt(req.params.numero);
  try {
    const resultado = await deletarPedido(numero);
    res
      .status(200)
      .json({ mensagem: "Pedido deletado com sucesso", resultado });
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

module.exports = PedidoRoutes;
