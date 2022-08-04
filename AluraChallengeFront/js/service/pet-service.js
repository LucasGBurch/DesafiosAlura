// Independente do método, sempre lembrar de abrir terminal em admin e rodar o servidor com: npx json-server --watch db.json

const listaPets = async () => {
  const resposta = await fetch(`http://localhost:3000/pets`);
  if (resposta.ok) {
    return resposta.json();
  } else {
    throw new Error('Não foi possível listar os clientes');
  }
};


export const petService = {
  listaPets,
}
