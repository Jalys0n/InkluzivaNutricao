const validacaoPreCadastro = function validaPreCadastro(){
    const nome = document.getElementById("nomePaciente").value;
    const email = document.getElementById("emailPaciente").value;
    const data = document.getElementById("dataPreCadastro").value;
    const hora = document.getElementById("horaPreCadastro").value;
    const sexo = document.getElementById(''); //ver como posso resgatar o valor desse
    const peso = document.getElementById("pesoPCadastro").value;
    const altura = document.getElementById("alturaPCadastro").value;
    if(nome==""|| email==""||data==""||hora==""||sexo==""||peso==""||altura==""){
        alert("Preencha todos os campos!");
        return false;
    } else{
        return true;
    }
}

module.exports = validacaoPreCadastro;