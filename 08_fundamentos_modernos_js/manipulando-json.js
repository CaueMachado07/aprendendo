
// importando o json estudante dentro de uma variavel
const estudante = require('./estudante.json');

// mostrando o conteudo da variavel e o tipo
console.log('Exibindo o objeto importado e seu tipo');
console.log(estudante, typeof estudante, '\n');

// observe que ao importar o json o javaScript já realizou a conversão para um objeto
// portando já é possivel usar metodos de objetos. vejamos um exemplo
console.log(`Exibindo nome e email do estudante: `);
console.log(`Nome: ${estudante.nome} \nEmail: ${estudante.email} \n`);

// convertendo o objeto para string
const stringEstudante = JSON.stringify(estudante);

// mostrando o conteúdo da variavel de conversão
console.log('Exibindo o objeto convertido em string e seu tipo');
console.log(stringEstudante, typeof stringEstudante, '\n');

// convertendo o json string para um objeto
const objetoEstudante = JSON.parse(stringEstudante);

// mostrando o conteúdo da variavel de conversão
console.log('Exibindo a string convertida em objeto e seu tipo');
console.log(objetoEstudante, typeof objetoEstudante, '\n');

objetoEstudante.nome = 'Cauê';
console.log(objetoEstudante, typeof objetoEstudante, '\n');
