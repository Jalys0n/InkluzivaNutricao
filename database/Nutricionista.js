class Nutricionista{
    init (connection){
        this.connection = connection;
        this.InserirDadosNutricionista();
    }
    InserirDadosNutricionista(){
        const sql = 'Insert into nutricionista (cpf, nome, dataNasc, email) values (?,?,?,?)';
        this.connection.query(sql,(erro,retorno)=>{
            if(erro){
                console.log(erro);
            } else{
                console.log("Os dados do nutricionista foram inseridos");
            }
        })
    }
}
module.exports = new Nutricionista();