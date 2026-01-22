// Você está criando um sistema de cadastro em que a pessoa usuária pode cadastrar quantos nomes quiser, um por vez. O processo deve continuar até que seja encontrado a palavra "fim" (com letras minúsculas).

// Crie um programa que com base em uma entrada pré-definida de nomes, exiba cada um deles, e encerre somente quando encontrar o valor "fim".

// Exemplo de entrada: const entradas = ["Ana", "Bruno", "Carla", "fim", "Daniel"];

// Saída esperada:
// Nome: Ana
// Nome: Bruno
// Nome: Carla

const entradas = ["Ana", "Bruno", "Carla", "fim", "Daniel"];

console.log('Usando um laço for');
for ( let i = 0; i < entradas.length; i++){
    if (entradas[i] !== "fim"){
        console.log(entradas[i]);
    } else {
        break;
    }
}

console.log('\n--------------------------------------------------------------------------------\n');

console.log('Usando um laço while');

let posicao = 0;

while(entradas[posicao] !== 'fim'){
    console.log(entradas[posicao]);
    posicao ++;
}