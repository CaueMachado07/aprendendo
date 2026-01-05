// Variavel global - não recomendado 
idade = 30;
var nome = 'Ana';

// Variavel local - recomendado para escopo de função ou bloco que pode mudar de valor
let idadeLocal = 31; //use let para variaveis que podem mudar de valor

// Variavel constante - valor fixo - recomendado para valores que não mudam de valor 
const ano = 2025; // use const para valores que não mudam de valor

// Variavel com escopo de bloco
{
    let idade = 33;
    console.log('Idade dentro do bloco: ' + idade);
}





let idade = 34;
let nome = 'Cauê';

console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos.');