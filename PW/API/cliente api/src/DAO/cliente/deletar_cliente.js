const { conexao } = require("../conexao.js");

async function deletarCliente(id) {
  if (!id) {
    throw new Error("Código do cliente é obrigatório para deletar.");
  }

  const sql = `DELETE FROM tbl_cliente WHERE codigo = ?`;
  const conn = await conexao();

  try {
    const [resultado] = await conn.query(sql, [id]);
    await conn.end();
    return resultado;
  } catch (err) {
    return err.message;
  }
}

module.exports = deletarCliente;
