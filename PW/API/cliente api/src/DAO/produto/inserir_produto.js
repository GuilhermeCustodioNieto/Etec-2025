const { conexao } = require("../conexao.js");

async function incluirProduto([codigo, nome, id_categoria, preco]) {
  const sql = `INSERT INTO tbl_produtos (codigo, nome, id_categoria, preco) VALUES (?, ?, ?, ?)`;
  const conn = await conexao();

  try {
    const [result] = await conn.query(sql, [codigo, nome, id_categoria, preco]);
    await conn.end();
    return result;
  } catch (err) {
    return err.message;
  }
}

module.exports = incluirProduto;
