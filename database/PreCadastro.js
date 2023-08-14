class PreCadastro{
    init(connection){
    this.connection = connection;
    this.InserirDadosPreCadastro();
}
    InserirDadosPreCadastro(){
        const sql = 'Insert into PreCadastro(nome,email,datareq, hora, sexo, peso, messagem) values ("José", "josealysoncosta@gmail.com", "2023-08-14", "09:58:00", "M", 80, "Teste de mensagem")';
        this.connection.query(sql, (erro,retorno) => {
            if(erro){
                console.log(erro);
            } else{
                console.log("Mensagem enviada com sucesso!");
            }
        })
    }
}
module.exports = new PreCadastro();