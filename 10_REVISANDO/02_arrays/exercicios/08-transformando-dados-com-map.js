// 19 Transformando dados com map()

// Você está desenvolvendo um sistema de pagamento e todos os produtos precisam receber um desconto de 10% antes de serem exibidos para as pessoas. Escreva um programa que:

// Crie um array com os preços originais dos produtos.
// Use o método map() para aplicar 10% de desconto em cada item.
// Exiba o novo array com os preços já com o desconto aplicado.

// Exemplo de entrada:
// const precos = [100, 80, 50, 120];

// Saída esperada:
// Preços com desconto: [90, 72, 45, 108]

// função que aplica desconto com percentual padrão de 10%
function aplicarDesconto (precos, percentual = 10){
    return precos.map(valor => valor * (1 - percentual / 100) );
}

const precos = [100, 80, 50, 120];

const precosComDesconto = aplicarDesconto(precos);

console.log('Preços originais:', precos);

console.log('Preços com desconto:', precosComDesconto);
