const botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault(); // previne um comportamento padrão 

  const form = document.querySelector("#form-adiciona");

  // extraindo infromações do paciente do form
  const paciente = obtemPacienteDoFormulario(form);
  console.log(paciente);

  // cria a tr e a td do paciente
  const pacienteTr = montaTr(paciente);
  
  const erros = validaPaciente(paciente);
  console.log(erros);
  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    // var mensagemErro = document.querySelector("#mensagem-erro");
    // mensagemErro.textContent = erro;
    return;
  }

  // adicionando o paciente na tabela 
  const tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
  form.reset();
  const mensagemErro = document.querySelector("#mensagens-erro");
  mensagemErro.innerHTML = "";

  // console.log(pacienteTr);
  // console.log(form.altura.value);
  // console.log(form.peso.value);
});

function exibeMensagensDeErro(erros) {
  const ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
  erros.forEach(function (erro) {
    const li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function obtemPacienteDoFormulario(form) {

  const paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
    // const nome = form.nome.value;
    // const altura = form.altura.value;
    // const peso = form.peso.value;
    // const gordura = form.gordura.value;
}

function montaTr(paciente) {
  const pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  // coloca os valores na tabela
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr
}

function montaTd(dado,classe) {
  const td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente) {
  const erros = [];
  if (paciente.nome.length == 0) {
    erros.push("O nome não pode ser em branco")
  }
  if (!validaPeso(paciente.peso)) {
    erros.push("Peso é inválido");
  } if (!validaAltura(paciente.altura)) {
    erros.push("Altura é inválida");
  }
  if (paciente.gordura.length == 0) {
    erros.push("A gordura não pode ser em branco");
  }
  if (paciente.peso.length == 0) {
    erros.push("O peso não pode ser em branco");
  }
  if (paciente.altura.length == 0) {
    erros.push("A altura não pode ser em branco");
    
  }
  return erros;
}