class PreCadastro{
    init(connection){
    this.connection = connection;
    this.InserirDadosPreCadastro();
}
    InserirDadosPreCadastro(nome, email, datareq, hora, sexo, peso, mensagem){
        const sql = 'Insert into PreCadastro (nome,email,datareq, hora, sexo, peso, mensagem) values (?, ?, ?, ?, ?, ?, ?)';
        this.connection.query(sql, (erro,retorno) => {
            if(erro){
                console.log(erro);
            } else{
                console.log("Dados cadastrados com sucesso!");
            }
        })
    }
}
module.exports = new PreCadastro();