
// importante: Evite sobrescrever funções globais padrão do JavaScript, como alert(), prompt(), parseInt(), etc., pois isso pode causar comportamentos inesperados no seu código.

// function print(text) {
//     console.log(text);
// };

// importando a função print do arquivo 01_fucoes.js
const { print } = require('./01_fucoes');

function printMsg() {
    print('Hell yeah!');
}

// Função global setTimeout
// usada para executar uma função ou trecho de codigo após um determinado tempo em milissegundos.
print('Iniciando contagem de tempo...');
print('Aguarde 2 segundos...');

// sintaxe: setTimeout(funcao, tempoEmMilissegundos);

// A função passada para setTimeout não deve ser chamada imediatamente, mas sim referenciada para que seja executada após o tempo especificado.

// Se você passar a chamada da função com parênteses, ela será executada imediatamente, e o valor retornado (se houver) será passado para setTimeout, o que não é o comportamento desejado.

// Exemplo de uso incorreto de setTimeout:
// Remova o comentário da linha abaixo para ver o comportamento incorreto.

//setTimeout(print('Forma errada de usar | comente esta linha para executar da forma correta'), 2000); // Isso não funcionará como esperado

// Explicação: A função print é chamada imediatamente, e seu retorno (undefined) é passado para setTimeout.

// Para corrigir isso, você deve passar uma função anônima ou uma arrow function que chama print após o tempo especificado.

// Exemplo corrigido:
setTimeout(printMsg, 2000); // Correto: Passa a referência da função printMsg para ser executada após 2 segundos.

// Ou usando uma função anônima:
setTimeout(function() { 
    print('Esta mensagem foi exibida após 3 segundos.');
}, 3000);

// Ou usando uma arrow function:
setTimeout(() => { 
    print('Esta segunda mensagem foi exibida após 4 segundos.');
}, 4000);

// ------------------------------------------------------------------------------------------

// // Função global setInterval
// // usada para executar uma função ou trecho de codigo repetidamente em intervalos de tempo especificados em milissegundos.
// let contador = 0;
// const intervalo = setInterval(() => {
//     contador++;
//     print(`Contador: ${contador}`);
//     if (contador >= 5) {
//         clearInterval(intervalo); // Para o intervalo após 5 execuções
//         print('Contagem encerrada.');
//     }
// }, 1000); // Executa a cada 1 segundo
// // Neste exemplo, a função dentro de setInterval é executada a cada segundo, incrementando o contador e exibindo seu valor. Quando o contador atinge 5, clearInterval é chamado para parar a execução repetida.

// Perceba que no console as do settimeout e setInterval podem não aparecer na ordem exata devido à natureza assíncrona dessas funções.

// Vamos comentar o exemplo acima para evitar confusão na saída do console.
// Vamos usar setTimeout junto com setInterval para exibir a contagem após um atraso inicial.
setTimeout(() => {
    print('Iniciando contagem combinando setTimeout e setInterval com atraso de 5 segundos...');
    let count = 5; // inicializa o contador
    const countInterval = setInterval(() => { // inicia o intervalo
        print(`Contagem regressiva: ${count}`);
        count--; // decrementa o contador
        if (count <= 0) { // quando o contador chegar a 0
            clearInterval(countInterval); // para o intervalo
            print('Contagem regressiva encerrada.');
        }
    }, 1000); // Executa a cada 1 segundo
}, 5000); // Atraso inicial de 5 segundos

// Guia de bolso:
// setTimeout: Executa uma função uma única vez após um atraso especificado.
// setInterval: Executa uma função repetidamente em intervalos especificados até que seja parado com clearInterval().
// clearInterval: Usado para parar a execução repetida iniciada por setInterval.

// ------------------------------------------------------------------------------------------

// Consulte a documentação oficial do MDN para mais detalhes sobre essas funções globais:
// setTimeout: https://developer.mozilla.org/pt-BR/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
// setInterval: https://developer.mozilla.org/pt-BR/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
// clearInterval: https://developer.mozilla.org/pt-BR/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval
// Essas funções são amplamente utilizadas para controlar o tempo de execução de código em JavaScript, especialmente em aplicações web.
// Guia de bolso:
// Funções globais: Funções disponíveis em todo o ambiente JavaScript sem necessidade de importação.
// Exemplos: setTimeout(), setInterval(), parseInt(), parseFloat(), isNaN(), encodeURI(), decodeURI().
// Uso: Facilita tarefas comuns como temporização, análise de strings e manipulação de URLs.
// Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects