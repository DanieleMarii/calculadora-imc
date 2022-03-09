const campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    // console.log(this.value);
    const pacientes = document.querySelectorAll(".paciente");
    if (this.value.length > 0) {
        // console.log("Tem algo digitado");
         for (let i = 0; i < pacientes.length; i++) {
           const paciente = pacientes[i];
           const tdNome = paciente.querySelector(".info-nome");
           const nome = tdNome.textContent;
           // console.log(nome);
             const expressao = new RegExp(this.value,"i");
           if (!expressao.test(nome)) {
             paciente.classList.add("invisivel");
           } else {
             paciente.classList.remove("invisivel");
           }
         }
    } else{
        for (let i = 0; i < pacientes.length; i++){
            const paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
   
})
