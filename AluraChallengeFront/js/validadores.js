// Função para validar a senha:
function validarSenha(senha) {
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$/;
  return regex.test(senha);
}

// Função para validar o email:
function validarEmail(email) {
  var regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};

// Função para validar os telefones:
function validarTelefone(numero) {
  var regex = /(\(?\d{2}\)?\s)(\d{4,5}\-\d{4})/;
  return regex.test(numero);
};
/*
Formatos aceitos para telefone: (16) 91231-6165 - (16) 3231-6165 - 16 91231-6165 - 16 3231-6165
*/

export const validacoesCadastro = {
  validarEmail,
  validarSenha,
}

export const validacoesMensagem = {
  validarTelefone,
}
