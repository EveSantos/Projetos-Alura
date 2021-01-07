var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando...");

    // XMLHttpRequest Objeto do js responsavel por fazer requisições do Http
    var xhr = new XMLHttpRequest();

    // Função. Tipo de requisição e pra onde é a requisição
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    // Evento no xhr para quando a requisição e a resposta for carregada
    xhr.addEventListener("load", function(){

        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){

            erroAjax.classList.add("invisivel");

            var resposta = xhr.responseText;
            // Devolve o texto json como um obejo js
            var pacientes = JSON.parse(resposta);
    
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        }
        else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");

        }

    });

    xhr.send();
});