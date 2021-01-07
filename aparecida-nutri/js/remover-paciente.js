var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");
    
    // Vai esperar 0.5s para executar a próxima função
    setTimeout(function(){
        event.target.parentNode.remove();
    },500);
});