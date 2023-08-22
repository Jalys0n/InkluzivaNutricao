//preciso consertar isso e importar função corretamente
//const funcaovalida = require('public/js/validaPreCadastro')

const express = require ('express');
const conexao = require('./database/connection.js');
const PreCadastro = require('./database/PreCadastro.js');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
const path = require('path');
//PreCadastro.init(conexao);

//Config do template 
    app.engine('handlebars', handlebars.engine({defaultLayout:'main'}));
    app.set('view engine', 'handlebars');

//config do servidor
app.listen(port,() =>{
    console.log(`Servidor rodando na porta ${port}, http://localhost:3000/`);
})


//renderizando o main.handlebars
app.get('/',(req,res) =>{
    res.render('Home',{
        tituloPagina:'Nutrição com Devoção'
    });
})

//rota pras páginas
app.get('/Contato', function(req,res){
    res.render('Consulta',{
        tituloPagina:'Consulta'
    });
})

/*formulario*/
app.post('/situacao-cadastro', function(req,res){
    if(validaPreCadastro!=false){
        res.send("Formulário enviado com sucesso!");
    } else{
        res.send("Erro ao enviar formulário!");
    }
})


app.use(express.static(path.join(__dirname, 'public')));

//puxando o css!
app.use('/public', express.static (__dirname + '/public'));

//acredito q, para imagens, vai ser da mesma forma
app.use('/public', express.static(__dirname + '/public'))

app.use('/public', express.static(__dirname + '/public'))

/*
      Sem renderizar, mandando os arquivos htmls para o servidor 
app.get('/', (req,res)=> {
    res.sendFile(__dirname + "/site/html/index.html");
})
foi feito, mas não foram enviadas as imagens e o css
*/
