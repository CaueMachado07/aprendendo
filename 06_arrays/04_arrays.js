
// arrays são listas ordenadas de valores

// represetados por colchetes [] e separados por vírgulas ,

// podem armazenar qualquer tipo de dado, incluindo números, strings, objetos, outros arrays, etc.

// seus elementos são acessados por índices, que começam em 0

// ---- exemplo de metodos comuns de arrays ----

// metodos que modificam o array original:
// push(): adiciona um ou mais elementos ao final do array
// pop(): remove o último elemento do array
// shift(): remove o primeiro elemento do array
// unshift(): adiciona um ou mais elementos no início do array

// vamos criar um array de notas e calcular a média
const notas = [7, 8, 9];

// adicionando mais uma nota ao array
notas.push(6); // notas agora é [7, 8, 9, 6]

// calculando a média
let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(`Média: ${media}`); // Média: 7.5

// remove o primeiro elemento (7), notas agora é [8, 9, 6]
notas.shift(); 
console.log(notas); // [8, 9, 6]

// remove o último elemento (6), notas agora é [8, 9]
notas.pop(); 
console.log(notas); // [8, 9]

// adiciona dois elementos no início do array
notas.unshift(10);
notas.unshift(5); 
console.log(notas); // [5, 10, 8, 9]