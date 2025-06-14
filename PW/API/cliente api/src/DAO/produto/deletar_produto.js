const { conexao } = require("../conexao.js");

async function deletarProduto(codigo) {
  if (!codigo) {
    throw new Error("Código do produto é obrigatório para deletar.");
  }

  const sql = `DELETE FROM tbl_produtos WHERE codigo = ?`;
  const conn = await conexao();

  try {
    const [resultado] = await conn.query(sql, [codigo]);
    await conn.end();
    return resultado;
  } catch (err) {
    return err.message;
  }
}

module.exports = deletarProduto;
