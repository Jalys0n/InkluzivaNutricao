class PreCadastro {
    constructor(connection) {
        this.connection = connection;
    }

    InserirDadosFormulario(nome, email, data, hora, genero, peso, mensagem) {
        const sql = 'INSERT INTO PreCadastro (nome, email, datareq, hora, sexo, peso, mensagem) VALUES (?, ?, ?, ?, ?, ?, ?)';
        this.connection.query(sql, [nome, email, data, hora, genero, peso, mensagem], (erro, retorno) => {
            if (erro) {
                console.log(erro);
            } else {
                console.log("Dados cadastrados com sucesso!");
            }
        });
    }
}

module.exports = PreCadastro;
