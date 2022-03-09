console.log(pacientes);
const tabela = document.querySelector("table");
tabela.addEventListener("dblclick", function (event) {
    // const alvoEvento = event.target;
    // const paiDoAlvo = alvoEvento.parentNode;
    event.target.parentNode.classList.add("fadeOut"); //tr = paciente = remover

    setTimeout(function () {
        event.target.parentNode.remove();
    }, 500);
})
