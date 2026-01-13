


// // 1 - Crie uma função que receba dois arrays e os concatene em um único array.
// function concatArray(arr1, arr2){
//     return arr1.concat(arr2);
// }

// const { soma } = require("../05_funcoes/01_fucoes");

// const numeros1 = [1, 2, 3];
// const numeros2 = [4, 5, 6];

// const numeros3 = concatArray(numeros1, numeros2);

// console.log(numeros3)


// // 2 - Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const parteNumeros = numeros.slice(3, 8);
// console.log(parteNumeros)


// // 3 - Dado o array frutas contendo frutas que desejamos comprar na feira:
// // Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.
// const cesta = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
// console.log(`Cesta de frutas original: ${cesta}`);

// cesta.splice(2,2, 'kiwi', 'pêssego');
// console.log(`Cesta de frutas alterada: ${cesta}`);


// // 5 - Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.

// // Dicas:
// // comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;
// // você pode resolver usando um for dentro de outro for.
// const matriz = [];

// let valor = 1; // variável para controlar o valor a ser inserido na matriz
// for(let i = 0; i < 3; i++){ // loop para as linhas
//     const linha = [];
//     for(let j = 0; j < 3; j++){ // loop para as colunas
//         linha.push(valor);
//         valor++; // incrementa o valor para o próximo elemento
//     }
//     matriz.push(linha);
// }
// console.log(matriz);
// // imprimindo a matriz no console
// matriz.forEach(linha => console.log(linha));



// // Nosso próximo desafio é calcular a média entre as seguintes notas: 10, 6.5, 8, 7.5. Para isso, usaremos for. Crie um array com essas notas e utilize um loop for para percorrer o array, somando todas as notas. Após o loop, divida a soma total pelo número de notas para obter a média. Imprima a média no console.
// const notas = [10, 6.5, 8, 7.5];
// let soma = 0;

// for ( let i = 0; i < notas.length; i++){
//     soma += notas[i];
// }

// // // soma com reduce()
// // const somaReduce = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

// const media = soma / notas.length;
// console.log(`A média das notas é ${media}.`);


// // calculando médias com for...of
// const notas2 = [10, 8.5, 8, 9.5];

// let soma2 = 0;

// for (let nota of notas2){
//     soma2 += nota; 
// }

// const media2 = soma2 / notas2.length;
// console.log(`A média das notas é ${media2}.`);


// -------------------------------------------------------------------------------
// Resoluções de atividades do módulo 06 - Arrays
// ------------------------------------------------------------------------------

// // Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
// const planetas = ['Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno'];

// for(let planeta of planetas){
//     console.log(planeta);
// }

// ------

// // Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
// function imprimirArray(array){
//     for(let i = 0; i < array.length; i++){
//         console.log(`${i} - ${array[i]}`);
//     }
// }

// const planetas = ['Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno'];
// imprimirArray(planetas);

// ------

// // Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
// function somarArray(array){
//     let soma = 0;
//     for(let numero of array){
//         soma += numero;
//     }
//     return soma;
// }

// const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const soma = somarArray(numeros);

// console.log(`A soma dos elementos do array é ${soma}.`);

// ------

// Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.
// function maiorMenorValor(array){
//     let maior = Math.max(...array);
//     let menor = Math.min(...array);
//     console.log(`o menor número é ${menor} e o maior número é ${maior}`)
// }

// function minMaxValor(array){
//     let menor = array[0];
//     let maior = array[0];

//     for ( let i = 0; i < array.length; i++){
//         if (array[i] < menor){
//             menor = array[i];
//         } else if (array[i] > maior){
//             maior = array[i];
//         }
//     }
//     console.log(`o menor número é ${menor} e o maior número é ${maior}`)
// }

// const numeros2 = [10, 50, 20, 30, 5, 40];
// //maiorMenorValor(numeros2);
// minMaxValor(numeros2)

// ------

// // Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.

// const numeros3 = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
// const pares = [];
// const impares = [];

// for (let numero of numeros3){
//     if (numero % 2 === 0){
//         pares.push(numero);
//     } else {
//         impares.push(numero);
//     }
// }

// console.log(pares);
// console.log(impares);


// ------


// // Crie um programa que calcule a média das notas de três salas de aula diferentes. Cada sala possui um array com as notas dos alunos. Utilize loops para calcular a média de cada sala e imprima o resultado no console.
// const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
// const salaJava = [6, 5, 8, 9, 5, 6];
// const salaPython = [7, 3.5, 8, 9.5];

// function calcularMedia (notas){
//     const somaNotas = notas.reduce((acc, cur) => acc + cur);
//     const mediaSalas = somaNotas / notas.length;

//     return mediaSalas;
// }

// const mediaJS = calcularMedia(salaJS);
// const mediaJava = calcularMedia(salaJava);
// const mediaPython = calcularMedia(salaPython);

// console.log(`Média da salaJS: ${mediaJS}`);
// console.log(`Média da salaJava: ${mediaJava}`);
// console.log(`Média da salaPython: ${mediaPython}`);

// ------

// // Crie um programa que receba um array de nomes e utilize um loop para criar um novo array contendo apenas os nomes que começam com a letra 'A'. Imprima o novo array no console.
// const nomes = ['Ana', 'Bruno', 'Amanda', 'Carlos', 'Aline', 'Pedro', 'Alice'];
// const nomesComA = [];
// for ( let nome of nomes){
//     if (nome.charAt(0).toUpperCase() === 'A'){
//         nomesComA.push(nome);
//     }
// }
// console.log(nomesComA);

// ------

// // Utilize o map() para multiplicar cada um dos valores nesse array por 10 e retornar um novo array com os resultados. Para isso lembre de usar uma função callback.


// const arrayNums = [1, 2, 3, 4]

// const arrayMultiplo = arrayNums.map(numero => numero * 10);

// console.log(arrayMultiplo)

// ------

// // 1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

// const planetas = ['Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno'];

// planetas.forEach((planeta, indice) => {
//     console.log(`Índice ${indice}: ${planeta}`);
// });


// ------

// // 2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.
// function multiplicar (num){
//     return num * 10;
// }

// function executaOperacaoEmArray (arr, fun) {
//     return arr.map(fun);
// }

// const nums = [ 2, 2, 3, 4];

// console.log(executaOperacaoEmArray(nums, multiplicar))


// ------

// // 3 - Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".
// function verificarNum ( arr, num ){
//     for ( let i = 0; i < arr.length; i++){
//         if(arr[i] === num){
//             return i;
//         }
//     }
//     return -1;
// }

// // com forEach
// function verificarNumForEach ( arr, num ){
//     let indice = -1;
//     arr.forEach((elemento, i) => {
//         if (elemento === num){
//             indice = i;
//         }
//     });
//     return indice;
// }

// const nums = [ 2, 2, 3, 4];

// console.log(verificarNum(nums, 2));
// console.log(verificarNumForEach(nums, 2));


// ------

// // 4 - Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.
// // Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.

// function buscarAluno (arr, nome){
//     return arr.find(aluno => aluno === nome) 
//         ? `${nome} foi encontrado(a)`
//         : `${nome} não encontrado(a)`;
// }

// const nomesTurmaA = [
//   'João Silva',
//   'Maria Santos',
//   'Pedro Almeida'
// ];

// const nomesTurmaB = [
//   'Carlos Oliveira',
//   'Ana Souza',
//   'Lucas Fernandes'
// ];

// const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);

// const aluno = buscarAluno(todasAsTurmas, 'Ana Souza');
// console.log(aluno);


// ------

// // 5 - Considere um array de números inteiros.

// // Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. 

// // Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.

// const numeros = [6, 9, 12, 15, 18, 21];

// console.log('Elementos do array multiplicados por 3:');

// numeros.forEach(numero => console.log(numero * 3));

// const indiceElemento = numeros.findIndex(numero => numero === 18);

// const mensagem = indiceElemento !== -1
//     ? `O índice do número 18 é: ${indiceElemento}`
//     : 'Número 18 não encontrado no array.';

// console.log(mensagem);

// ------------------------------------------------------------------------------------------

// // 1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.
// // Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).

// function unirArrays(...arrays) {
//     return [].concat(...arrays);
// }
// // exemplo de uso
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = [7, 8, 9];

// const arrayUnido = unirArrays(array1, array2, array3);
// console.log(`Array unido: ${arrayUnido}`); // Array unido: 1,2,3,4,5,6,7,8,9


// // ------

// // 2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.
// const valores = [ 1, 2, 3, 4, 5];
// const somaValores = valores.reduce((acc , valor) => acc + valor);

// console.log(somaValores)


// // ------

// // 3 - Considere duas listas de cores:

// // const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
// // const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

// // Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.
// const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
// const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

// const coresLista3 =  [...new Set([...coresLista1, ...coresLista2])];
// console.log(coresLista3)

// // ------

// // 4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.
// function numerosPares (arr){
//     return arr.filter((numero) => numero % 2 === 0);
// }

// const numeros = [ 1, 2, 3, 4, 5, 6];
// console.log(numerosPares(numeros))


// // ------

// // 5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.
// function multiplosDeTres (arr){
//     return arr.filter((numero) => numero % 3 === 0 && numero > 5);
// }
// const numeros = [ 1, 2, 3, 4, 5, 6, 9, 12, 40, 15, 21, 30];

// console.log(multiplosDeTres(numeros))


// // ------

// // 6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.

// function somarValores(arr){
//     return arr.reduce((acc , numero) => acc + numero);
// }

// const numeros = [ 1, 2, 3, 4, 5];
// console.log(somarValores(numeros));
