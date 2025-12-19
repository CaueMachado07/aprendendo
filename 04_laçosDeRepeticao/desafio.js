// // contar quantidade de números pares e impares entre 0 e 100
// let totalPar = 0;
// let totalImpar = 0;

// for(let i = 0; i <= 100; i++){
//     i % 2 == 0 ? totalPar ++ : totalImpar ++;
// }

// console.log(`Total de números pares: ${totalPar} || Total de números ímpares: ${totalImpar}`)


// // 1. Contador de 1 a 10
// // Use um for para mostrar no console os números de 1 até 10, um por linha.
// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }

// // 2. Soma de 1 a 100
// // Some todos os números de 1 a 100. Mostre o resultado no final com uma mensagem explicativa.
// let soma = 0;

// for(let i = 1; i <= 100; i++){
//     soma += i;
// }

// //usando while
// let contador = 1;

// while(contador <= 100){
//     soma += contador;
//     contador++
// }

// console.log(`Soma total de 1 a 100 usando laço for: ${soma}`);

// 3. Tabuada personalizada
// Peça um número e mostre a tabuada desse número (de 1 a 10) usando um for.
// let numero = 7;

// console.log(`Tabuada de ${numero}`)
// for(let i = 1; i <= 10; i++){
//     console.log(`|${numero}| x |${i}| = |${numero * i}|`);
// }


// 4. Contagem regressiva
// Use while para contar de 10 até 0 no console. Mostre uma mensagem no fim: "Contagem finalizada!".
// let contagem = 10;

// while (contagem >= 0){
//     console.log(contagem);
//     if (contagem == 0){
//         console.log('Contagem Finalizada');
//     }
//     contagem--;
// }

// 5. Receber números até digitar 0
// Use do...while para simular a entrada de números. O programa deve continuar até que o usuário digite 0. Ao final, mostre quantos números foram digitados.
// let total = 1;
// let numeroDigitado;
// do {
//     // Simulando a entrada de números
//     numeroDigitado = Math.floor(Math.random() * 10); 
//     console.log(`Número digitado: ${numeroDigitado}`);
//     if (numeroDigitado !== 0) {
//         total++;
//     } else {
//         console.log(`Total de números digitados: ${total}`);
//     }
// } while (numeroDigitado !== 0);


// 6. Jogo do número secreto
// Defina uma variável numeroSecreto com o valor 7. O usuário tem 3 tentativas para acertar (simule essas tentativas com variáveis). Mostre mensagens de "Acertou!" ou "Tente novamente".
// const numeroSecreto = 7;
// let tentativas = 3;
// let numeroDigitado;

// do {
//     numeroDigitado = Math.floor(Math.random() * 10);

//     if (numeroDigitado !== numeroSecreto) {
//         tentativas--;
//         console.log(`Seu palpite |${numeroDigitado}| está errado, restam ${tentativas} tentativas!`);
//     } else {
//         console.log(`Parabéns! O palpite ${numeroDigitado} é o número secreto.`);
//         break;
//     }
// } while (tentativas !== 0);

// // 7. Idade ao longo dos anos
// // Crie uma variável anoNascimento e anoAtual. Use um for para listar a idade da pessoa ano a ano até o ano atual.
// const anoNascimento = 1990;
// const anoAtual = 2025;
// for (let ano = anoNascimento; ano <= anoAtual; ano++) {
//     const idade = ano - anoNascimento;
//     console.log(`Em ${ano}, você tinha ${idade} anos.`);
// }


// 8. Listando números pares
// Mostre todos os números pares entre 1 e 50 usando for.
// for (let i = 1; i <= 50; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

// // 9. Contar múltiplos de 3 entre 1 e 100
// // Mostre no console quantos números entre 1 e 100 são divisíveis por 3.
// let multiplosDe3 = 0;

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0){
//         multiplosDe3++
//     }
// }

// console.log(`Temos um total de ${multiplosDe3} multiplos de 3 entre 1 e 100.`);

// 10. Menu com repetição
// Crie um menu simples que exibe opções como "1 - Ver saldo", "2 - Fazer depósito", "3 - Sair". Use do...while para repetir o menu até o usuário escolher sair.
//let opcao = true;
let opcaoDigitada;

do {
    opcaoDigitada = Math.floor(Math.random() * 5);

    if (opcaoDigitada === 1) {
        console.log('Ver saldo');
    } else if (opcaoDigitada === 2){
        console.log('Fazer depósito');
    } else if (opcaoDigitada === 3){
        console.log('Sair');
        //opcao = false;
        break;
    }
    else {
        console.log('Opção iválida! Digite 1 - Para Saldo; 2 - Para depósitos; 3 - para sair;');
    }
} while (true);