// 01 - Verificação de maioridade
let idade = 15;
const maioridade = idade >= 18;

if(!maioridade){
    console.log(`Você tem ${idade} anos de idade, ainda não está na maioridade.`);
}else{
    console.log(`Sua idade é de ${idade} anos, faz parte do grupo de maioridade!`)
};



// 02 - Situação do aluno: crie duas variáveis com notas de um aluno. Calcule a média. Se for maior ou igual a 7, mostre "Aprovado". Caso contrário, mostre "Reprovado".
let nota01 = 5;
//let nota01 = 10;
let nota02 = 8;

let media = (nota01 + nota02)/2;

const aprovado = media >= 7;

if(!aprovado){
    console.log(`Nos vemos novamente semestre que vem! Sua média final foi: ${media}. REPROVADO!`);
}else{
    console.log(`Parabéns! Sua média final foi: ${media}. APROVADO!`);
};



// 03 - Calculadora de troco
let valorCompra = 35.90;
let valorPago = 50;

let troco = valorPago - valorCompra;

console.log(`Boas vindas à calculadora de troco!`);
console.log(`Valor da compra R$: ${valorCompra.toFixed(2)}`);
console.log(`Valor pago R$: ${valorPago.toFixed(2)}`);
console.log(`Seu troco é R$: ${troco.toFixed(2)}`);


// 04 - Validação de senha: Crie duas variáveis com senhas digitadas em momentos diferentes. Verifique se são iguais usando operadores de comparação.
const senha = 132435;
//let senhaDigitada = 123456;
let senhaDigitada = 132435;

if(senha !== senhaDigitada){
    console.log(`Acesso negado!`);
}else{
    console.log(`Acesso liberado!`);
};


// 05 - Controle de faltas: Considere totalAulas = 80 e faltas = 25. Calcule se as faltas ultrapassam 25% das aulas. Mostre a conclusão no console.
const totalAulas = 80;
let faltas = 25;
// let faltas = 30;

let limiteFaltas = totalAulas * 0.25;

if(faltas > limiteFaltas){
    console.log(`O Aluno ultrapassou 25% de faltas!`);
}else{
    console.log(`O Aluno não ultrapassou 25% de faltas!`);
};


// 06 - Verificação de login: Crie duas variáveis temLogin e temSenha. Use operadores lógicos para verificar se o usuário pode acessar o sistema.
let temLogin = true;
// let temSenha = false;
let temSenha = true;

if(!temLogin || !temSenha){
    console.log(`Acesso negado!`);
}else{
    console.log(`Acesso liberado!`);
};


// 07 - Valor negado: Crie uma variável booleana chamada disponível. Mostre seu valor negado no console, ou seja, se estiver disponível, exiba que não está, e vice-versa.
let disponivel = true;
let indisponivel = false;

console.log(`Exibindo a negação da variavel "disponivel" atribuida com "true": ${!disponivel}`);
console.log(`Exibindo a negação da variavel "indisponivel" atribuida com "false": ${!indisponivel}`);


// 08 - Condição composta: Crie duas variáveis com números. Verifique se os dois são pares e se são iguais. Exiba a conclusão.
let num01 = 10;
let num02 = 20;

if (num01 % 2 === 0 && num02 % 2 === 0 && num01 === num02) { 
    console.log(`Os números são pares e iguais.`); 
} else { 
    console.log(`Os números não atendem todos os requisitos.`); 
};



// 9 - Calculadora de porcentagem: Calcule quanto é 15% de 120 usando operadores matemáticos. Mostre a frase: "15% de 120 é igual a X."
let total = 120; 
let porcentagem = total * 0.15; 

console.log(`15% de 120 é igual a ${porcentagem}.`); 

 

// 10 - Ordem de operações: Escreva a expressão 2 + 3 * 5. Mostre o resultado e explique por que a multiplicação foi feita antes da soma.
let resultado = 2 + 3 * 5; 

console.log(`Resultado da expressão 2 + 3 * 5: ${resultado}`); 
console.log(`Multiplicação é feita primeiro devido a ordem de precedência dos operadores, se quisermos realizar a soma primeiro devemos colocar entre parenteses. ex: (2 + 3) * 5.`)