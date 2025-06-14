const { conexao } = require("../conexao.js");

async function buscarProdutos() {
  const sql = `SELECT * FROM tbl_produtos;`;
  const conn = await conexao();

  try {
    const [rows] = await conn.query(sql);
    await conn.end();
    return rows;
  } catch (err) {
    return err.message;
  }
}

async function buscarProduto(codigo) {
  const sql = `SELECT * FROM tbl_produtos WHERE codigo = ?`;
  const conn = await conexao();

  try {
    const [rows] = await conn.query(sql, [codigo]);
    await conn.end();
    return rows;
  } catch (err) {
    return err.message;
  }
}

module.exports = { buscarProdutos, buscarProduto };
