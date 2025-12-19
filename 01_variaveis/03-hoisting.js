// O que é hoisting?
// Hoisting é um comportamento padrão do JavaScript onde declarações de variáveis e funções são movidas para o topo do seu escopo antes da execução do código. 
// Isso significa que você pode usar variáveis e funções antes de declará-las no código.

// Exemplo com variáveis
console.log(minhaVar); // undefined devido ao hoisting
var minhaVar = 10;
console.log(minhaVar); // 10

// Exemplo com funções
minhaFuncao(); // "Função chamada!" devido ao hoisting
function minhaFuncao() {
    console.log("Função chamada!");
}
// Diferença entre var, let e const no contexto de hoisting
console.log(varExemplo); // undefined devido ao hoisting
var varExemplo = "Eu sou uma variável var";
// console.log(letExemplo); // ReferenceError: Cannot access 'letExemplo' before initialization
let letExemplo = "Eu sou uma variável let";
// console.log(constExemplo); // ReferenceError: Cannot access 'constExemplo' before initialization
const constExemplo = "Eu sou uma constante const";
// Resumo
// Variáveis declaradas com var são içadas e inicializadas com undefined.
// Variáveis declaradas com let e const são içadas, mas não inicializadas, resultando em um erro se acessadas antes da declaração.
// Funções declaradas com a sintaxe function são içadas completamente, permitindo seu uso antes da declaração.
// Recomendações
// Evite depender do hoisting para manter o código claro e previsível.
// Sempre declare variáveis e funções no início do seu escopo para melhorar a legibilidade.
// Evite usar var; prefira let e const para declarar variáveis.
