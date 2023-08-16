const express = require ('express');
/*const conexao = require('../database/connection');
const PreCadastro = require('../database/PreCadastro');*/
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
//PreCadastro.init(conexao);

//Config do template 
    app.engine('handlebars', handlebars.engine({defaultLayout:'main'}));
    app.set('view engine', 'handlebars');

//config do servidor
app.listen(port,() =>{
    console.log(`Servidor rodando na porta ${port}, http://localhost:3000/`);
})


//renderizando o main.handlebars
app.get('/', (req,res) =>{
    res.render('main.handlebars');
});

//rota pras páginas
app.get("/index", function(req,res){
    res.render('main.handlebars');
});
app.get("/PreCadastro", function(req,res){
    res.render('PreCadastro');
})


//puxando o css!
app.use('/public', express.static (__dirname + '/public'));

//acredito q, para imagens, vai ser da mesma forma
app.use('/public', express.static(__dirname + '/public/img'))


/*
      Sem renderizar, mandando os arquivos htmls para o servidor 
app.get('/', (req,res)=> {
    res.sendFile(__dirname + "/site/html/index.html");
})
foi feito, mas não foram enviadas as imagens e o css
*/
