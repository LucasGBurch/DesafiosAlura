import { validacoesMensagem } from "./validadores.js";

let nome = document.querySelector('#nome');
let erroNome = document.querySelector('#erro-nome');
let validNome = false;

let telefone = document.querySelector('#telefone');
let erroTelefone = document.querySelector('#erro-telefone');
let validTelefone = false;

let mensagem = document.querySelector('#mensagem');
let erroMensagem = document.querySelector('#erro-mensagem');
let validMensagem = false;


// Validando nome:
nome.addEventListener('keyup', () => {
  if (nome.value.length <= 2) {
    erroNome.setAttribute('style', 'display: block');
    erroNome.innerHTML = 'Nome deve ter 3 caracteres ou mais'; 
    validNome = false;
  } else {
    erroNome.setAttribute('style', 'display: none');
    erroNome.innerHTML = '';
    validNome = true;
  };
});

// Validando Número de Telefone:
telefone.addEventListener('keyup', () => {
  if (!validacoesMensagem.validarTelefone(telefone.value)) {
    erroTelefone.setAttribute('style', 'display: block');
    erroTelefone.innerHTML = 'Formatos aceitos para telefone: "(16) 91231-6165" - "(16) 3231-6165" - "16 91231-6165" - "16 3231-6165". Certifique-se de colocar o código de área da sua região (dois primeiros dígitos)'; 
    validTelefone = false;
  } else {
    erroTelefone.setAttribute('style', 'display: none');
    erroTelefone.innerHTML = '';
    validTelefone = true;
  };
});

// Validando mensagem:
mensagem.addEventListener('keyup', () => {
  if (mensagem.value.length <= 29) {
    erroMensagem.setAttribute('style', 'display: block');
    erroMensagem.innerHTML = 'Envie uma mensagem clara com pelo menos 30 caracteres. Assim os cuidadores do animal saberão por que você pode/quer adotá-lo!'; 
    validMensagem = false;
  } else {
    erroMensagem.setAttribute('style', 'display: none');
    erroMensagem.innerHTML = '';
    validMensagem = true;
  };
});
