

// sintaxe do for
// for (inicialização; condição; incremento) {
//     // bloco de código a ser executado
// }

// CUIDADO: Evite criar loops infinitos, pois eles podem travar o navegador ou o ambiente de execução.

// for (let i = 0; i < 5; )  Loop finito ==> veja que não há incremento, portanto Loop repetirá infinitamente o primeiro laço pois sempre i será o valor inicial 0.

// for (let i = 1; i > 0; i++)  Loop infinito ==> veja que a condição nunca será falsa pois i sempre será maior que 0, portanto Loop repetirá infinitamente incrementando a cada laço.

// o loop for é usado quando sabemos o número exato de iterações que queremos executar.

// a instrução 'break' pode ser usada para sair de um loop(for/while) antes que ele termine naturalmente.

// a instrução 'continue' pode ser usada para pular a iteração atual de um loop e continuar com a próxima iteração.


// sintaxe do while
// while (condição) {
//     // bloco de código a ser executado
// }

// o loop while é usado quando não sabemos o número exato de iterações que queremos executar, mas sabemos a condição para continuar o loop.

// CUIDADO: Evite criar loops infinitos, pois eles podem travar o navegador ou o ambiente de execução.

// o laço while continuará executando enquanto a condição for verdadeira. Portanto, é importante garantir que a condição eventualmente se torne falsa para evitar loops infinitos.


// sintaxe do do...while
// do {
//     // bloco de código a ser executado
// } while (condição);

// o loop do...while é usado quando é necessário ao menos uma iteração. 
// semelhante ao while, mas a condição é verificada após a execução do bloco de código. Isso garante que o bloco de código seja executado pelo menos uma vez, mesmo que a condição seja falsa desde o início.

// CUIDADO: Evite criar loops infinitos, pois eles podem travar o navegador ou o ambiente de execução.