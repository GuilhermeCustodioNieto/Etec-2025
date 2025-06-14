const { conexao } = require("../conexao.js");
async function atualizarCliente(infos) {
  const data = { ...infos };

  const sql = `UPDATE tbl_cliente SET nome = ?, telefone = ?, limite = ?, id_endereco = ?, id_status = ? WHERE codigo = ?`;
  const conn = await conexao();
  try {
    const [results] = await conn.query(sql, [
      data.nome,
      data.telefone,
      data.limite,
      data.id_endereco,
      data.id_status,
      data.codigo,
    ]);
    await conn.end();
    return results;
  } catch (err) {
    return err.message;
  }
}

module.exports = atualizarCliente;

async function atualizarParcialCliente(codigo, campos) {
  if (!codigo || !campos || Object.keys(campos).length === 0) {
    throw new Error("Código e campos obrigatórios para PATCH.");
  }

  const updates = Object.keys(campos)
    .map((chave) => `${chave} = ?`)
    .join(", ");
  const valores = Object.values(campos);

  const sql = `UPDATE tbl_cliente SET ${updates} WHERE codigo = ?`;
  const conn = await conexao();

  try {
    const [resultado] = await conn.query(sql, [...valores, codigo]);
    await conn.end();
    return resultado;
  } catch (err) {
    return err.message;
  }
}

module.exports = { atualizarParcialCliente };
