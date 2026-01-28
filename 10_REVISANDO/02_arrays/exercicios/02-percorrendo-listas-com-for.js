// 13 Percorrendo listas com for

// Você está criando um sistema para controlar os gastos mensais da sua casa. Os valores das despesas estão em um array, e você precisa somar todos esses valores para saber o total gasto no mês.

// Escreva um programa que:

// Crie um array com os valores das despesas.
// Use um loop for para somar os valores.
// Exiba o total gasto.

// Exemplo de entrada:
// const despesas = [120, 80, 45.5, 200, 60];

// Saída esperada:
// Total de despesas: R$ 505.5

// função usando laço for
function somaFor(despesas){
    let total = 0;
    for ( let i = 0; i < despesas.length; i++){
        total += despesas[i];
    }
    return total.toFixed(2);
}

const despesas = [120, 80, 45.5, 200, 60];
console.log('Soma usando um laço for:');
console.log(somaFor(despesas));
console.log('\n');

// função usando for-of
function somaForOf(despesas){
    let total = 0;
    for(let despesa of despesas){
        total += despesa;
    }
    return total.toFixed(2);
}


console.log('Soma usando um laço for-of:');
console.log(somaForOf(despesas));
console.log('\n');

// função usando forEach
function somaForEach(despesas){
    let total = 0;
    despesas.forEach(despesa => total += despesa);
    return total.toFixed(2)
}
console.log('Soma usando um laço forEach:');
console.log(somaForEach(despesas));
console.log('\n');

// função usando reduce()
function somaReduce (despesas){
    return despesas.reduce((total, despesa) => total + despesa, 0 ).toFixed(2);
}
console.log('Soma usando o método reduce():');
console.log(somaReduce(despesas));
console.log('\n');

