# DesafiosAlura
Pasta para guardar desafios de AluraChallenges e de 7DaysOfCode produzidos para portfolio.
 
 
[OBSERVAÇÃO: Sempre que cito referências nos desafios da Alura, geralmente é algo que busquei externamente para complementar e adaptar aos problemas que quero resolver. Vai que seja útil para quem enfrentou dificuldades semelhantes às minhas]
 
Em breve Lista de Documentação melhor detalhada, editada e estilizada.


[Lembretes]

1) Depois de ter os arquivos de base para utilizar JSON server, utilizar o projeto estudado no curso de JSAssíncrono como base para construção do Template e dos comandos de manipulação por id;

2) Estudar criação/organização de documentação e buscar conteúdo sobre estilização do GitHub;

3) Quando API estiver completa e funcionando, colocar os comandos npm e o passo a passo para qualquer um que testar no próprio VS_Code obter os node_modules necessários.
 
 
[notas provisórias] ALURA CHALLENGE FRONT-END, 4ª EDIÇÃO:

 
1) Referências utilizadas para montar a versão final das validações, autenticações e token para as páginas com formulário (Login, Cadastro, Mensagem e Perfil):

1.1. Modelo para funções de validação que precisaram de Expressões Regulares (RegEx) - https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/

1.2. RegEx para Telefone (o curso de validação em JS da Alura tem as referências para RegEx de senhas) - https://medium.com/@igorrozani/criando-uma-express%C3%A3o-regular-para-telefone-fef7a8f98828

1.3. Cadastro - https://www.youtube.com/watch?v=VUd2SA9oB2I

1.4. Validação e localStorage - https://www.youtube.com/watch?v=THQujIyE7Tg

1.5. Autenticação de Login e token - https://www.youtube.com/watch?v=jze3TasX5DA

 
2) O estágio atual de construção de API está apenas em fase de início: pensar quais valores devo separar para cada "objeto animal" na página Home, de listagem para adoção. Referências usadas para estudo:

2.1. Montagem básica de arquivos para usar JSON Server - https://www.youtube.com/watch?v=UPiGLzKUJw8

- Abrindo terminal integrado na pasta AluraChallengeFront:

Criação do package.json com "npm init -y";

Criação do package-lock.json com "npm i json-server --save" [ATENÇÃO! EM VIRTUDE DO TAMANHO DA PASTA node_modules, QUEM BAIXAR PARA TESTAR PRECISARÁ RODAR ESSE COMANDO QUE INSTALA A BIBLIOTECA DO JSON SERVER, PORQUE ELE NÃO ESTARÁ NOS ARQUIVOS DO GITHUB];

(Só colocarei aqui no README os comandos para rodar com a API quando tiver completado o template, por hora, só dá pra abrir a página Home do site com dados estáticos da página HTML)

Execução do JSON server com o arquivo que guarda os objetos, como se fosse um banco de dados, com "npx dev"; "dev" é o script que salvamos em package.json e a porta de execução 3000;

2.2. (...)
