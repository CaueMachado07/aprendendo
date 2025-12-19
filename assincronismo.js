// // Exemplos de assincronismo em JavaScript

// console.log('Início');

// setTimeout(() => {
//   console.log('Tarefa assíncrona concluída');
// }, 1000);

// console.log('Fim');

// // Usando Promise
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Dados obtidos');
//     }, 1000);
//   });
// }

// fetchData()
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// // Usando Async/Await
// async function getData() {
//   try {
//     const data = await fetchData();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getData();

// // 1. Callback simples 
// function saudacao(nome) {
//     console.log(`Olá, ${nome}!`);
// }
// function executarSaudacao(callback, nome) {
//     callback(nome);
// } 
// executarSaudacao(saudacao, 'Maria');

// // 2. Uso de setTimeout
// setTimeout(() => {
//     console.log('Esta mensagem é exibida após 2 segundos');
// }, 2000);

// // 3. Uso de setInterval
// let contador = 0;
// const intervalo = setInterval(() => {
//     contador++;
//     console.log(`Contador: ${contador}`);
//     if (contador >= 5) {
//         clearInterval(intervalo);
//         console.log('Contador finalizado');
//     }
// }, 1000);

// // 4. Promises básicas  
// function promessaExemplo() {
//     return new Promise((resolve, reject) => {
//         const sucesso = true; // Mude para false para testar o rejeito
//         if (sucesso) {
//             resolve('A promessa foi cumprida com sucesso!');
//         } else {
//             reject('A promessa foi rejeitada.');
//         }
//     }); 
// }

// promessaExemplo()
//     .then((mensagem) => {
//         console.log(mensagem);
//     })
//     .catch((erro) => {
//         console.error(erro);
//     });
// // 5. Async/Await
// async function funcaoAssincrona() {
//     try {
//         const resultado = await promessaExemplo();
//         console.log('Resultado da promessa:', resultado);
//     } catch (erro) {
//         console.error('Erro capturado:', erro);
//     }
// }

// funcaoAssincrona();

// // 6. Fetch API para requisições HTTP
// async function buscarDados() {
//     try {
//         const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         const dados = await resposta.json();
//         console.log('Dados recebidos:', dados);
//     } catch (erro) {
//         console.error('Erro ao buscar dados:', erro);
//     }
// }

// buscarDados();

// Fim do arquivo assincronismo.js