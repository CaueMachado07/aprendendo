// iniciando em arrays

// importando a função print do arquivo 01_fucoes.js
// Ao acessar arquivos em pastas diferentes, usamos ../ para subir um nível na hierarquia de pastas.
const { print } = require('../05_funcoes/01_fucoes');

// // O que são arrays?
// // Arrays são estruturas de dados que armazenam uma coleção de elementos em uma única variável.
// // Eles permitem agrupar múltiplos valores, facilitando o gerenciamento e a manipulação desses dados.

// // Criando um array
// const frutas = ['uva', 'banana', 'kiwi', 'laranja', 'manga'];

// // Acessando elementos do array
// print(`Frutas: ${frutas}`);

// // trabalhhndo com indices em arrays
// // Os arrays em JavaScript são indexados a partir do zero, ou seja, o primeiro elemento está no índice 0, o segundo no índice 1, e assim por diante.

// // para acessar um elemento específico, usamos o índice correspondente entre colchetes [].
// print(`Primeira fruta: ${frutas[0]}`); // uva

// // para acessar o ultimo elemento, podemos usar o comprimento do array menos um.
// // sintaxe: array.length - 1 ou digitar o indice diretamente.
// print(`Última fruta: ${frutas[frutas.length - 1]}`); // manga
// print(`Última fruta (índice direto): ${frutas[4]}`); // manga

// // verificar quantidade de elementos em um array
// print(`Quantidade de frutas: ${frutas.length}`); // 5

// // ficar atento ao tentar acessar um índice que não existe no array, pois isso retornará undefined.
// print(`Fruta inexistente: ${frutas[10]}`); // undefined


// // ficar atento como o idice funciona em arrays, pois isso é uma fonte comum de erros em programação.
// // lembre-se sempre que o primeiro elemento está no índice 0.

// // ------------------------------------------------------------------------------------------

// // push() - adicionando elementos em arrays
// // Podemos adicionar elementos a um array usando o método push(), que adiciona um ou mais elementos ao final do array.

// // sintaxe: array.push(elemento1, elemento2, ...);
// frutas.push('abacaxi');
// print(`Frutas após adicionar abacaxi: ${frutas}`); // ['uva', 'banana', 'kiwi', 'laranja', 'manga', 'abacaxi']
// print(`Quantidade de frutas após adição: ${frutas.length}`); // 6

// // Podemos adicionar múltiplos elementos de uma vez.
// frutas.push('morango', 'pera');
// print(`Frutas após adicionar morango e pera: ${frutas}`);
// print(`Quantidade de frutas após adições: ${frutas.length}`); // 8

// // outras formas de usar o push()
// const numeros = []; // criando um array vazio
// numeros.push(1);
// numeros.push(2, 3, 4);
// print(`Números após adições: ${numeros}`); // [1, 2, 3, 4]

// // lembre-se que o push() modifica o array original e adicniona os elementos ao final.

// // ------------------------------------------------------------------------------------------

// // pop() - removendo elementos em arrays
// // Podemos remover elementos de um array usando o método pop(), que remove o último elemento do array e o retorna.
// // sintaxe: array.pop();
// const frutas = ['uva', 'banana', 'kiwi', 'laranja', 'manga'];
// print(`Frutas antes de remover: ${frutas}`); // ['uva', 'banana', 'kiwi', 'laranja', 'manga']

// const frutaRemovida = frutas.pop();
// print(`Fruta removida: ${frutaRemovida}`);
// print(`Frutas após remover: ${frutas}`); // ['uva', 'banana', 'kiwi', 'laranja']

// // lembre-se que o pop() modifica o array original removendo o último elemento.

// ------------------------------------------------------------------------------------------

// // splice() - adicionando e removendo elementos em arrays
// // Podemos adicionar ou remover elementos de um array em posições específicas usando o método splice().
// // sintaxe: array.splice(índice, númeroDeElementosARemover, elemento1, elemento2, ...);
// const frutas = ['uva', 'banana', 'kiwi', 'laranja', 'manga'];
// print(`Frutas antes do splice: ${frutas}`); // ['uva', 'banana', 'kiwi', 'laranja', 'manga']

// // removendo elementto do indice 2 (kiwi)
// const frutaRemovida = frutas.splice(2, 1);
// print(`Fruta removida: ${frutaRemovida}`);
// print(`Frutas após remover: ${frutas}`); // ['uva', 'banana', 'laranja', 'manga']

// // removendo 2 elementos a partir do índice 1 (banana, laranja)
// const frutasRemovidas = frutas.splice(1, 2);
// print(`Frutas removidas: ${frutasRemovidas}`);
// print(`Frutas após remover 2 elementos: ${frutas}`); // ['uva', 'manga']

// // adicionando elementos no índice 1
// frutas.splice(1, 0, 'abacaxi', 'morango');
// print(`Frutas após adicionar abacaxi e morango a partir do índice 1: ${frutas}`); // ['uva', 'abacaxi', 'morango', 'banana', 'kiwi', 'laranja', 'manga']

// ------------------------------------------------------------------------------------------

// // slice() - copiando elementos de arrays
// // Podemos copiar uma parte de um array usando o método slice(), que retorna um novo array contendo os elementos selecionados.
// // sintaxe: array.slice(índiceInicial, índiceFinal);
// // índiceFinal é opcional e não é incluído no novo array.
// // Se não for fornecido, o slice() copia até o final do array.
// // O array original não é modificado.
// const frutas = ['uva', 'banana', 'kiwi', 'laranja', 'manga'];
// print(`Frutas originais: ${frutas}`); // ['uva', 'banana', 'kiwi', 'laranja', 'manga']

// // copiando elementos do índice 1 ao 3 (excluindo o índice 3)
// const frutasCortadas = frutas.slice(1, 3);
// print(`Frutas cortadas (índices 1 a 3): ${frutasCortadas}`); // ['banana', 'kiwi']
// // lembrando que o indice 3 (laranja) não é incluído

// // copiando elementos do índice 2 até o final
// const frutasCortadas2 = frutas.slice(2);
// print(`Frutas cortadas (índice 2 até o final): ${frutasCortadas2}`); // ['kiwi', 'laranja', 'manga']

// // O slice() é útil para criar subarrays sem modificar o array original.

// ------------------------------------------------------------------------------------------

// iterando sobre arrays
// Podemos usar loops for para iterar sobre os elementos de um array e executar ações para cada elemento.
// sintaxe: for (let i = 0; i < array.length; i++) { ... }

const frutas = ['uva', 'banana', 'kiwi', 'laranja', 'manga'];
print(`Iterando sobre as frutas do array:`);

// com for loop
for (let i = 0; i < frutas.length; i++) {
    print(`Índice ${i}: ${frutas[i]}`);
}

// usando foreach
// sintaxe: array.forEach((elemento, índice) => { ... });
print(`\nIterando sobre as frutas usando forEach:`);
frutas.forEach((fruta, indice) => {
    print(`Índice ${indice}: ${fruta}`);
});
// importante lembrar que o forEach é uma função especial para arrays e não pode ser usado em outros tipos de dados.
// Ele sempre itera sobre todos os elementos do array.

// usando for...of
// sintaxe: for (const elemento of array) { ... }
print(`\nIterando sobre as frutas usando for...of:`);
for(const i of frutas){
    print(i)
}
// o for...of é uma forma mais simples de iterar sobre arrays, mas não fornece o índice diretamente como o for tradicional ou o forEach.
// Se precisar do índice, use o for tradicional ou o forEach.
// iterar sobre arrays é uma habilidade fundamental em programação, permitindo processar e manipular coleções de dados de forma eficiente.
// ------------------------------------------------------------------------------------------

// vale ressaltar que o array é uma estrutura de dados muito poderosa e versátil em JavaScript, oferecendo diversos métodos e funcionalidades para facilitar o trabalho com coleções de dados.
// podendo armazenar diferentes tipos de dados, incluindo números, strings, objetos e até outros arrays simultaneamente.
// mas deve-se ter cuidado ao manipular arrays com multiplos tipos de dados, pois isso pode levar a comportamentos inesperados ao iterar ou processar os elementos.
// É importante entender bem os métodos disponíveis para arrays, como push(), pop(), splice(), slice(), forEach(), map(), filter(), reduce(), entre outros, para aproveitar ao máximo essa estrutura de dados em seus programas.