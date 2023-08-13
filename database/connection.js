const mysql = require('mysql2');

const connection = mysql.createConnection({
  /*dados database*/
});

connection.connect((error) =>{
    if(error){
        console.log("Erro com a conexão com o banco de dados: ", error);
    } else{
        console.log("Conectado com o banco de dados");
    }
})

module.exports = connection;

