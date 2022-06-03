var botaoAdcionar = document.querySelector("#buscar-pacientes");

botaoAdcionar.addEventListener("click", function(){
    console.log("Buscando pacientes")

    var api = new XMLHttpRequest();

    api.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //fazendo ajax

    api.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if(api.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = api.responseText;       
            var pacientes = JSON.parse(resposta);
        
            pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log(api.status);
            console.log(api.responseText);
            
            erroAjax.classList.remove("invisivel")
        }

    });

    api.send();
});
