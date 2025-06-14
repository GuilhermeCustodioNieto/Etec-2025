const { conexao } = require("../conexao.js");

async function incluirPedido([numero, data_elaboracao, cliente_id]) {
  const sql = `INSERT INTO tbl_pedido (numero, data_elaboracao, cliente_id) VALUES (?, ?, ?)`;
  const conn = await conexao();

  try {
    const [result] = await conn.query(sql, [
      numero,
      data_elaboracao,
      cliente_id,
    ]);
    await conn.end();
    return result;
  } catch (err) {
    return err.message;
  }
}

module.exports = incluirPedido;
