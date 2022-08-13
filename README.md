# DesafiosAlura
Pasta para guardar desafios **com HTML/CSS/JS** de AluraChallenges e de 7DaysOfCode produzidos para portfolio.
 
 
[OBSERVAÇÃO: Sempre que cito referências nos desafios da Alura, geralmente é algo que busquei externamente para complementar e adaptar aos problemas que quero resolver. Vai que seja útil para quem enfrentou dificuldades semelhantes às minhas]
 
Em breve Lista de Documentação melhor detalhada, editada e estilizada.


[Lembretes]

1) Estudar criação/organização de documentação e buscar conteúdo sobre estilização do GitHub, para documentar o mais didaticamente e visualmente possível o passo a passo;
 
 
[DOCUMENTAÇÃO PROVISÓRIA]

ALURA CHALLENGE FRONT-END, 4ª EDIÇÃO:

 
1) Referências utilizadas para montar a versão final das validações, autenticações e token para as páginas com formulário (Login, Cadastro, Mensagem e Perfil):

1.1. Modelo para funções de validação que precisaram de Expressões Regulares (RegEx) - https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/

1.2. RegEx para Telefone (o curso de validação em JS da Alura tem as referências para RegEx de senhas) - https://medium.com/@igorrozani/criando-uma-express%C3%A3o-regular-para-telefone-fef7a8f98828

1.3. Cadastro - https://www.youtube.com/watch?v=VUd2SA9oB2I

1.4. Validação e localStorage - https://www.youtube.com/watch?v=THQujIyE7Tg

1.5. Autenticação de Login e token - https://www.youtube.com/watch?v=jze3TasX5DA

 
2) Referências usadas para estudo e início da construção da minha API:

2.1. Montagem básica de arquivos para usar JSON Server - https://www.youtube.com/watch?v=UPiGLzKUJw8

- Abrindo terminal integrado na pasta AluraChallengeFront:

Criação do package.json com "npm init -y";

Criação do package-lock.json com "npm i json-server --save"

[ALERTA! EM VIRTUDE DO TAMANHO DA PASTA node_modules, QUEM BAIXAR PARA TESTAR PRECISARÁ RODAR ESTE COMANDO:

- "npm i json-server"

 ELE INSTALA A BIBLIOTECA DO JSON SERVER, PORQUE ELE NÃO ESTARÁ NOS ARQUIVOS DO GITHUB (por causa do .gitignore)];

Execução do JSON server com o arquivo que guarda os objetos, como se fosse um banco de dados, com "npx json-server --watch db.json"; "dev" é o script que salvamos em package.json e a porta de execução 3000;


2.2. INSTRUÇÕES PARA RODAR A LISTAGEM DINÂMICA DOS PETS COM A API:

- 2.2.1 - Abra a pasta do Challenge, e siga este caminho: paginas/Home/index.html

- 2.2.2 - Nesse index, você deverá localizar o comentário "Para quando for rodar/testar API" e seguir a instrução. Está escrito nela os seguintes passos:
  
  a) cobrir todas as divs dentro da div de classe "principal__container" com o comentário, de modo a retirar a listagem ESTÁTICA;

  b) clicar com botão direito na pasta AluraChallengeFront e abrir terminal integrado;

  c) instalar o json-server do modo descrito no item 2.1 do "ALERTA"; e

  d) por fim, rodar o comando "npx json-server --watch db.json", abrir o site com a extensão Live Server e conferir se os pets seguem aparecendo.

 - 2.2.3 - Para confirmar se ocorreu a listagem dinâmica, você pode descomentar os dados estáticos e observar se houve quebra na página, porque os cards de pets estarão duplicados por estar exibindo tanto a listagem estática, quanto a carregada pela API.
