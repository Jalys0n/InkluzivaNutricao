const express = require ('express');
/*const conexao = require('../database/connection');
const PreCadastro = require('../database/PreCadastro');*/
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
//PreCadastro.init(conexao);

//Config do template 
    app.engine('handlebars', handlebars.engine({defaultLayout:'main' }));
    app.set('view engine', 'handlebars');


app.listen(port,() =>{
    console.log(`Servidor rodando na porta ${port}`);
})

app.get('/', (req,res) =>{
    res.render('../views/PreCadastro.handlebars');
});

//css
app.use('/public', express.static (__dirname + '/public'));