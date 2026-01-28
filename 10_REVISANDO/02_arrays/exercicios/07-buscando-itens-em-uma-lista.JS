// 18 Buscando itens em uma lista

// Você está desenvolvendo um sistema de busca para uma biblioteca digital. Quando a pessoa usuária digita o nome de um livro, o sistema precisa verificar se ele está disponível na lista de títulos cadastrados. Escreva um programa que:

// Crie um array com nomes de livros.
// Crie uma variável com o nome de um livro procurado.
// Verifique se o livro está na lista.
// Exiba uma mensagem informando se o livro foi encontrado ou não.

// Exemplo de entrada:
// const livros = ['Dom Casmurro', 'O Cortiço', 'Capitães da Areia', 'Iracema'];
// const livroProcurado = 'O Cortiço';

// Saída esperada:
// O livro "O Cortiço" está disponível.

// Ou:

// O livro " O Cortiço" não foi encontrado.

// função para procurar livro na lista
function encontrarLivro(lista, livro){
   return lista.includes(livro) ? `O livro "${livro}" está disponível.` : `O livro "${livro}" não foi encontrado.`
}

const livros = ['Dom Casmurro', 'O Cortiço', 'Capitães da Areia', 'Iracema'];
const livroProcurado = 'O Cortiço';

console.log(encontrarLivro(livros, livroProcurado));


// // outra forma de verificar se está na lista
// if (livros.indexOf(livroProcurado) !== -1) { // realiza a verificação procurando um indice correspondente ao livro referenciado
//   console.log(`O livro "${livroProcurado}" está disponível.`);
// } else {
//   console.log(`O livro "${livroProcurado}" não foi encontrado.`);
// }