// 12 Acessando e modificando elementos de um array

// Imagine que você está desenvolvendo um sistema para controlar uma lista de compras. O primeiro passo é permitir que a pessoa usuária acesse e altere os itens dessa lista.

// Escreva um programa que:

// Crie um array com os itens iniciais da lista de compras.
// Acesse e exiba o segundo item da lista.
// Modifique o último item da lista para um novo valor.

// Exemplo de entrada:
// const listaDeCompras = ['arroz', 'feijão', 'macarrão', 'tomate'];

// Saída esperada:
// Segundo item da lista: feijão
// Lista após modificação: ['arroz', 'feijão', 'macarrão', 'fruta']

// Crie um array com os itens iniciais da lista de compras.
const listaDeCompras = ['arroz', 'feijão', 'macarrão', 'tomate'];
console.log(`Lista de compras: ${listaDeCompras}`);

// Acesse e exiba o segundo item da lista.
console.log(`Segundo item da lista: ${listaDeCompras[1]}`);

// Modifique o último item da lista para um novo valor.
listaDeCompras[listaDeCompras.length - 1] = 'fruta';
console.log(`Lista após modificação: ${listaDeCompras}`);