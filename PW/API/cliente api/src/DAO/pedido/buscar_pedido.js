const { conexao } = require("../conexao.js");

async function buscarPedidos() {
  const sql = `SELECT * FROM tbl_pedido;`;
  const conn = await conexao();

  try {
    const [rows] = await conn.query(sql);
    await conn.end();
    return rows;
  } catch (err) {
    return err.message;
  }
}

async function buscarPedido(numero) {
  const sql = `SELECT * FROM tbl_pedido WHERE numero = ?`;
  const conn = await conexao();

  try {
    const [rows] = await conn.query(sql, [numero]);
    await conn.end();
    return rows;
  } catch (err) {
    return err.message;
  }
}

module.exports = { buscarPedidos, buscarPedido };
