// importando a função print do arquivo 01_fucoes.js
const { print } = require('./01_fucoes');

// Vamos receber dados do usuário e exibi-los no console
// vamos importar o módulo 'readline' para facilitar a entrada de dados
// de forma interativa no terminal

// Importa o módulo readline
const readline = require('readline'); // require é usado para importar módulos no Node.js

// Cria uma interface para entrada e saída de dados
const leitor = readline.createInterface({
    input: process.stdin, // entrada padrão - função do sistema operacional
    output: process.stdout // saída padrão - função do sistema operacional
});

// como usar o método question para fazer uma pergunta ao usuário
// e receber a resposta de forma assíncrona
// O método question exibe uma pergunta e espera a resposta do usuário
// Quando o usuário responde, a função de callback é chamada com a resposta
// Sintaxe: leitor.question(pergunta, callback)
// O callback recebe a resposta do usuário como argumento
// Exemplo:
leitor.question('Qual é o seu nome? ', (nome) => {
    print(`Olá, ${nome}! Seja bem-vindo(a)!`);
    // Após receber a resposta, fechamos a interface para encerrar o programa
    leitor.close();
});

// Note que o leitor.close() é chamado dentro do callback para garantir
// que a interface só seja fechada após a resposta ser recebida.
// Isso evita que o programa termine antes de receber a entrada do usuário.

// Você pode fazer várias perguntas encadeadas, mas lembre-se de que
// cada pergunta deve estar dentro do callback da pergunta anterior,
// o que pode levar ao "callback hell" se não for gerenciado corretamente.

// // Exemplo de perguntas encadeadas:

// leitor.question('Qual é a sua idade? ', (idade) => {
//     print(`Você tem ${idade} anos.`);
//     leitor.question('Qual é a sua cidade? ', (cidade) => {
//         print(`Você mora em ${cidade}.`);
//         leitor.close(); // Fecha a interface após a última pergunta
//     });
// });

// Neste exemplo, fazemos duas perguntas em sequência,
// garantindo que cada pergunta só seja feita após a resposta da anterior.
// Lembre-se de que o uso excessivo de callbacks pode tornar o código difícil de ler.

// // exemplos com condicionais e loops podem ser feitos dentro dos callbacks
// // para processar as respostas conforme necessário.
// // Por exemplo, podemos verificar se a idade é maior que 18:

// leitor.question('Quantos anos você tem? ', (idade) => {
//     if (parseInt(idade) >= 18) {
//         print('Você é maior de idade.');
//     } else {
//         print('Você é menor de idade.');
//     }
//     leitor.close();
// });

// Note que usamos parseInt para converter a string de entrada em um número inteiro
// antes de fazer a comparação na condicional.
// Da mesma forma, podemos usar loops para fazer múltiplas perguntas,
// mas isso pode complicar o código se não for bem estruturado.

// Lembre-se de sempre fechar a interface com leitor.close() quando terminar
// de receber entradas para evitar que o programa fique em execução indefinidamente.

// Importante: O módulo 'readline' é específico do Node.js e não funciona em navegadores.

// guia de bolso:
// 1. Importar o módulo readline.
// 2. Criar uma interface de leitura.
// 3. Fazer perguntas usando o método question.
// 4. Fechar a interface com leitor.close() quando não for mais necessária.

// Com isso, você pode interagir com o usuário via terminal,
// recebendo entradas e respondendo conforme necessário!