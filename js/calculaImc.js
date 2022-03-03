const titulo = (document.querySelector(".titulo"));
titulo.textContent = ("Aparecida nutricionista");

// função anonima
titulo.addEventListener("click", function () {
  console.log("Eu fui clicado");
});
// function mostraMensagem(){
//   console.log("Eu fui clicado");
// }

const pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length ; i++){
    // console.log(paciente[i]);
    let paciente = pacientes[i];

    const tdPeso = paciente.querySelector(".info-peso");
    const peso = tdPeso.textContent;

    const tdAltura = paciente.querySelector(".info-altura");
    const altura = tdAltura.textContent;
    const tdImc = paciente.querySelector(".info-imc");

    let pesoValido = true;
    let alturaValida = true;

    if (peso <= 0 || peso >= 1000) {
        pesoValido = false;
        tdImc.textContent = "Peso é inválido!";
        paciente.classList.add("paciente-invalido");
        // paciente.style.backgroundColor = "#ffc2cb";  a propriedade style modifica o estilo do elemento selecionado
    }

    if (altura <= 0 || altura >= 3.0) {
      alturaValida = false;
        tdImc.textContent = "Altura é inválida!";
        paciente.classList.add("paciente-invalido");
        
    }

  if (alturaValida && pesoValido) {
    var imc = calculaImc(peso, altura);
      tdImc.textContent = imc; // to fixed abrevia o numero para x casas depois da virgula, no caso 2

        
    }

}

function calculaImc(peso,altura) {
  let imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
  
}

// console.log(paciente);
// console.log(tdPeso);
// console.log(peso);
// console.log(altura);
// console.log(imc);