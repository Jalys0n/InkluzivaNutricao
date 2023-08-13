const express = require ('express');
const conexao = require('../database/connection');
const app = express();

const port = 3000;

app.listen(port,() =>{
    console.log(`Servidor rodando na porta ${port}`);
})

app.get('/', (req,res) =>{
res.status(200).json({"Message": 'Rota get acessada!'})
});