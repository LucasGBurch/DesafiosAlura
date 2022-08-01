/* Nota de ajuste futuro no botão de Logout:

- Posicionar ele à direita do cabecalho;
- Utilizar Hover para abrir menu, talvez fazendo uso da imagem de usuário;
- Aproveitar para colocar caminho para Perfil nesse momento!!
- Atacar essa questão quando for fazer a parte do Perfil (logo, depois que validar as Mensagens);
- Por enquanto, o que importa é que está funcionando;
*/

// Em resumo para lembrar: ainda preciso arrumar essa nova bagunça no cabeçalho das páginas de Login, Mensagem e Perfil.


// ESTE IF PRECISA IR PRIMEIRO, pois somente as funções funcionam com "hoisting" (execução antes da declaração)
if (localStorage.getItem('token') == null) {
  alert('Você precisa estar logado para acessar essa parte do Adopet!')
  window.location.href = '../Login/index.html';
};

let botaoLogout = document.querySelector('#logout');
let userLogado = JSON.parse(localStorage.getItem('userLogado'));

let logado = document.querySelector('#logado');

logado.innerHTML = `Olá, ${userLogado.nome}!`;

botaoLogout.addEventListener('click', () => {
  sair();
});


function sair() {
  localStorage.removeItem('token');
  // Depois de remover o token, "limpa" o userLogado para não ocupar espaço desnecessário:
  localStorage.removeItem('userLogado');
  window.location.href = '../Login/index.html';
};

