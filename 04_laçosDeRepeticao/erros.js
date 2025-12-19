// Erros comuns em laços de repetição
// ocasionalmente, ao trabalhar com laços de repetição, podemos cometer erros que levam a loops infinitos ou comportamentos inesperados. Aqui estão alguns erros comuns e como evitá-los:

// 1. Condição incorreta
// let i = 0;
// while (i < 5) { // Certifique-se de que a condição permita que o laço termine
//     console.log(i);
//     // i++; // Esquecer de atualizar a variável de controle pode causar um loop infinito
// }
// 2. Atualização da variável de controle
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     // i--; // Atualizar a variável de controle na direção errada pode causar um loop infinito
//     i++; // Certifique-se de que a variável de controle é atualizada corretamente
// }
// 3. Modificação da variável de controle dentro do laço
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     if (i === 2) {
//         i += 2; // Modificar a variável de controle de forma inesperada pode levar a resultados inesperados  
//     } else {
//         i++;
//     }
// }
// 4. Uso incorreto de break ou continue
// let i = 0;
// while (i < 5) {
//     if (i === 3) {
//         // continue; // Usar continue sem atualizar a variável de controle pode causar um loop infinito  
//     }
//     console.log(i);
//     i++;
// }
// 5. Falta de inicialização da variável de controle
// let i; // Certifique-se de inicializar a variável de controle
// while (i < 5) {  
//     console.log(i);
//     i++;
// }    
// Para evitar esses erros, sempre revise cuidadosamente a lógica do seu laço de repetição, verifique as condições e certifique-se de que a variável de controle está sendo atualizada corretamente dentro do laço. 

// -------------------------------------------------------------------------------------

// Erros com for
// for (let i = 0; i < 5; ) { // Esquecer de incluir o incremento pode causar um loop infinito
//     console.log(i);
//     // i++; // Certifique-se de que o incremento está presente
// }

// for (let i = 0; i < 5; i--) { // Incremento incorreto pode causar um loop infinito
//     console.log(i);
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if (i === 2) {
//         i += 2; // Modificar a variável de controle de forma inesperada pode levar a resultados inesperados  
//     }
// }

// for (let i = 0; i < 5; i++) {
//     if (i === 3) {
//         // continue; // Usar continue sem atualizar a variável de controle pode causar um loop infinito  
//     }
//     console.log(i);
// }    

// for (let i; i < 5; i++) { // Certifique-se de inicializar a variável de controle
//     console.log(i);
// }

// Atenção ao lidar com index fora dos limites ao acessar arrays ou strings dentro de laços for
// const arr = [10, 20, 30];
// for (let i = 0; i <= arr.length; i++) { // Usar <= em vez de < pode causar acesso fora dos limites
//     console.log(arr[i]); // Isso pode resultar em undefined na última iteração
// }

// Para evitar esses erros, sempre revise cuidadosamente a lógica do seu laço de repetição, verifique as condições e certifique-se de que a variável de controle está sendo atualizada corretamente dentro do laço.

// alternativamente, use laços for...of ou for...in para iterar sobre arrays e objetos, o que reduz o risco de erros relacionados ao índice.
// como funciona o for...of
// sintaxe básica
// for (const elemento of iterable) {
//     // código a ser executado para cada elemento
// }

// Exemplo: Iterar sobre um array usando for...of
// const arr = [10, 20, 30];
// for (const value of arr) {
//     console.log(value); // Acessa diretamente os valores do array
// }

// Exemplo: Iterar sobre uma string usando for...of
// const str = 'Olá';
// for (const char of str) {
//     console.log(char); // Acessa diretamente cada caractere da string
// }

// como funciona o for...in
// sintaxe básica
// for (const chave in objeto) {
//     // código a ser executado para cada chave
// }

// Exemplo: Iterar sobre as propriedades de um objeto usando for...in
// const obj = {a: 1, b: 2, c: 3};
// for (const key in obj) {
//     console.log(`${key}: ${obj[key]}`); // Acessa as chaves e valores do objeto
// }

//-------------------------------------------------------------------------------------

// Erros com do...while
// let i = 0;
// do {
//     console.log(i);
//     // i--; // Atualizar a variável de controle na direção errada pode causar um loop infinito
// } while (i < 5);


// let i = 0;
// do {
//     console.log(i);
//     if (i === 2) {
//         i += 2; // Modificar a variável de controle de forma inesperada pode levar a resultados inesperados  
//     } else {
//         i++;
//     }
// } while (i < 5);

// let i = 0;
// do {
//     if (i === 3) {
//         // continue; // Usar continue sem atualizar a variável de controle pode causar um loop infinito  
//     }
//     console.log(i);
//     i++;
// } while (i < 5);

// let i; // Certifique-se de inicializar a variável de controle
// do {
//     console.log(i);
//     i++;
// } while (i < 5);

// Para evitar esses erros, sempre revise cuidadosamente a lógica do seu laço de repetição, verifique as condições e certifique-se de que a variável de controle está sendo atualizada corretamente dentro do laço.
// -------------------------------------------------------------------------------------