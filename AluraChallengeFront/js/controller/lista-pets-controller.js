import { petService } from "../service/pet-service.js";

const criaNovoPet = (nome, idade, porte, temperamento, cidade, id) => {
  
  const cardPet = document.createElement('div');
  cardPet.classList.add('principal__imagem');

  const template = `
      <img src="../../assets/img/pets/pet${id}.png" alt="Foto do pet cachorro" class="principal__imagem--pet">
      <div class="principal__dados">
        <h3 class="principal__dados--nome">${nome}</h3>
        <span class="principal__dados--descricao">
          ${idade} <br />
          ${porte} <br />
          ${temperamento}
        </span>
        <span class="principal__dados--cidade">
          ${cidade}
        </span>
        <a href="../Mensagem/index.html" class="principal__dados--contato contato-container">
          <img src="../../assets/img/icomsg.png" alt="Ícone mensagem" class="contato-container__icomsg">
          <span class="contato-container__texto">Falar com responsável</span>
        </a>
      </div>
  `;

  cardPet.innerHTML += template;

  return cardPet;
};

const divPets = document.querySelector('[data-pets]');

const render = async () => {
  try {
    const listaPets = await petService.listaPets();
    listaPets.forEach(elemento => {
      divPets.appendChild(criaNovoPet(
        elemento.nome,
        elemento.idade,
        elemento.porte,
        elemento.temperamento,
        elemento.cidade,
        elemento.id));
    });
  } catch (erro) {
    console.log(erro);
  };
};

render(); // Precisa executar o render ao final do arquivo.
