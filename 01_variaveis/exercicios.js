

// 01 - Boas vindas
let nome = 'Cauê';
console.log(`Olá, ${nome}! Seja bem-vindo ao mundo do JavaScript.`);

// 02 - Operações matemáticas simples exibir idade atual
let anoNascimento = 1991;
let anoAtual = 2025;
let idade = anoAtual - anoNascimento;
console.log(`Você tem ${idade} anos  de idade em ${anoAtual}.`);

// 03 - exibir sua cidade e estado e país
let cidade = 'Formosa';
let estado = 'GO';
let pais = 'Brasil';
console.log(`Você está em ${cidade}-${estado}, ${pais}.`);

// 5. Simulação bancária simples 
let saldo = 0; // saldo inicial 
saldo += 200; // depósito 
saldo -= 50; // saque 
console.log("Saldo final: R$" + saldo); 

// 6. Média de notas 
let matematica = 8; 
let portugues = 7; 
let ciencias = 9; 
let media = (matematica + portugues + ciencias) / 3; 
console.log("Média final: " + media); 

// 7. Reajuste de salário 
let salario = 3000; 
let novoSalario = salario * 1.10; // aumento de 10% 
console.log("Após um aumento de 10%, o novo salário é R$" + novoSalario.toFixed(2)); 

let salario2 = 3000;
let aumentoSalarial = salario2 * 0.1;
salario2 += aumentoSalarial;

console.log(`Você recebeu aumento de 10% em seu salário. Seu novo salário é de: R$${salario2.toFixed(2)}.`);