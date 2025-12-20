// Funções em JavaScript são blocos de código projetados para executar uma tarefa específica.
// Elas podem receber entradas, chamadas de parâmetros, e podem retornar um valor.

// Declaração de função
function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}

saudacao('João'); // Chamada da função
saudacao('Ana'); 

// Função com retorno de valor
function soma(a, b) {
    return a + b;
}
const resultado = soma(5, 3);
console.log(`A soma é: ${resultado}`);

// Função anônima atribuída a uma variável
const multiplicacao = function(x, y) {
    return x * y;
};
console.log(`A multiplicação é: ${multiplicacao(4, 6)}`);

function printText(text) {
    console.log(text);
};
printText('Funções são essenciais em JavaScript!');

// Exemplo de função com parâmetro padrão
function potencia(base, expoente = 2) { // expoente padrão é 2 caso não seja fornecido
    // parametros com valor padrão devem ser os últimos na lista de parâmetros, se inverter a ordem, o JS não saberá qual valor atribuir.
    return base ** expoente;
}
printText(`2 elevado ao quadrado é: ${potencia(2)}`);
printText(`3 elevado ao cubo é: ${potencia(3, 3)}`);



// ------------------------------------------------------------------------------------------

// arrow function (função de seta) - sintaxe mais curta para escrever funções
const saudacaoArrow = (nome) => {
    console.log(`Olá, ${nome}! (via arrow function)`);
}
saudacaoArrow('Carlos');

// Arrow function com retorno implícito
const dividir = (a, b) => a / b;
printText(`10 dividido por 2 é: ${dividir(10, 2)}`);

// arrow function simplificada - sem parênteses para um único parâmetro
const saudacaoSimples = nome => printText(`Oi, ${nome}! (via arrow function simplificada)`);
saudacaoSimples('Caue');

const calcularDobro = numero => numero * 2;
printText(`O dobro de 8 é: ${calcularDobro(8)}`);

// Guia de bolso:
// this: Refere-se ao contexto onde a função é chamada.
// Funções tradicionais: Possuem seu próprio valor de this, dependendo da forma como são chamadas.
// Arrow Functions: Não têm seu próprio this; capturam o valor de this do contexto em que são declaradas.
// Antes de Arrow Functions, usávamos .bind() para corrigir problemas com this.


// -----------------------------------------------------------------------------------------------


