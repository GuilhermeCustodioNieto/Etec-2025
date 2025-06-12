const express = require('express')
const env = require('dotenv')

const {buscarClientes, buscarCliente} = require('./src/DAO/cliente/buscar_cliente.js')
const {incluirCliente} = require('./src/DAO/cliente/inserir_cliente.js')
const {conexao, closeConexao, testarConexao} = require('./src/DAO/conexao.js')

const app = express()
env.config()

app.use(
    express.urlencoded({
        extended: true
    })
  )
  
  app.use(express.json())
  


app.get('/firma/1.0.1/', (req, res) => {
  res.send('Hello World')
})

app.get('/firma/1.0.1/clientes', async (req, res) =>{
    let clientes = await buscarClientes()
    res.json(clientes)
})

app.get('/firma/1.0.1/cliente/:codigo', async (req, res) =>{
    let codigo = parseInt( req.params.codigo)
    let cliente = await buscarCliente(codigo)
    res.json(cliente)
})

app.post('/firma/1.0.1/cliente', async (req, res) =>{
    let {codigo, nome, limite, telefone, id_endereco, id_status} = req.body
    const infos = [codigo, nome, telefone, limite, id_endereco, id_status]
    let result = await incluirCliente(infos)
    res.json(result)
})


app.listen(process.env.PORTA, () => {
    console.log(`Operando na porta ${process.env.PORTA}`), 
    testarConexao(conexao())
})