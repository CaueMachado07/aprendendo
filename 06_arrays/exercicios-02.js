
// importando a função print do arquivo externo
const { print } = require('../05_funcoes/01_fucoes');


// Crie um array utilizando a sintaxe com colchetes ([]) e inicialize-o com valores variados.
let novoArray = [10, 'texto', true, null, 42.5];
print(`Array criado: ${novoArray}`);



// Acesse elementos específicos do array usando índices e a propriedade .length para identificar a última posição.

// acessando elemento pelo indice
print(`Elemento do indice 1: ${novoArray[1]} | É do tipo: ${typeof(novoArray[1])} `)

// acessando o ultimo elemento usando a propriedade .length
print(`O último elemento do array é: ${novoArray[novoArray.length-1]}`)


// Insira novos itens com o método push e remova elementos utilizando o método splice, especificando posição e quantidade.
novoArray.push('Cauê', 'Corinthians');
print(`elementos adicionados ao array. ${novoArray}`)

// usando o splice para remover dois elementos a partir do indice 2
novoArray.splice(2,2);
print(novoArray)




// Implemente iterações com for, forEach e for...of, além de aplicar os métodos filter e map para transformar e filtrar os dados.
for (let i = 0; i < novoArray.length; i++){
    print(`for loop - índice ${i}: ${novoArray[i]}`);
}

novoArray.forEach((item, index) => print(`forEach - índice ${index}: ${item}`));

for (const item of novoArray){
    print(`for...of: ${item}`);
}