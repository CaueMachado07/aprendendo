// 21 Painel de controle de produtos


// Você está desenvolvendo um painel de vendas para a área comercial de uma empresa. O time quer uma visão clara de quais produtos venderam bem, quanto cada um arrecadou, e qual gerou mais lucro.

// Você precisa:

// Mostrar todos os produtos (nome, preço, quantidade).
// Filtrar os que venderam mais de 100 unidades e exibir seus nomes.
// Calcular os totais de venda de cada produto.
// Descobrir o mais lucrativo.

// Exemplo de entrada:

// const produtos = [
//   { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 },
//   { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
//   { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
//   { nome: 'Monitor', preco: 900, quantidadeVendida: 95 }
// ];


// Saída esperada:
// Relatório de produtos vendidos:

// Produto: Notebook | Preço: 2500 | Quantidade vendida: 75
// Produto: Mouse | Preço: 100 | Quantidade vendida: 180
// Produto: Teclado | Preço: 150 | Quantidade vendida: 125
// Produto: Monitor | Preço: 900 | Quantidade vendida: 95

// Produtos com alto volume de vendas (> 100 unidades):
// Mouse
// Teclado

// Total de vendas por produto:
// Notebook: R$ 187500
// Mouse: R$ 18000
// Teclado: R$ 18750
// Monitor: R$ 85500

// Produto mais lucrativo: Notebook com R$ 187500 em vendas.

// -------------------------------------------------------------

// Mostrar todos os produtos (nome, preço, quantidade).
function listarProdutos(lista){
  lista.forEach(produto => console.log(`Produto: ${produto.nome} | Preço: ${produto.preco.toFixed(2)} | Quantidade vendida: ${produto.quantidadeVendida}`));
}

// Filtrar os que venderam mais de 100 unidades e exibir seus nomes.
function filtrarProdutos(lista){
  return lista.filter(produto => produto.quantidadeVendida > 100)
}

// Calcular os totais de venda de cada produto.
function calcularVendaPorProduto(lista){
  return lista.map(produto => ({
    nome: produto.nome,
    totalVenda: produto.preco * produto.quantidadeVendida
  }));
}
// Descobrir o mais lucrativo.

const produtos = [
  { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 },
  { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
  { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
  { nome: 'Monitor', preco: 900, quantidadeVendida: 95 }
];

// fintrando (> 100 unidades)
const maisVendidos = filtrarProdutos(produtos);

// calculando total de vendas
const totalVendas = calcularVendaPorProduto(produtos);

// verificando o mais lucrativo
const maisLucrativo = totalVendas.reduce((max, produto) => produto.totalVenda > max.totalVenda ? produto : max);

// exibindo relatórios
console.log("Relatório de produtos vendidos:");
listarProdutos(produtos);

// exibindo produtos com mais de 100 unidades vendidas
console.log("\nProdutos com alto volume de vendas (> 100 unidades):");
maisVendidos.forEach(produto => console.log(produto.nome));

// exibindo total de vendas por produto
console.log("\nTotal de vendas por produto:");
totalVendas.forEach((produto) => {
  console.log(`${produto.nome}: R$ ${produto.totalVenda.toFixed(2)}`);
});

// exibindo produto mais lucrativo
console.log(`\nProduto mais lucrativo: ${maisLucrativo.nome} com R$ ${maisLucrativo.totalVenda.toFixed(2)} em vendas.`);