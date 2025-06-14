const e = require("express");
const {
  buscarCliente,
  buscarClientes,
} = require("../DAO/cliente/buscar_cliente.js");
const { incluirCliente } = require("../DAO/cliente/inserir_cliente.js");
const {
  atualizarCliente,
  atualizarParcialCliente,
} = require("../DAO/cliente/atualizar_cliente.js");
const deletarCliente = require("../DAO/cliente/deletar_cliente.js");

const ClienteRoutes = e.Router();

ClienteRoutes.get("/", async (req, res) => {
  let clientes = await buscarClientes();
  res.json(clientes);
});

ClienteRoutes.get("/:codigo", async (req, res) => {
  let codigo = parseInt(req.params.codigo);
  let cliente = await buscarCliente(codigo);
  res.json(cliente);
});

ClienteRoutes.post("/", async (req, res) => {
  let { codigo, nome, limite, telefone, id_endereco, id_status } = req.body;
  const infos = [codigo, nome, telefone, limite, id_endereco, id_status];
  let result = await incluirCliente(infos);
  res.json(result);
});

ClienteRoutes.put("/", async (req, res) => {
  let { codigo, nome, limite, telefone, id_endereco, id_status } = req.body;
  const infos = {
    codigo,
    nome,
    telefone,
    limite,
    id_endereco,
    id_status,
  };
  let result = await atualizarCliente(infos);
  res.json(result);
});

ClienteRoutes.patch("/:codigo", async (req, res) => {
  const { codigo } = req.params;
  const camposParaAtualizar = req.body;

  try {
    const resultado = await atualizarParcialCliente(
      codigo,
      camposParaAtualizar
    );
    res.status(200).json(resultado);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

ClienteRoutes.delete("/:codigo", async (req, res) => {
  const { codigo } = req.params;

  try {
    const resultado = await deletarCliente(codigo);
    res
      .status(200)
      .json({ mensagem: "Cliente deletado com sucesso", resultado });
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

module.exports = ClienteRoutes;
