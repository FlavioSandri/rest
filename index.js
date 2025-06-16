const express = require('express')
const { buscarClientes } = require('./src/DAO/cliente/buscarClientes.js')
const { itemPedido } = require('./src/DAO/item/itemPedido.js')
const { buscarStatus } = require('./src/DAO/status/buscarStatus.js')
const { buscarProdutos } = require('./src/DAO/produtos/buscarProdutos.js')
const { buscarPedidos } = require('./src/DAO/pedidos/buscarPedidos.js')
const { buscarEndereco } = require('./src/DAO/endereco/buscarEndereco.js')
const { buscarCategoria } = require('./src/DAO/categoria/buscarCategoria.js')
const app = express()
const {conexao, closeConexao, testarConexao} = require ("./src/DAO/conexao.js")


//
app.get('/empresa_produtos_limpeza/v1', (req, res) => {
    let respInicial = {
        msg: "Aplicação Funcionando"
    }
    res.json(respInicial)
})


//
app.get('/empresa_produtos_limpeza/v1/cliente', async (req, res) =>{
    let clientes = await buscarClientes()
    res.json(clientes)
})

app.post('/firma/1.0.0/cliente', async (req, res) =>{
    let {codigo, nome, limite, telefone, id_endereco, id_status} = req.body
    const infos = [codigo, nome, telefone, limite, id_endereco, id_status]
   let result = await incluirCliente(infos)
    res.json(result)
})


//
app.get('/empresa_produtos_limpeza/v1/item', async (req, res) =>{
    let item = await itemPedido()
    res.json(item)
})

app.post('/firma/1.0.0/item', async (req, res) =>{
    let {id, id_pedido, id_produto, qnt} = req.body
    const infos = [id, id_pedido, id_produto, qnt]
   let result = await itemPedido(infos)
    res.json(result)
})


//
app.get('/empresa_produtos_limpeza/v1/status', async (req, res) =>{
    let status = await buscarStatus()
    res.json(status)
})

app.post('/firma/1.0.0/status', async (req, res) =>{
    let {id, nome} = req.body
    const infos = [id, nome]
   let result = await incluirStatus (infos)
    res.json(result)
})


//
app.get('/empresa_produtos_limpeza/v1/produtos', async (req, res) =>{
    let produtos = await buscarProdutos()
    res.json(produtos)
})

app.post('/firma/1.0.0/produtos', async (req, res) =>{
    let {codigo,nome, id_categoria, preco} = req.body
    const infos = [codigo,nome, id_categoria, preco]
   let result = await incluirProdutos(infos)
    res.json(result)
})


//
app.get('/empresa_produtos_limpeza/v1/pedidos', async (req, res) =>{
    let pedidos = await buscarPedidos()
    res.json(pedidos)
})

app.post('/firma/1.0.0/pedidos', async (req, res) =>{
    let {codigo, nome, limite, telefone, id_endereco, id_status} = req.body
    const infos = [codigo, nome, telefone, limite, id_endereco, id_status]
   let result = await incluirPedidos(infos)
    res.json(result)
})


//
app.get('/empresa_produtos_limpeza/v1/endereco', async (req, res) =>{
    let endereco = await buscarEndereco()
    res.json(endereco)
})

app.post('/firma/1.0.0/endereco', async (req, res) =>{
    let {id, logradouro, cep, numero, bairro,  cidade} = req.body
    const infos = [id, logradouro, cep, numero, bairro,  cidade]
   let result = await incluirEndereco(infos)
    res.json(result)
})


//
app.get('/empresa_produtos_limpeza/v1/categoria', async (req, res) =>{
    let categoria = await buscarCategoria()
    res.json(categoria)
})

app.post('/firma/1.0.0/categoria', async (req, res) =>{
    let {id, nome} = req.body
    const infos = [id, nome]
   let result = await incluirCategoria(infos)
    res.json(result)
})



const porta = 3000

app.listen(porta, () =>{
    console.log("Operando na porta " + porta),
    testarConexao()
})