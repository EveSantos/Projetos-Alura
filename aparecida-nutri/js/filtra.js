var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
    var pacientes = document.querySelectorAll(".paciente");
    
    if(this.value.length > 0){

        for (var i = 0; i < pacientes.length; i++) {
           
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            // Expressao regular, que é um objeto especial do js, voce pode passar 2 coisas:
            // o que voce quer que ela busque e como buscar
            var expressao = new RegExp(this.value, "i");
            // Testa em nome se tem letras iguais do que tem na expressao
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } 
            else {
                paciente.classList.remove("invisivel");
            }
        }
    }
    else{
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }

    }
});