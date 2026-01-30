const porta =8080
const banco=require('./banco')
const express=require('express')
app=express()
const body=require('body-parser')

app.use(body.urlencoded({extended:true}))

app.post('/loja',(req,res)=>{

    const produto = banco.salvar({
        nome:req.body.nome,
        preco:req.body.preco,
        qtd:req.body.qtd
    })
    res.send(produto)
})

app.get('/loja',(req,res)=>{
    res.send(banco.getProdutos())

})

app.get('/loja/:id',(req,res)=>{
    res.send(banco.getProduto(req.params.id))

})

app.put('/loja/:id',(req,res)=>{
    const produto=banco.salvar({
        id:req.params.id,
        nome:req.body.nome,
        preco:req.body.preco,
        qtd:req.body.qtd
    })
    res.send(produto)

})

app.delete('/loja/:id',(req,res)=>{
    const produto=banco.excluir(req.params.id)
    res.send(produto)

})

app.listen(porta,()=>{
    console.log(`Servidor rodando na porta ${porta}`)

})