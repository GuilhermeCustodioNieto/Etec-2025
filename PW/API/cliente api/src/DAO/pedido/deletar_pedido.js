const { conexao } = require("../conexao.js");

async function deletarPedido(numero) {
  if (!numero) {
    throw new Error("Número do pedido é obrigatório para deletar.");
  }

  const sql = `DELETE FROM tbl_pedido WHERE numero = ?`;
  const conn = await conexao();

  try {
    const [resultado] = await conn.query(sql, [numero]);
    await conn.end();
    return resultado;
  } catch (err) {
    return err.message;
  }
}

module.exports = deletarPedido;
