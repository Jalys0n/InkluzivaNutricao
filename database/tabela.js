class tabela {
    init(connection){
        this.connection = connection;
        this.criarRequisicaoConsulta();
    }

    criarRequisicaoConsulta(){    
        const slq = 'CREATE TABLE IF NOT EXISTS PreCadastro(id int not null auto_increment, nome varchar (500), email varchar (100), datareq date, hora time, sexo char, peso float, messagem varchar(200),id(primary_key));'
        this.connection.query(sql, (erro,retorno) =>{
            if(erro){
                console.log(erro);
            } else{
                console.log("Mensagem enviada!");
            }
        })
    }
}

module.exports = new tabela();