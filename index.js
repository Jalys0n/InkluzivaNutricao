const express = require ('express');
const connection = require('./database/connection.js');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const PreCadastro = require('./database/PreCadastro.js');
const Precadastro1 = new PreCadastro(connection);

//Config do template 
    app.engine('handlebars', handlebars.engine({defaultLayout:'main'}));
    app.set('view engine', 'handlebars');

//config do servidor
app.listen(port,() =>{
    console.log(`Servidor rodando na porta ${port}, http://localhost:3000/`);
})



//body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


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

app.get('/Dados', function(req,res){
    res.render('Dados',{
        tituloPagina:'Dados'
    })
})

/*formulario*/
app.post('/situacaoCadastro', function (req, res) {
    const nome = req.body.nomePaciente;
    const email = req.body.emailPaciente;
    const data = req.body.dataPreCadastro;
    const hora = req.body.horaPreCadastro;
    const genero = req.body.genero;
    const peso = req.body.pesoPCadastro;
    const mensagem = req.body.mensagemPCadastro;

    Precadastro1.InserirDadosFormulario(nome, email, data, hora, genero, peso, mensagem); 
    
    res.send("<script>alert('Dados inseridos com sucesso')</script>");
});


    


app.use(express.static(path.join(__dirname, 'public')));

//puxando o css!
app.use('/public', express.static (__dirname + '/public'));

//acredito q, para imagens, vai ser da mesma forma
app.use('/public', express.static(__dirname + '/public'));

app.use('/public', express.static(__dirname + '/public'))

/*
      Sem renderizar, mandando os arquivos htmls para o servidor 
app.get('/', (req,res)=> {
    res.sendFile(__dirname + "/site/html/index.html");
})
foi feito, mas não foram enviadas as imagens e o css
*/
