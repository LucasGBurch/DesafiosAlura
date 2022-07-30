import { validacoesCadastro } from './validadores.js'

// Selecionando campos do formulário

let botaoCadastro = document.querySelector('#botao-cadastro');
let btn = document.querySelector('#verSenha');
let btnConfirm = document.querySelector('#verConfirmeSenha');

let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#label-nome');
let validNome = false;

let email = document.querySelector('#email');
let labelEmail = document.querySelector('#label-email');
let validEmail = false;

let senha = document.querySelector('#senha');
let erroSenha = document.querySelector('#erro-senha');
let validSenha = false;

let confirmSenha = document.querySelector('#confirm-senha');
let labelConfirmSenha = document.querySelector('#label-confirm-senha');
let validConfirmSenha = false;

let msgErro = document.querySelector('#msg-erro');
let msgSucesso = document.querySelector('#msg-sucesso');

// Eventos para validação:
// Nome:
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

// Email:
email.addEventListener('keyup', () => {
  if (!validacoesCadastro.validarEmail(email.value)) {
    labelEmail.setAttribute('style', 'color: red');
    labelEmail.innerHTML = 'Email *Modelo: nome@texto.com';
    validEmail = false;
  } else {
    labelEmail.setAttribute('style', 'color: green');
    labelEmail.innerHTML = 'Email';
    validEmail = true;
  };
});


// Senha:
senha.addEventListener('keyup', () => {
  if (!validacoesCadastro.validarSenha(senha.value)) {
    erroSenha.setAttribute('style', 'display: block');
    erroSenha.innerHTML = 'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula e minúscula, um número e não deve conter símbolos';
    validSenha = false;
  } else {
    erroSenha.setAttribute('style', 'display: none');
    erroSenha.innerHTML = '';
    validSenha = true;
  };
});

// Confirmando senha:
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


// Função para cadastrar os dados:
function cadastrar() { // ou add array existente, ou cria um novo/vazio
  if (validNome && validEmail && validSenha && validConfirmSenha) {
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

    listaUser.push(
      {
        nomeCad: nome.value,
        emailCad: email.value,
        senhaCad: senha.value,
      } // confirmSenha não precisa!!
    ) // pois a senha já foi registrada

    localStorage.setItem('listaUser', JSON.stringify(listaUser));

    msgSucesso.setAttribute('style', 'display: block');
    msgSucesso.innerHTML = '<p><strong>Cadastrando novo usuário...</strong></p>'
    msgErro.setAttribute('style', 'display: none');
    msgErro.innerHTML = '';


    setTimeout(() => {
      window.location.href = '../Login/index.html';
    }, 3000) // 3s, 3000ms para mudar para login


  } else {
    msgErro.setAttribute('style', 'display: block');
    msgErro.innerHTML = '<p><strong>Preencha os campos corretamente para cadastrar.</strong></p>';
    msgSucesso.setAttribute('style', 'display: none');
    msgSucesso.innerHTML = '';
  };
};

// Executando a função com o botão de Cadastrar:
botaoCadastro.addEventListener('click', (evento) => {
  evento.preventDefault();
  cadastrar();
});


// Eventos do botão de olhinho. (IDEIA PARA REFATORAR: descobrir como posicionar o olho sempre à direita do input, pois ele sempre sai do lugar com position absolute)
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



