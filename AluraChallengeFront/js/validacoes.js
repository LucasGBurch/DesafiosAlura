export function valida(input) {

  const tipoDeInput = input.dataset.tipo;

  if (input.validity.valid) { // se o valid for true ele tira o campo inválido
    input.parentElement.classList.remove('input-container--invalido');
    input.parentElement.querySelector('.input-mensagem-erro').innerHTML = '';
  } else {
    input.parentElement.classList.add('input-container--invalido');
    input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input);
  }

};

const tiposDeErro = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch'
]

const mensagensDeErro = {
  nome: {
    valueMissing: 'O campo nome não pode estar vazio.'
  },
  email: {
    valueMissing: 'O campo de email não pode estar vazio.',
    typeMismatch: 'O email digitado não é válido.'
  },
  senha: {
    valueMissing: 'O campo de senha não pode estar vazio.',
    patternMismatch: 'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula e minúscula, um número e não deve conter símbolos'
  },
  telefone: {
    valueMissing: 'O campo de telefone não pode estar vazio.',
    patternMismatch: 'Formatos aceitos para telefone: (16) 91231-6165 - (16) 3231-6165 - 16 91231-6165 - 16 3231-6165'
  },
}


function mostraMensagemDeErro(tipoDeInput, input) {
  let mensagem = '';
  tiposDeErro.forEach(erro => {
    if(input.validity[erro]) {
      mensagem = mensagensDeErro[tipoDeInput][erro]
    };
  });

  return mensagem;
}

