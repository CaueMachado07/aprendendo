// Funções em JavaScript são blocos de código projetados para executar uma tarefa específica.
// Elas podem receber entradas, chamadas de parâmetros, e podem retornar um valor.

// Declaração de função
// Função para imprimir texto no console
function print(text) {
    console.log(text);
};

function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
};

// Função com retorno de valor
function soma(a, b) {
    return a + b;
};

// Função anônima atribuída a uma variável
const multiplicacao = function(x, y) {
    return x * y;
};

// Exemplo de função com parâmetro padrão
function potencia(base, expoente = 2) { // expoente padrão é 2 caso não seja fornecido
    // parametros com valor padrão devem ser os últimos na lista de parâmetros, se inverter a ordem, o JS não saberá qual valor atribuir.
    return base ** expoente;
};

// ------------------------------------------------------------------------------------------

// arrow function (função de seta) - sintaxe mais curta para escrever funções
const saudacaoArrow = (nome) => {
    console.log(`Olá, ${nome}! (via arrow function)`);
};

// Arrow function com retorno implícito
const dividir = (a, b) => a / b;

// arrow function simplificada - sem parênteses para um único parâmetro
const saudacaoSimples = nome => print(`Oi, ${nome}! (via arrow function simplificada)`);

const calcularDobro = numero => numero * 2;

// Guia de bolso:
// this: Refere-se ao contexto onde a função é chamada.
// Funções tradicionais: Possuem seu próprio valor de this, dependendo da forma como são chamadas.
// Arrow Functions: Não têm seu próprio this; capturam o valor de this do contexto em que são declaradas.
// Antes de Arrow Functions, usávamos .bind() para corrigir problemas com this.


// -----------------------------------------------------------------------------------------------

// Exportando as funções para uso em outros arquivos
module.exports = {
    print,
    saudacao,
    soma,
    multiplicacao,
    potencia,
    saudacaoArrow,
    dividir,
    saudacaoSimples,
    calcularDobro
};
// Agora essas funções podem ser importadas em outros arquivos usando require('./01_fucoes');
// 

