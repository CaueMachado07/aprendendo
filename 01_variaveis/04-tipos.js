let nome = 'Carlos';
let idade = 28;
let altura = 1.75;
let isEstudante = true;
let nota = null;
let endereco;
let simbolo = Symbol();

console.log(typeof nome);        // string
console.log(typeof idade);       // number
console.log(typeof altura);      // number
console.log(typeof isEstudante); // boolean
console.log(typeof nota);        // object (null é um tipo especial)
console.log(typeof endereco);    // undefined
console.log(typeof simbolo);     // symbol

// boa prática: usar nomes descritivos para variáveis
// Exemplo ruim:
let a = 'João';
let b = 25;
// Exemplo bom:
let nomeCompleto = 'João Silva';
let idadePessoa = 25;



// cuidado com numeros em string
let idadeString = '30';
console.log(typeof idadeString); // string

// funciona em algumas operações como multiplicação e subtração
let resultadoMultiplicacao = idadeString * 2;
console.log(resultadoMultiplicacao); // 60
console.log(typeof resultadoMultiplicacao); // number

// mas pode causar confusão em outras operações como adição, pois concatena strings ao invés de somar
// Evite misturar tipos diferentes em operações
let somaIncorreta = idadeString + 5;
console.log(somaIncorreta); // 305
console.log(typeof somaIncorreta); // string

// Forma correta
let somaCorreta = Number(idadeString) + 5;
console.log(somaCorreta); // 35
console.log(typeof somaCorreta); // number
// boa prática: sempre converter tipos quando necessário



// Conversão de tipos
let numeroString = '100';
let numeroConvertido = Number(numeroString);
console.log(numeroConvertido); // 100
console.log(typeof numeroConvertido); // number

let booleanString = 'true';
let booleanConvertido = (booleanString === 'true');
console.log(booleanConvertido); // true
console.log(typeof booleanConvertido); // boolean


// Cuidado com conversões implícitas
let resultado = '5' + 10;
console.log(resultado); // 510
console.log(typeof resultado); // string

let resultadoCorreto = Number('5') + 10;
console.log(resultadoCorreto); // 15
console.log(typeof resultadoCorreto); // number



// Tipos especiais: null e undefined
let valorNulo = null;
let valorIndefinido;
console.log(typeof valorNulo); // object
console.log(typeof valorIndefinido); // undefined

