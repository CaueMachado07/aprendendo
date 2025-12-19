// laço de repetição while
// Sintaxe básica
// while (condição) {
//     // código a ser executado enquanto a condição for verdadeira
// }
// O laço while verifica a condição antes de cada iteração.
// por isso, se a condição for falsa desde o início, o bloco de código dentro do while não será executado nenhuma vez.
// É necessário inicializar a variável de controle antes do laço e atualizá-la dentro do laço para evitar loops infinitos.  
// 


// Exemplo: Imprimir números de 1 a 5
// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }


// Exemplo: Imprimir números pares de 0 a 10
// let i = 0;
// while (i <= 10) {
//     console.log(i);
//     i += 2;
// }


// imprimindo números ímpares e pares
// let i = 0;
// while (i <= 10){
//     if (i % 2 == 0){
//         console.log(`${i} é par`);
//     }else{
//         console.log(`${i} é impar`);
//     }
//     i++;
// };

// imprimindo cada letra de uma palavra
// const word = 'Cauê';
// let index = 0;
// while(index < word.length){
//     console.log(`${index + 1}ª letra: ${word[index]}`);
//     index++;
// }

// outra forma de fazer
// const word = 'Cauê';
// let index = 0;
// while(index < word.length){
//     index++;
//     console.log(`${index}ª letra: ${word[index - 1]}`);
// }    

// do...while
// Sintaxe básica
// do {
//     // código a ser executado
// } while (condição);
// O laço do...while executa o bloco de código uma vez antes de verificar a condição.
// Depois, ele continua executando o bloco enquanto a condição for verdadeira.

// A diferença principal é que o bloco de código dentro do do...while é executado pelo menos uma vez, mesmo que a condição seja falsa desde o início.