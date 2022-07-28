// Selecionando campos do formulário (uma ideia para refatorar depois, com tempo, seria aproveitar os spans de campo inválido que resolvi abandonar depois de não conseguir aplicar a confirmação de senha com os objetos do curso de validação da Alura)

let btn = document.querySelector('#verSenha');
let btnConfirm = document.querySelector('#verConfirmeSenha');

let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#label-nome');
let validNome = false;

// Faltou a do e-mail; precisaria de uma expressão regular ainda para fazer seu evento.
let email = document.querySelector('#email');
let labelEmail = document.querySelector('#label-email');
let validEmail = false;

let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#label-senha');
let validSenha = false;

let confirmSenha = document.querySelector('#confirm-senha');
let labelConfirmSenha = document.querySelector('#label-confirm-senha');
let validConfirmSenha = false;


// Eventos para validação:
// nome:
nome.addEventListener('keyup', () => {
  if (nome.value.length <= 2) {
    labelNome.setAttribute('style', 'color: red');
    labelNome.innerHTML = 'Nome *Deve ter 3 caracteres ou mais';
    validNome = false;
  } else {
    labelNome.setAttribute('style', 'color: green');
    labelNome.innerHTML = 'Nome';
    validNome = true;
  };
});

// email:
email.addEventListener('keyup', () => {
  if (!validarEmail(email.value)) {
    labelEmail.setAttribute('style', 'color: red');
    labelEmail.innerHTML = 'Email *Modelo: nome@texto.com';
    validEmail = false;
    console.log(validEmail)
  } else {
    labelEmail.setAttribute('style', 'color: green');
    labelEmail.innerHTML = 'Email';
    validEmail = true;
    console.log(validEmail)
  };
});


// senha:
senha.addEventListener('keyup', () => {
  if (senha.value.length <= 5) {
    labelSenha.setAttribute('style', 'color: red');
    labelSenha.innerHTML = 'Senha *Insira de 6 a 12 caracteres';
    validSenha = false;
  } else {
    labelSenha.setAttribute('style', 'color: green');
    labelSenha.innerHTML = 'Senha';
    validSenha = true;
  };
});

//confirme senha:
confirmSenha.addEventListener('keyup', () => {
  if (senha.value != confirmSenha.value) {
    labelConfirmSenha.setAttribute('style', 'color: red');
    labelConfirmSenha.innerHTML = 'Confirme sua senha *Igual à senha';
    validConfirmSenha = false;
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green');
    labelConfirmSenha.innerHTML = 'Confirme sua senha';
    validConfirmSenha = true;
  };
});

// Função para validar o email:
function validarEmail(email) {
  var regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};


// Função para cadastrar os dados:
function cadastrar() { // ou add array existente, ou cria um novo/vazio
  if (validNome && validSenha && validConfirmSenha) {
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
  }
}


// Eventos do botão de olhinho. (ideia para refatorar este seria descobrir como posicionar o olho sempre à direita do input, pois ele sempre sai do lugar com position absolute)
btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha');

  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text');
  } else {
    inputSenha.setAttribute('type', 'password');
  };
});

btnConfirm.addEventListener('click', () => {
  let inputConfirmSenha = document.querySelector('#confirm-senha');

  if (inputConfirmSenha.getAttribute('type') == 'password') {
    inputConfirmSenha.setAttribute('type', 'text');
  } else {
    inputConfirmSenha.setAttribute('type', 'password');
  };
});



