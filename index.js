const express = require('express')
const { buscarClientes } = require('./src/DAO/cliente/buscarClientes.js')
const { buscarProdutos } = require('./src/DAO/produtos/buscarProdutos.js')
const { buscarPedidos } = require('./src/DAO/pedidos/buscarPedidos.js')
const { buscarEndereco } = require('./src/DAO/endereco/buscarEndereco.js')
const { buscarCategoria } = require('./src/DAO/categoria/buscarCategoria.js')
const app = express()
const {conexao, closeConexao, testarConexao} = require ("./src/DAO/conexao.js")



app.get('/empresa_produtos_limpeza/v1', (req, res) => {
    let respInicial = {
        msg: "Aplicação Funcionando"
    }
    res.json(respInicial)
})

app.get('/empresa_produtos_limpeza/v1/cliente', async (req, res) =>{
    let clientes = await buscarClientes()
    res.json(clientes)
})

app.get('/empresa_produtos_limpeza/v1/produtos', async (req, res) =>{
    let produtos = await buscarProdutos()
    res.json(produtos)
})

app.get('/empresa_produtos_limpeza/v1/pedidos', async (req, res) =>{
    let pedidos = await buscarPedidos()
    res.json(pedidos)
})

app.get('/empresa_produtos_limpeza/v1/endereco', async (req, res) =>{
    let endereco = await buscarEndereco()
    res.json(endereco)
})

app.get('/empresa_produtos_limpeza/v1/categoria', async (req, res) =>{
    let categoria = await buscarCategoria()
    res.json(categoria)
})



const porta = 3000

app.listen(porta, () =>{
    console.log("Operando na porta " + porta),
    testarConexao()
})