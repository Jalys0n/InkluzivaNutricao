create table PreCadastro(
    id int not null auto_increment,
    nome varchar (500),
    email varchar (100),
    datareq date,
    hora time, 
    sexo char, 
    peso float,
    mensagem varchar(200),
    PRIMARY_KEY(id)
);


 const sql = 'CREATE TABLE IF NOT EXISTS PreCadastro(id int not null auto_increment,
 nome varchar(500), email varchar(100), datareq date, hora time, sexo char, peso float, messagem varchar(200), 
 (id PRIMARY_KEY))';



/*comando pra quando eu for inserir dados na tabela*/
 const sql = 'Insert into PreCadastro(nome,email,datareq, hora, sexo, peso, mensagem) values (?,?,?,?,?,?,?)';

 /*ideia de comando futuro para trazer os dados das tabelas*/
 const sql = 'select nome, email, datareq, hora, sexo, peso, messagem from PreCadastro';
 
