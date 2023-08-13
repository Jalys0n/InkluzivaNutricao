create table PreCadastro(
    id int not null auto_increment,
    nome varchar (500),
    email varchar (100),
    datareq date,
    hora time, 
    sexo char, 
    peso float,
    messagem varchar(200),
    id(primary_key)
);