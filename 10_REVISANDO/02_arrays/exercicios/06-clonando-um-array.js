// 17 Clonando um array

// Você está desenvolvendo um sistema de pedidos online. Em certo momento, o sistema precisa criar uma cópia da lista de pedidos para simular alterações, sem modificar o array original. Escreva um programa que:

// Crie um array com alguns pedidos.
// Faça uma cópia do array.
// Adicione um novo item apenas na cópia.
// Exiba os dois arrays para mostrar que o original não foi alterado.

// Exemplo de entrada:
// const pedidos = ['camiseta', 'calça', 'tênis'];

// Saída esperada:
// Array original: ['camiseta', 'calça', 'tênis']
// Array copiado: ['camiseta', 'calça', 'tênis', 'boné']




// array inicial
const pedidos = ['camiseta', 'calça', 'tênis'];

// copiando o array com spread
const pedidos2 = [...pedidos];

// copiando o array com slice()
const pedidos3 = pedidos.slice();

// adicionando um novo intem ao array copiado com spread
pedidos2.push('boné');

// adicionando um novo intem ao array copiado com slice()
pedidos3.push('óculos');

// exibindo array original
console.log('Array original: ', pedidos);

// exibindo array copiado com spread
console.log('Array copiado com spread: ', pedidos2);

// exibindo array copiado com slice()
console.log('Array copiado com slice(): ', pedidos3);