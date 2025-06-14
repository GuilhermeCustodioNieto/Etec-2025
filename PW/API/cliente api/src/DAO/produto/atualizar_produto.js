const { conexao } = require("../conexao.js");
async function atualizarProduto(infos) {
  const { codigo, nome, id_categoria, preco } = infos;
  const sql = `UPDATE tbl_produtos SET nome = ?, id_categoria = ?, preco = ? WHERE codigo = ?`;
  const conn = await conexao();

  try {
    const [results] = await conn.query(sql, [
      nome,
      id_categoria,
      preco,
      codigo,
    ]);
    await conn.end();
    return results;
  } catch (err) {
    return err.message;
  }
}

module.exports = atualizarProduto;

async function atualizarParcialProduto(codigo, campos) {
  if (!codigo || !campos || Object.keys(campos).length === 0) {
    throw new Error("Código e campos obrigatórios para PATCH.");
  }

  const updates = Object.keys(campos)
    .map((chave) => `${chave} = ?`)
    .join(", ");
  const valores = Object.values(campos);

  const sql = `UPDATE tbl_produtos SET ${updates} WHERE codigo = ?`;
  const conn = await conexao();

  try {
    const [resultado] = await conn.query(sql, [...valores, codigo]);
    await conn.end();
    return resultado;
  } catch (err) {
    return err.message;
  }
}

module.exports = { atualizarParcialProduto };
