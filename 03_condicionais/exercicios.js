// 1. Verificação de idade para compra de bebida
// Peça a idade da pessoa em uma variável. Se for 18 ou mais, mostre "Pode comprar bebida alcoólica". Caso contrário, mostre "Venda proibida para menores de 18 anos".

// const idade = 20;

// if(idade >= 18){
//     console.log('Pode comprar bebida alcoólica');
// }else{
//     console.log('Venda proibida para menores de 18 anos');
// }

// com operador ternário:
// const maior18 = idade >= 18 ? true : false;
// const print = maior18 ? console.log('Pode comprar bebida alcoólica') : console.log('Venda proibida para menores de 18 anos');



// 2. Saudação de acordo com a hora
// Crie uma variável horaAtual. Se estiver entre 6 e 12, mostre "Bom dia"; entre 12 e 18, "Boa tarde"; caso contrário, "Boa noite".
// const horaAtual = 23.59;

// if (horaAtual >= 0 && horaAtual < 24){
//     if (horaAtual >= 6 && horaAtual < 12){
//         console.log('Bom dia');
//     }else if (horaAtual >= 12 && horaAtual < 18){
//         console.log('Boa tarde');
//     }else{
//         console.log('Boa noite');
//     }
// }else{
//     console.log('Hora inválida');
// };


// 3. Verificação de número positivo ou negativo
// Crie uma variável com um número qualquer. Mostre se ele é positivo, negativo ou igual a zero.
// const theNumber = -3;

// if(theNumber == 0){
//     console.log('Zero é neutro');
// }else{
//     theNumber >= 0 ? console.log('Positivo') : console.log('Negativo');
// }

// 4. Conversão de nota em conceito
// Crie uma variável nota entre 0 e 10. Use if/else if/else para retornar: A (9-10), B (8-9), C (6-7.9), D (4-5.9), E (0-3.9).
// const nota = 2.9;

// if(nota <= 10 && nota >= 0){
//     if( nota >= 9){
//         console.log('Seu conceito é: A!');
//     }else if (nota >= 8){
//         console.log('Seu conceito é: B!');
//     }else if (nota >= 6){
//         console.log('Seu conceito é: C!');
//     }else if(nota >= 4){
//         console.log('Seu conceito é: D!');
//     }else{
//         console.log('Seu conceito é: E!');
//     }
// }else{
//     console.log('Nota inválida');
// }

// 5. Número par ou ímpar com ternário
// Crie uma variável numero. Use o operador ternário para mostrar se ele é par ou ímpar.
// const numero = 2;
// numero % 2 == 0 ? console.log('É Par') : console.log('É Impar')


// 6. Menu com switch-case
// Crie uma variável opcao com valores de 1 a 3. Use switch para mostrar: 1 - "Cadastrar", 2 - "Listar", 3 - "Sair".
// const opcao = 4;

// switch (opcao){
//     case 1:
//         console.log('Cadastrar');
//         break;
//     case 2:
//         console.log('Listar');
//         break;
//     case 3:
//         console.log('Sair');
//         break;
//     default:
//         console.log('Opção Inválida');
// }



// 7. Validação de campo obrigatório
// Crie uma variável email. Se estiver vazia (""), mostre "Preencha o campo de e-mail". Caso contrário, mostre "E-mail válido".
// const email = '';
// email ? console.log('E-mail válido') : console.log('Preencha o campo de e-mail');



// 8. Validação de senha segura
// Crie uma variável senha. Se tiver menos de 6 caracteres, mostre "Senha muito curta". Se tiver 6 ou mais, mostre "Senha válida".
// const senha = '12346';
// senha.length >= 6 ? console.log('Senha válida') : console.log('Senha muito curta')
// console.log(senha.length)



// 9. Compra com saldo
// Crie duas variáveis: saldoDisponivel e valorCompra. Se o saldo for suficiente, mostre "Compra aprovada". Caso contrário, "Saldo insuficiente".
// const saldoDisponivel = 100;
// const valorCompra = 199.99;

// saldoDisponivel >= valorCompra ? console.log('Compra aprovada') : console.log('Saldo insuficiente');



// 10. Validação de formulário completo
// Crie três variáveis: nome, email e idade. Mostre "Formulário enviado com sucesso" apenas se todos os campos estiverem preenchidos e a idade for maior que 0.
const nome = '';
const email = 'teste@email';
const idade = '34';

if(nome && email && idade > 0){
    console.log('Formulário enviado')
}else{
    console.log('dados faltando ou incorretos')
}