const { conexao } = require("../conexao.js");

async function atualizarPedido({ numero, data_elaboracao, cliente_id }) {
  const sql = `UPDATE tbl_pedido SET data_elaboracao = ?, cliente_id = ? WHERE numero = ?`;
  const conn = await conexao();

  try {
    const [result] = await conn.query(sql, [
      data_elaboracao,
      cliente_id,
      numero,
    ]);
    await conn.end();
    return result;
  } catch (err) {
    return err.message;
  }
}

async function atualizarParcialPedido(numero, campos) {
  if (!numero || !campos || Object.keys(campos).length === 0) {
    throw new Error(
      "Número do pedido e campos para atualizar são obrigatórios."
    );
  }

  const updates = Object.keys(campos)
    .map((chave) => `${chave} = ?`)
    .join(", ");
  const valores = Object.values(campos);

  const sql = `UPDATE tbl_pedido SET ${updates} WHERE numero = ?`;
  const conn = await conexao();

  try {
    const [resultado] = await conn.query(sql, [...valores, numero]);
    await conn.end();
    return resultado;
  } catch (err) {
    return err.message;
  }
}

module.exports = { atualizarParcialPedido, atualizarPedido };
