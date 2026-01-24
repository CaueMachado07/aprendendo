
// Revisão sobre funções em JavaScript

// Existem três formas principais de definir funções em JavaScript:

// 1. Funções declaradas (Function Declarations)
// 2. Funções expressas (Function Expressions)
// 3. Funções arrow (Arrow Functions)

// Vamos revisar cada uma delas com exemplos:
// funções declaradas

// sintaxe basica?
// function nomeDaFuncao(parametros) {
//     // bloco de código
//     return valor;
// }

// são "hoisted", ou seja, podem ser chamadas antes de serem declaradas, veja:
console.log(calcularPotencia(3, 4)); // 7

function calcularPotencia( numero, potencia){
    return numero ** potencia;
}

// funções expressas
// não são "hoisted", ou seja, devem ser declaradas antes de serem chamadas
// veja:
// console.log(saudacao('Maria')); // Erro: saudacao is not defined

const saudacao = function(nome){
    return `Olá, ${nome}!`;
}
console.log(saudacao('Maria'));

// ou seja , a função deve ser declarada antes de ser chamada

// funções arrow
// também não são "hoisted"
// sintaxe basica:
// const nomeDaFuncao = (parametros) => {
//     // bloco de código
//     return valor;
// }

// se houver apenas um parâmetro, os parênteses podem ser omitidos
// veja: const saudacaoArrow = nome => {
//     return `Olá, ${nome}!`;
// }

// se o corpo da função for uma única expressão, as chaves e o "return" podem ser omitidos
// veja:
// const saudacaoArrow = (nome) => 'Olá, ' + nome + '!';
//

const saudacaoArrow = nome => `Olá, ${nome}!`;
console.log(saudacaoArrow('João'));

const saudacao3 = () => 'Olá, Mundo!';
console.log(saudacao3());

// embora geralmente anonimas, funções expressas e arrow podem ser nomeadas
// o que é útil em casos de recursão ou para facilitar a depuração
const fatorial = function fat(n){
    if(n <= 1) return 1;
    return n * fat(n - 1);
}
console.log(fatorial(5)); // 120

// resumindo:
// - funções declaradas são "hoisted" e podem ser chamadas antes da declaração
// - funções expressas e arrow não são "hoisted" e devem ser declaradas antes da chamada
// - todas as três formas podem ser nomeadas, mas funções expressas e arrow são geralmente anônimas
// - escolher entre elas depende do contexto e da preferência pessoal
// - funções declaradas são úteis para definições gerais
// - funções expressas são úteis para atribuição a variáveis ou passagem como argumentos
// - funções arrow são úteis para sintaxe concisa e quando não há necessidade de seu próprio contexto "this"