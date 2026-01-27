// Imagine que você está desenvolvendo um sistema de avaliação para um jogo educativo. Ao final de cada fase, o jogador acumula uma pontuação total, e o sistema precisa avaliar se ele:

// Foi aprovado, se a pontuação for igual ou maior que 70
// Precisa de reforço, se a pontuação estiver entre 50 e 69
// Foi reprovado, se a pontuação for menor que 50

// Sua tarefa é criar uma função chamada avaliarDesempenho, que receba dois parâmetros:

// a pontuação final do jogador
// uma função de callback que será usada para exibir uma mensagem personalizada com base no resultado da avaliação.

// Exemplo de entrada:
// avaliarDesempenho(82, gerarMensagem);

// Saída esperada:
// Pontuação: 82
// Parabéns! Você foi aprovado!


function gerarMensagem(desempenho){
    let status = ['aprovado', 'reforço', 'reprovado'];
    if  (!status.includes(desempenho)){
        return 'Status inválido.'
    }
    if ( desempenho === 'aprovado'){
        return 'Parabéns! Você foi aprovado.';
    } else if (desempenho === 'reforço'){
        return 'Atenção! Você precisa de reforço.'
    } else {
        return 'Pontuação insuficiente! Você foi reprovado.'
    }
}

function avaliarDesempenho(pontos, fnCallback ){
    if ( typeof pontos !== 'number' || pontos < 0 ){
        return 'Pontuação inválida.'
    }

    let desempenho = '';

    console.log(`Pontuação: ${pontos}`);

    if (pontos >= 70){
        desempenho = 'aprovado';
    } else if ( pontos >= 50){
        desempenho = 'reforço';
    } else {
        desempenho = 'reprovado';
    }

    let status = fnCallback(desempenho)
    return status
}

console.log(avaliarDesempenho(30, gerarMensagem))



// outra forma de fazer

function avaliarDesempenhoAtt(pontos, fnCallback ){
    if ( typeof pontos !== 'number' || pontos < 0 ) return 'Pontuação inválida.' // validação simplificada

    console.log(`Pontuação: ${pontos}`);

    let desempenho = pontos >= 70 ? 'aprovado' : pontos >= 50 ? 'reforço' : 'reprovado'; // uso de operador ternário para determinar desempenho
    return fnCallback(desempenho)
}

function gerarMensagemAtt(desempenho) {
    const mensagens = { // uso de objeto para mapear mensagens
        aprovado: 'Parabéns! Você foi aprovado.',
        reforço: 'Atenção! Você precisa de reforço.',
        reprovado: 'Pontuação insuficiente! Você foi reprovado.'
    };
    return mensagens[desempenho] || 'Status inválido.'; // retorna mensagem com base no desempenho
}

console.log(avaliarDesempenhoAtt(85, gerarMensagemAtt))
