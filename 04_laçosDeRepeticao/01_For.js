// laço de repetição for
// Sintaxe básica
// for (inicialização; condição; incremento) {
//     // código a ser executado em cada iteração
// }
// // Exemplo: Imprimir números de 1 a 5
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// formas de incremento/decremento
// i++  -> incrementa 1
// i--  -> decrementa 1
// i += 2 -> incrementa 2
// i -= 2 -> decrementa 2
// i = i + 2 -> incrementa 2
// i = i - 2 -> decrementa 2


// // Exemplo: Imprimir números de 1 a 5
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// // Exemplo: Imprimir números pares de 0 a 10
// for (let i = 0; i <= 10; i += 2) {
//     console.log(i);
// }

// // imprimindo números ímpares e pares
// for (let i = 0; i <= 10; i++){
//     if (i % 2 == 0){
//         console.log(`${i} é par`);
//     }else{
//         console.log(`${i} é impar`);
//     }
// };

// // imprimindo cada letra de uma palavra
// const word = 'Cauê';

// for(let i = 0; i < word.length; i++){
//     console.log(`${i + 1}ª letra: ${word[i]}`);
// }

//-------------------------------------------------------------------------------------

// Laço for com multiplas variáveis
// explicação:
// Você pode inicializar múltiplas variáveis, atualizar várias delas em cada iteração e usar qualquer uma delas na condição do laço.    
// 
// Sintaxe básica
// for (inicialização1, inicialização2; condição; incremento1, incremento2) {
//     // código a ser executado em cada iteração
// }
// for (let i = 0, j = 10; i <= 10; i++, j--) {
//     console.log(`i: ${i}, j: ${j}`);
// }

// omitindo partes do for
// Você pode omitir a inicialização, a condição ou o incremento no laço for. No entanto, é importante garantir que a condição eventualmente se torne falsa para evitar loops infinitos.

// omitindo a inicialização
// Sintaxe básica
// for (; condição; incremento) {
//     // código a ser executado em cada iteração
// }
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// omitindo a condição
// Sintaxe básica
// for (inicialização; ; incremento) {
//     // código a ser executado em cada iteração
// }
// let i = 0;
// for (; ; i++) {
//     if (i >= 5) {
//         break; // Use break para sair do laço quando a condição desejada for atingida
//     }
//     console.log(i);
// }    

// omitindo o incremento
// Sintaxe básica
// for (inicialização; condição; ) {
//     // código a ser executado em cada iteração
// }
// for (let i = 0; i < 5; ) {
//     console.log(i);
//     i++; // Atualize a variável de controle dentro do laço
// }
//-------------------------------------------------------------------------------------
// Laço for...of
// Sintaxe básica
// for (const elemento of iterable) {
//     // código a ser executado para cada elemento
// }
// O laço for...of é usado para iterar sobre elementos de objetos iteráveis, como arrays, strings, mapas, conjuntos, entre outros.

// Exemplo: Iterar sobre um array usando for...of
// const frutas = ['maçã', 'banana', 'laranja'];
// for (const fruta of frutas) {
//     console.log(fruta);
// }

// Exemplo: Iterar sobre uma string usando for...of
// const palavra = 'Olá';
// for (const letra of palavra) {
//     console.log(letra);
// }
// Exemplo: Iterar sobre um conjunto (Set) usando for...of
// const conjunto = new Set([1, 2, 3]);
// for (const numero of conjunto) {
//     console.log(numero);
// }

// Exemplo: Iterar sobre um mapa (Map) usando for...of
// const mapa = new Map([['a', 1], ['b', 2], ['c', 3]]);
// for (const [chave, valor] of mapa) {
//     console.log(`${chave}: ${valor}`);
// }
//-------------------------------------------------------------------------------------

// Laço for...in
// Sintaxe básica
// for (const chave in objeto) {
//     // código a ser executado para cada chave
// }
// O laço for...in é usado para iterar sobre as propriedades enumeráveis de um objeto.

// Exemplo: Iterar sobre as propriedades de um objeto usando for...in
// const pessoa = {nome: 'Ana', idade: 25, cidade: 'São Paulo'};
// for (const chave in pessoa) {
//     console.log(`${chave}: ${pessoa[chave]}`);
// }

// Exemplo: Iterar sobre um array usando for...in
// const arr = [10, 20, 30];
// for (const index in arr) {
//     console.log(`Índice ${index}: ${arr[index]}`);
// }

// Exemplo: Iterar sobre uma string usando for...in
// const str = 'Olá';
// for (const index in str) {
//     console.log(`Índice ${index}: ${str[index]}`);
// }

//-------------------------------------------------------------------------------------







