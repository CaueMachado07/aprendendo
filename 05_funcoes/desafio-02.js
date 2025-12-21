// quiz de java script

// importando a função print do arquivo 01_fucoes.js
const { print } = require('./01_fucoes');

// pegar a entrada do usuário
const readline = require('readline');

// criar a interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

print('Bem-vindo(a) ao Quiz de JavaScript!');
print('Responda as perguntas com a alternativa correta (a, b ou c). \n');

let score = 0; // pontuação do usuário

// perguntas do quiz
const questions = [
    {
        question: '1. Qual é a saída de: console.log(typeof null)?\n a) "object"\n b) "null"\n c) "undefined"\n',
        answer: 'a'
    },
    {
        question: '2. Qual método é usado para adicionar um elemento ao final de um array?\n a) push()\n b) pop()\n c) shift()\n',
        answer: 'a'
    },
    {
        question: '3. Qual palavra-chave é usada para declarar uma constante em JavaScript?\n a) var\n b) let\n c) const\n',
        answer: 'c'
    }
];

// função para fazer as perguntas recursivamente
function askQuestion(index) {
    if (index < questions.length) { // se ainda houver perguntas
        rl.question(questions[index].question, (userAnswer) => {
            if (userAnswer.toLowerCase() === questions[index].answer) {
                print('Resposta correta!\n');
                score++;
            } else {
                print(`Resposta incorreta! A resposta correta é: ${questions[index].answer}\n`);
            }
            askQuestion(index + 1); // próxima pergunta
        });
    } else {
        print(`Quiz terminado! Sua pontuação final é: ${score} de ${questions.length}`);
        rl.close();
    }
}
askQuestion(0); // iniciar o quiz com a primeira pergunta
// fim do quiz