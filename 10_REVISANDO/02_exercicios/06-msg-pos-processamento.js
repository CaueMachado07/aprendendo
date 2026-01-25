// Imagine que você está criando uma função que simula o processamento de um pedido em um site. Após o processamento, você quer que uma mensagem personalizada seja exibida — mas essa mensagem pode variar dependendo do tipo de cliente: comum, vip ou novo usuário.

// Sua tarefa é criar uma função chamada processarPedido, que receba dois parâmetros:

// o nome do cliente, e
// uma função de callback responsável por exibir uma mensagem após o pedido ser processado.

// Exemplo de entrada:
// processarPedido("Lucas", "vip", mensagemPersonalizada);
// processarPedido("Fernanda", "novo", mensagemPersonalizada);
// processarPedido("João", "comum", mensagemPersonalizada);

// Saída esperada:
// Processando pedido de Lucas...
// Obrigado pela preferência, Lucas! Você ganhou frete grátis.

// Processando pedido de Fernanda...
// Bem-vindo(a), Fernanda! Aproveite um cupom de boas-vindas.

// Processando pedido de João...
// Obrigado pela sua compra, João!

function processarPedido( nome, tipoCliente, callback ) {
    console.log( `Processando pedido de ${ nome }...` );
    callback(nome, tipoCliente);
}

function mensagemPersonalizada( nome, tipoCliente ) {
    if ( tipoCliente === "vip" ) {
        console.log( `Obrigado pela preferência, ${ nome }! Você ganhou frete grátis.` );
    } else if ( tipoCliente === "novo" ) {
        console.log( `Bem-vindo(a), ${ nome }! Aproveite um cupom de boas-vindas.` );
    } else {
        console.log( `Obrigado pela sua compra, ${ nome }!` );
    }
}

// Testando a função com diferentes tipos de clientes
processarPedido( "Lucas", "vip", mensagemPersonalizada );
processarPedido( "Fernanda", "novo", mensagemPersonalizada );
processarPedido( "João", "comum", mensagemPersonalizada );

