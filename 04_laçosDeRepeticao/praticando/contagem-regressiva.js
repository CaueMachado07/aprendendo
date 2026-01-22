// Você é uma pessoa desenvolvedora de interface em uma startup de tecnologia aeroespacial e precisa criar uma contagem regressiva automática para o painel de lançamento. A contagem deve começar de 10 até 0, exibindo “Lançar!” ao final.

// Crie um programa que conte de 10 até 0 e exiba a mensagem “Lançar!” ao final.

// Saída esperada:
// 10  
// 9  
// 8  
// 7  
// 6  
// 5  
// 4  
// 3  
// 2  
// 1  
// 0  
// Lançar!

const numeroInicial = 10;

for (let contador = numeroInicial; contador >= 0; contador -- ){
    if (contador === 0) {
        console.log(contador);
        console.log('Lançar!')
    } else {
        console.log(contador);
    }
}