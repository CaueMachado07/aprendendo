// quiz de java script usando estruturas condicionais, funções e readline

// pegar a entrada do usuário
const readline = require('readline');

// criar a interface de leitura
const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// função print
function print(text) {
    console.log(text);
}

// função para validar input
function validarResposta(pergunta, callback) {
    // leitor para entrada do usuário
    leitor.question(pergunta, (resposta) => {
        // condicional para validar resposta
        if ('a' === resposta.toLowerCase() || 'b' === resposta.toLowerCase() || 'c' === resposta.toLowerCase()) {
            // 
            callback(resposta.toLowerCase());
        } else {
            print('Opção inválida! Digite apenas a, b ou c.\n');
            validarResposta(pergunta, callback); // pede novamente
        }
    });
}

print('Bem-vindo(a) ao Quiz de JavaScript!');
print('Responda as perguntas com a alternativa correta (a, b ou c). \n');

let score = 0; // pontuação do usuário

// quiz de java script
// leitor.question('1) Qual palavra usamos para criar uma função?\n a) define\n b) function\n c) create \n', (resposta1) => {
validarResposta('1) Qual palavra usamos para criar uma função?\n a) define\n b) function\n c) create \n', (resposta1) => {
    if (resposta1.toLowerCase() === 'b') {
        print('Resposta correta!\n');
        score++;
    } else {
        print('Resposta incorreta! A resposta correta é: b) function\n');
    }
    // leitor.question('2) Qual dessas é uma estrutura de repetição\n a) loopar\n b) repeat\n c) for \n', (resposta2) => {
    validarResposta('2) Qual dessas é uma estrutura de repetição\n a) loopar\n b) repeat\n c) for \n', (resposta2) => {
        if (resposta2.toLowerCase() === 'c') {
            print('Resposta correta!\n');
            score++;
        } else {
            print('Resposta incorreta! A resposta correta é: c) for\n');
        }
        // leitor.question('3) Qual valor é considerado falsy em JavaScript?\n a) 1\n b) 0\n c) "texto" \n', (resposta3) => {
        validarResposta('3) Qual valor é considerado falsy em JavaScript?\n a) 1\n b) 0\n c) "texto" \n', (resposta3) => {
            if (resposta3.toLowerCase() === 'b') {
                print('Resposta correta!\n');
                score++;
            } else {
                print('Resposta incorreta! A resposta correta é: b) 0\n');
            }
            if(score === 3) {
                print('Parabéns! Você acertou todas as perguntas!\n');
            }else if(score === 2) {
                print('Muito bom! Continue assim! Você acertou 2 de 3 perguntas.\n');
            }else if(score === 1) {
                print('Você acertou 1 de 3 perguntas. Continue melhorando!\n');
            } else {
                print('Você não acertou nenhuma pergunta. Continue praticando!\n');
            }
            print(`Quiz terminado!`);
            leitor.close();
        });
    });
});
// fim do quiz

