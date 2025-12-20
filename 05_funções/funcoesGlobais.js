
// importante: Evite sobrescrever funções globais padrão do JavaScript, como alert(), prompt(), parseInt(), etc., pois isso pode causar comportamentos inesperados no seu código.

function print(text) {
    console.log(text);
};

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


