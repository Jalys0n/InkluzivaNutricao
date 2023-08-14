class Tabela {
    init(connection){
        this.connection = connection;
        this.criarRequisicaoConsulta();
    }

    criarRequisicaoConsulta(){    
        const sql = 'CREATE TABLE IF NOT EXISTS PreCadastro(id int not null auto_increment, nome varchar(500) not null, email varchar(100) not null, datareq date not null, hora time not null, sexo char not null, peso float, messagem varchar(200), primary key(id))';
        this.connection.query(sql, (erro, retorno) => {
            if (erro) {
                console.log(erro);  
            } else {
                console.log("Tabela criada ou já existe!");
            }
        });
    }
}

module.exports = new Tabela();
