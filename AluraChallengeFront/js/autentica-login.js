let botaoEntrar = document.querySelector('#entrar');
let btn = document.querySelector('.fa-eye');

btn.addEventListener('click', () => {
  let inputSenha = document.querySelector('#senha');

  if (inputSenha.getAttribute('type') == 'password') {
    inputSenha.setAttribute('type', 'text');
  } else {
    inputSenha.setAttribute('type', 'password');
  };
});


// Executando a função com o botão de Entrar:
function entrar() {
  let email = document.querySelector('#email');
  let emailLabel = document.querySelector('#email-label');

  let senha = document.querySelector('#senha');
  let senhaLabel = document.querySelector('#senha-label');

  let msgErro = document.querySelector('#msg-erro');
  let msgSucesso = document.querySelector('#msg-sucesso');

  let listaUser = [];

  let userValid = {
    nome: '',
    email: '',
    senha: '',
  };

  listaUser = JSON.parse(localStorage.getItem('listaUser'));

  listaUser.forEach((item) => {
    // camel-case Cad é láá do Objeto de array, da função cadastrar()
    if (email.value == item.emailCad && senha.value == item.senhaCad) {

      userValid = {
        nome: item.nomeCad,
        email: item.emailCad,
        senha: item.senhaCad,
      };
    };
  });

  // Conferindo se os valores digitados são iguais aos do Objeto criado acima:
  if (email.value == userValid.email && senha.value == userValid.senha) {

    msgErro.setAttribute('style', 'display: none');
    msgErro.innerHTML = '';
    emailLabel.setAttribute('style', 'color: green');
    senhaLabel.setAttribute('style', 'color: green');
    msgSucesso.setAttribute('style', 'display: block');
    msgSucesso.innerHTML = 'Preparando os amiguinhos!';

    setTimeout(() => {
      window.location.href = '../Home/index.html';
    }, 2500) // 2,5s para mudar para Home

// Para manter logado e GARANTIR essa autenticação, é gerado um token com 2x 16 caracteres hexadecimais. O substring remove os dois primeiros, que são 0. por causa da natureza da Math.random(). O + concatena essas strings:
    let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);

// Agora o token é guardado no localStorage e sempre muda a cada login:
    localStorage.setItem('token', token);

  } else {
    emailLabel.setAttribute('style', 'color: red');
    senhaLabel.setAttribute('style', 'color: red');
    msgErro.setAttribute('style', 'display: block');
    msgErro.innerHTML = 'Email ou senha incorretos';
    email.focus();
  };
};

botaoEntrar.addEventListener('click', (evento) => {
  evento.preventDefault();
  entrar();
});