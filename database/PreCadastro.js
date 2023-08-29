class PreCadastro {
    constructor(connection) {
        this.connection = connection;
    }

    InserirDadosPreCadastro(formulario, callback) {
        const sql = 'Insert into PreCadastro (nome, email, datareq, hora, sexo, peso, mensagem) values (?, ?, ?, ?, ?, ?, ?)';
        const { nome, email, data, hora, genero, peso, mensagem } = formulario;
        const sexo = genero === 'sexoMasculino' ? 'M' : 'F';

        this.connection.query(sql, [nome, email, data, hora, sexo, peso, mensagem], (erro, retorno) => {
            if (erro) {
                console.log(erro);
                callback(erro, null);
            } else {
                console.log("Dados cadastrados com sucesso!");
                callback(null, retorno);
            }
        });
    }
}

module.exports = PreCadastro;
