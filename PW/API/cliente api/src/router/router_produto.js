const express = require("express");
const router = express.Router();

const incluirProduto = require("../DAO/produto/inserir_produto.js");
const {
  atualizarParcialProduto,
  atualizarProduto,
} = require("../DAO/produto/atualizar_produto.js");
const {
  buscarProdutos,
  buscarProduto,
} = require("../DAO/produto/buscar_produto.js");
const deletarProduto = require("../DAO/produto/deletar_produto.js");

router.get("/", async (req, res) => {
  const resultado = await buscarProdutos();
  res.json(resultado);
});

router.get("/:codigo", async (req, res) => {
  const { codigo } = req.params;
  const resultado = await buscarProduto(codigo);
  res.json(resultado);
});

router.post("/", async (req, res) => {
  const { codigo, nome, id_categoria, preco } = req.body;

  if (!codigo || !nome || !id_categoria || !preco) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios." });
  }

  const resultado = await incluirProduto([codigo, nome, id_categoria, preco]);
  res.json(resultado);
});

router.put("/", async (req, res) => {
  const { codigo, nome, id_categoria, preco } = req.body;

  if (!codigo || !nome || !id_categoria || !preco) {
    return res
      .status(400)
      .json({ erro: "Todos os campos são obrigatórios para atualização." });
  }

  const resultado = await atualizarProduto({
    codigo,
    nome,
    id_categoria,
    preco,
  });
  res.json(resultado);
});

router.patch("/:codigo", async (req, res) => {
  const { codigo } = req.params;
  const campos = req.body;

  try {
    const resultado = await atualizarParcialProduto(codigo, campos);
    res.json(resultado);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

router.delete("/:codigo", async (req, res) => {
  const { codigo } = req.params;

  try {
    const resultado = await deletarProduto(codigo);
    res.json(resultado);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

module.exports = router;
