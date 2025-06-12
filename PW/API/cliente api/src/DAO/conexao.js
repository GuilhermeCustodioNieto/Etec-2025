const mysql = require("mysql2/promise")
const { config } = require("dotenv")

config()

async function conexao() {
    const pool = mysql.createPool({
        host: process.env.HOST_DATABASE, 
        port: process.env.PORTA_BD,
        user: process.env.USER, 
        password: process.env.PASSWORD, 
        database: process.env.DATA_BASE
    })
    return pool
} // <-- Fechando a função conexao

async function closeConexao(pool) {
    if (pool) {
        console.log("Fechando a conexão com o banco de dados")
        await pool.end()
    } else {
        console.log("Conexão já fechada")
    }
}

async function testarConexao() {
  try {
    const pool = await conexao();
    const conn = await pool.getConnection();
    await conn.ping();
    console.log("✅ Conexão com o MySQL bem-sucedida!");
    conn.release();
  } catch (erro) {
    console.error("❌ Falha ao conectar com o MySQL:", erro.message);
  }
}

module.exports = { conexao, closeConexao, testarConexao }