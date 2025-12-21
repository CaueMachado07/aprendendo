// HOF -> Higher Order Function === Função de Ordem Superior que recebe outra função como parâmetro ou retorna uma função como resultado.

// function print(text) {
//     console.log(text);
// };

// importando a função print do arquivo 01_fucoes.js
const { print } = require('./01_fucoes');

print('Funções são essenciais em JavaScript!');

// Exemplo 1: Função que recebe uma função como parâmetro (callback)
function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}

function executarSaudacao(callback, nome) {
    callback(nome); // Chama a função callback passada como argumento
}
executarSaudacao(saudacao, 'Maria');

// Função com retorno de valor
function soma(a, b) {
    return a + b;
}
const resultado = soma(5, 3);

// Função anônima atribuída a uma variável
const multiplicacao = function(x, y) {
    return x * y;
};

// Função callback - uma função passada como argumento para outra função
function executarOperacao(a, b, operacao) { // operacao é uma função callback chamada dentro de executarOperacao exemplo: soma, multiplicacao.
    return operacao(a, b);
}
const resultadoSoma = executarOperacao(7, 3, soma);
print(`Resultado da operação de soma: ${resultadoSoma}`);

const resultadoMultiplicacao = executarOperacao(7, 3, multiplicacao);
print(`Resultado da operação de multiplicação: ${resultadoMultiplicacao}`);

// Exemplo 2: Função que retorna outra função
function criarSaudacao(prefixo) {
    return function(nome) {
        console.log(`${prefixo}, ${nome}!`);
    };
}

const saudacaoFormal = criarSaudacao('Senhor');
saudacaoFormal('Carlos');

const saudacaoInformal = criarSaudacao('Oi');
saudacaoInformal('Ana');