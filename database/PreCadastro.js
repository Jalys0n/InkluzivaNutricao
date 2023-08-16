class PreCadastro{
    init(connection){
    this.connection = connection;
    this.InserirDadosPreCadastro();
}
    InserirDadosPreCadastro(){
        const sql = 'Insert into PreCadastro(nome,email,datareq, hora, sexo, peso, messagem) values (?,?,?,?,?,?,?)';
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