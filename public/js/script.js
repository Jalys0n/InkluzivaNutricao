function display(){
    alert("Hello World!");
}
/*Acho que só vou utilizar pra abrir uns alertas!*/
function campoObrigatorio (){
    alert("Este campo é obrigatório!");
}

//preciso fazer algo, obviamente, para que não deixe enviar dados vazios. 
function validaPreCadastro(){
    const nome = document.getElementById("nomePaciente").value;
    const email = document.getElementById("emailPaciente").value;
    const data = document.getElementById("dataPreCadastro").value;
    const hora = document.getElementById("horaPreCadastro").value;
    const sexo = document.getElementById(''); //ver como posso resgatar o valor desse
    const peso = document.getElementById("pesoPCadastro").value;
    const altura = document.getElementById("alturaPCadastro").value;
    const mensagem = document.getElementById("mensagemPCadastro").value;
    if(nome==""){
        alert('O campo nome é obrigatório!');
    }
    if(email==""){
        alert('O campo email é obrigatório!');
    }
    if(data==""){
        alert("O campo data é obrigatório!");
    }
    if(hora==""){
        alert("O campo hora é obrigatório!");
    }
    if(sexo==""){
        alert("Deve-se preencher o campo referente ao sexo!");
    }
    if(peso==""){
        alert("O campo peso é obrigatório!");
    }
    if(altura==""){
        alert("O campo altura é obrigatório!");
    }
}