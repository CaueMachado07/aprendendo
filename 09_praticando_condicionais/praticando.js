

// // definir um fluxo para somar ou multiplicar dois números usando if/else
// function somarMultiplicar(num1, num2 = 0, operacao){
//     let operacaoLower = operacao.toLowerCase();
//     if(operacaoLower === 'soma'){ return num1 + num2 }
//     else if ( operacaoLower === 'multiplicação'){ return num1 * num2 }
//     else{ return 'Operação inválida!'}
// }

// const somar = somarMultiplicar(10,20,'soma');
// console.log(somar)
// const multiplicacao = somarMultiplicar(10, 10, 'multiplicação');
// console.log(multiplicacao)
// const invalida = somarMultiplicar(10, 20, "divisão");
// console.log(invalida)

// --------------------------------------------------------------------------------------------

// // localizar o nivel de bônus de acordo com a faixa salarial 
// // ex: $11000 e acima: 3% de bônus 
// // $10999 a $7000: 5% de bônus 
// // $ 6999 a $4008: 7% de bônus 
// // $3999 p baixo: 9% de bônus 

// function calcularBonus(salario){
//     let bonus; 
//     if(salario >= 11000){ bonus = salario * 0.03 }
//     else if(salario >= 7000){ bonus = salario * 0.05 }
//     else if(salario >= 4008){ bonus = salario * 0.07 }
//     else{ bonus = salario * 0.09 }
//     return bonus.toFixed(2);
// }
// const bonus1 = calcularBonus(12000);
// console.log(bonus1)
// const bonus2 = calcularBonus(8000);
// console.log(bonus2)
// const bonus3 = calcularBonus(5000);
// console.log(bonus3)
// const bonus4 = calcularBonus(3000);
// console.log(bonus4)

// --------------------------------------------------------------------------------------------

// verificar se um ano é bissexto
// deve ser divisível por 4 mas NÃO divisível por 100
// OU
// deve ser divisível por 100 e por 400

// function verificarBissexto (year){
//     if(((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)){
//         return true;
//     } else{
//         return false;
//     }
// }

// function mostrarResultado(value){
//     verificarBissexto(value) ? console.log(`${value} é um ano bissexto.`) 
//         : console.log(`${value} não é um ano bissexto.`);
// }

// let ano = 1995;
// let ano2 = 2000;
// let ano3 = 2022;

// mostrarResultado(ano2)
// mostrarResultado(ano)

// --------------------------------------------------------------------------------------------

// // Verificar se estudante receberá bônus na nota.
// // Estudantes recebem bônus se nota for 8 ou acima e se tiverem no máximo 2 faltas. 

// const nome = "Roberta";
// const nota = 8;
// const faltas = 5;

// const recebeBonus = (nota >= 8) && (faltas <= 2) 
//     ? `${nome} recebeu o bônus na nota.` 
//     : `${nome} não recebeu o bônus na nota.`;

// console.log(recebeBonus);

// --------------------------------------------------------------------------------------------

// // criar um fluxo que identifica o tipo de pessoa usuária e comunica de acordo.
// // ex: pessoa usuária free tem acesso limitado ao app
// //     pessoa usuária premium tem acesso a todas as funções
// //     pessoa usuária super premium tem acesso total e bônus especiais

// function identificarTipoPessoa(tipo){
//     switch (tipoPessoa){
//     case 'free':
//         console.log(`acesso limitado ao app`);
//         break;
//     case 'premium':
//         console.log(`acesso a todas as funções`);
//         break;
//     case 'super premium':
//         console.log(`acesso total e bônus especiais`);
//         break;
//     default:
//         console.log('Perfil inválido')
//     }
// }


// const tipoPessoa = 'super premium';
// identificarTipoPessoa(tipoPessoa);

// --------------------------------------------------------------------------------------------

// //Crie um programa que, dado o valor da idade, verifique se a pessoa pode ou não entrar no evento. Exiba a mensagem informando se o acesso foi ou não permitido.

// const readline = require('readline');

// function maiorDeIdade(idade){
//     return idade >= 18 ? true : false;
// }

// function verificarAcesso(nome, idade){
//     return maiorDeIdade(idade) ? `Seja bem-vindo(a) ao evento, ${nome}!` 
//         : `Acesso negado, ${nome}! Você precisa ser maior de idade para entrar no evento.`;
// }

// const leitor = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });



// function inputUser() {
//     leitor.question("Digite seu nome: ", function(nomeParticipante) {
//         leitor.question("Digite sua idade: ", function(idadeParticipante) {
//             const nome = nomeParticipante;
//             const idade = parseInt(idadeParticipante);
//             const mensagemAcesso = verificarAcesso(nome, idade);
//             console.log(mensagemAcesso);
//             leitor.close();
//         });
//     });
// }


// inputUser();

// --------------------------------------------------------------------------------------------

// // Você está desenvolvendo um sistema meteorológico para informar sobre o clima do dia. Com base na temperatura, o sistema deve classificar o dia conforme os critérios abaixo:

// // Menor que 15: "Frio"
// // De 15 a 25: "Agradável"
// // Acima de 25: "Quente"
// // Escreva um programa que, dado um valor de temperatura e imprima a mensagem correspondente.

// const readline = require('readline');

// const leitor = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
    
// function classificarClima(temperatura){
//     if(temperatura < 15){
//         return 'Frio';
//     } else if (temperatura <= 25){
//         return 'Agradável';
//     } else {
//         return 'Quente';
//     }
// }


// function inputTemperatura() {
//     leitor.question("Digite a temperatura atual em graus Celsius: ", function(tempInput) {
//         const temperatura = parseFloat(tempInput);
//         const classificacao = classificarClima(temperatura);
//         console.log(`O clima hoje está: ${classificacao}`);
//         leitor.close();
//     });
// }

// inputTemperatura();

// --------------------------------------------------------------------------------------------

// // Você é uma pessoa desenvolvedora de um sistema para uma escola que organiza atividades para diferentes faixas etárias. As regras são:

// // Se a pessoa tiver menos de 12 anos, ela deve ser classificada como "Infantil".
// // Se a pessoa tiver 12 anos ou mais, mas menos de 18 anos, ela deve ser classificada como "Juvenil".
// // Se a pessoa tiver 18 anos ou mais, ela deve ser classificada como "Adulto".
// // Crie um programa que, dado o valor da idade, classifique a pessoa na categoria correspondente.

// const readline = require('readline');

// const leitor = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function faixaEtaria(idade){
//     if(idade < 12){
//         return 'Infantil';
//     } else if (idade >= 12 && idade < 18){
//         return 'Juvenil';
//     }else {
//         return 'Adulto'
//     }
// }

// function verificarClassificacao(){
//     leitor.question('Digite a idade da pessoa: ', (resposta) =>{
//         let idade = Number(resposta);
//         let classificacao = faixaEtaria(idade);
//         console.log(`Classificação ${classificacao}`);
//         leitor.close();
//     })
// }

// verificarClassificacao();

// --------------------------------------------------------------------------------------------

// // Você está desenvolvendo um sistema para controlar o horário de funcionamento de uma loja. Durante a semana, a loja abre das 9h às 18h, mas aos sábados e domingos, ela abre em horário especial, das 10h às 14h.

// // Crie um programa que, dado o dia da semana em formato numérico:

// // 0: Domingo
// // 1: Segunda-feira
// // 2: Terça-feira
// // 3: Quarta-feira
// // 4: Quinta-feira
// // 5: Sexta-feira
// // 6: Sábado
// // Verifique se a loja está aberta e qual o horário de funcionamento.

// // Se for sábado (6) ou domingo (0), a loja estará aberta em horário especial.
// // Nos outros dias, a loja estará aberta no horário normal.

// const readline = require('readline');

// const leitor = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function verificarHorarioLoja(diaSemana){
//     if(diaSemana === 0 || diaSemana === 6){
//         return 'A loja está aberta em horário especial: das 10h às 14h.';
//     } else if (diaSemana >= 1 && diaSemana <= 5){
//         return 'A loja está aberta no horário normal: das 9h às 18h.';
//     } else {
//         return 'Dia inválido! Por favor, insira um número de 0 a 6.';
//     }
// }

// function inputDiaSemana() {
//     leitor.question("Digite o dia da semana (0 para Domingo, 1 para Segunda-feira, ..., 6 para Sábado):\n> ", function(diaInput) {
//         const diaSemana = parseInt(diaInput);
//         const horarioLoja = verificarHorarioLoja(diaSemana);
//         console.log(horarioLoja);
//         leitor.close();
//     });
// }

// inputDiaSemana();

// --------------------------------------------------------------------------------------------

// // Você está criando um sistema de autenticação de usuários para um site. O sistema deve verificar se o usuário digitado é "admin". Se o usuário for "admin", o login será bem-sucedido e será exibida a mensagem "Login bem-sucedido!". Caso contrário, o sistema deve exibir "Usuário inválido."

// // Crie um programa utilizando o operador ternário que realize essa verificação e exiba a mensagem correspondente.

// const readline = require('readline');

// const leitor = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function autenticarUsuario(usuario){
//     return usuario === 'admin' ? 'Login bem-sucedido!' : 'Usuário inválido.';
// }

// function inputUsuario() {
//     leitor.question("Digite o nome de usuário:\n> ", function(usuarioInput) {
//         const mensagemAutenticacao = autenticarUsuario(usuarioInput);
//         console.log(mensagemAutenticacao);
//         leitor.close();
//     });
// }

// inputUsuario();

// --------------------------------------------------------------------------------------------

// // Você está desenvolvendo um sistema para verificação de compatibilidade de frutas em um processo de preparo de sucos. O sistema precisa verificar se o tipo de fruta informado é compatível com o tipo esperado, de acordo com uma receita.

// // O suco pode ser feito somente com "laranja" ou "abacaxi".
// // Qualquer outra fruta que não seja "laranja" ou "abacaxi" deve gerar uma mensagem de erro, informando que a fruta não é compatível.
// // Crie um programa que, dado o nome da fruta, verifique se ela é compatível com a receita.

// const readline = require('readline');

// const leitor = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function verificarFruta(fruta){
//     return ((fruta === 'laranja') || (fruta === 'abacaxi'))
//         ? 'Fruta compativel' : 'Fruta incompativel';
// }

// function inputUsuario(){
//     leitor.question('Informe a fruta: ', (resposta) =>{
//         let fruta = verificarFruta(resposta.toLowerCase());
//         console.log(fruta);
//         leitor.close();
//     })
// }
// inputUsuario();

// --------------------------------------------------------------------------------------------

// // Imagine que você está desenvolvendo um site de compras. A pessoa só pode finalizar a compra se o carrinho não estiver vazio.

// // Crie um programa que, com base na variável carrinhoVazio (booleana), verifique se a compra pode ser finalizada. Se o carrinho não estiver vazio, mostre: "Compra finalizada com sucesso!". Caso contrário, exiba: "Não é possível finalizar a compra: carrinho vazio."

// function finalizarCompra(carrinho){
//     return !carrinho 
//         ? 'Compra finalizada com sucesso!' 
//         : 'Não é possível finalizar a compra: carrinho vazio.';
// }

// const carrinhoVazio = true;
// console.log(finalizarCompra(carrinhoVazio));

// // --------------------------------------------------------------------------------------------

// 19 - Verificando o status de pagamento
// Você está criando um sistema de verificação de status de pagamento de clientes. Dependendo do status, o sistema deve exibir uma mensagem apropriada:

// Se o status for "pendente", exibe: "Pagamento pendente".
// Se o status for "aprovado", exibe: "Pagamento aprovado".
// Se o status for "recusado", exibe: "Pagamento recusado".
// Use o switch/case para criar um programa que faça essa verificação e mostre a mensagem correspondente ao status do pagamento.



// // --------------------------------------------------------------------------------------------


// 20 - Verificar acesso a nível do jogo
// Você está criando um sistema para um jogo, onde o personagem tem que passar por duas condições para conseguir avançar para o próximo nível:

// O personagem precisa ter mais de 50 pontos.
// O personagem deve ter pelo menos uma vida restante.
// Crie um programa que, dado os pontos e as vidas restantes, verifique se o personagem pode ou não avançar para o próximo nível.


// // --------------------------------------------------------------------------------------------


// 21 - Nível de bateria do dispositivo
// Você está desenvolvendo um sistema que exibe a situação da bateria de um dispositivo com base na porcentagem de carga. O sistema deve classificar a bateria nas seguintes categorias:

// "Crítica": se a bateria estiver abaixo de 20%
// "Moderada": se estiver entre 20% e 80%
// "Cheia": se estiver acima de 80%
// Utilize o operador ternário para definir e exibir a categoria da bateria com base no valor da variável bateria.