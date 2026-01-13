// importando a função print do arquivo 01_fucoes.js
// Ao acessar arquivos em pastas diferentes, usamos ../ para subir um nível na hierarquia de pastas.
const { print } = require('../05_funcoes/01_fucoes');

// objetivo deste arquivo é demonstrar alguns dos principais métodos disponíveis para arrays em JavaScript.
// o que são arrays e como utilizá-los com métodos embutidos.
// o quem são arrays?
// Arrays são estruturas de dados que armazenam uma coleção de elementos em uma única variável.
// Eles permitem armazenar múltiplos valores, que podem ser de diferentes tipos de dados, como números, strings, objetos, etc.
// Cada elemento em um array é acessível através de um índice numérico, começando do zero.
// Arrays são amplamente utilizados em programação para organizar e manipular conjuntos de dados de forma eficiente.

// Metodos de arrays
// Arrays em JavaScript possuem diversos métodos embutidos que facilitam a manipulação e o gerenciamento dos dados armazenados neles.
// Aqui estão alguns dos métodos mais comuns:
// listar os métodos mais comuns em arrays

const frutas = ['maçã', 'banana', 'laranja', 'uva'];
print(`Array inicial de frutas: ${frutas}`);

const numeros = [1,2,3,4,5,6,7,8,9,10];
print(`Array inicial de números: ${numeros}`);

// Exemplo de uso de alguns métodos:

// push(): Adiciona um ou mais elementos ao final do array.
frutas.push('manga');
print(`Após push: ${frutas}`);

numeros.push(11, 12);
print(`Após push: ${numeros}`);

// pop(): Remove o último elemento do array e o retorna.
const ultimaFruta = frutas.pop(); // estamos armazenando o valor removido em uma variável
print(`Após pop: ${frutas}`);
print(`Fruta removida: ${ultimaFruta}`);


// shift(): Remove o primeiro elemento do array e o retorna.
const primeiraFruta = frutas.shift(); // armazenando o valor removido em uma variável
print(`Após shift: ${frutas}`);
print(`Fruta removida: ${primeiraFruta}`); // maçã


// unshift(): Adiciona um ou mais elementos ao início do array.
frutas.unshift('abacaxi');
print(`Após unshift: ${frutas}`); // ['abacaxi', 'banana', 'laranja', 'uva']


// indexOf(): Retorna o índice da primeira ocorrência de um elemento no array, ou -1 se não for encontrado.
const indiceLaranja = frutas.indexOf('laranja');
print(`Índice da laranja: ${indiceLaranja}`); // 2


// includes(): Verifica se um elemento existe no array, retornando true ou false.
const temUva = frutas.includes('uva');
print(`O array de frutas inclui uva? ${temUva}`); // true


// slice(): Retorna uma cópia de uma parte do array, especificada por índices de início e fim.
const algumasFrutas = frutas.slice(1, 3); // do índice 1 ao 3 (não inclui o índice 3)
print(`Algumas frutas (slice): ${algumasFrutas}`); // ['banana', 'laranja']
// lembrando que não inclui o elemento do índice final


// splice(): Adiciona ou remove elementos em uma posição específica do array.
frutas.splice(1, 1, 'kiwi', 'melancia'); // a partir do índice 1, remove 1 elemento e adiciona 'kiwi' e 'melancia'
print(`Após splice: ${frutas}`); // ['abacaxi', 'kiwi', 'melancia', 'laranja', 'uva']
// O primeiro parâmetro é o índice onde começar a modificar o array.
// O segundo parâmetro é o número de elementos a serem removidos.
// Os parâmetros subsequentes são os elementos a serem adicionados ao array.

// caso não queira remover nenhum elemento, passe 0 como segundo parâmetro.
frutas.splice(2, 0, 'pêssego'); // adiciona 'pêssego' na posição 2 sem remover nada
print(`Após splice sem remoção: ${frutas}`); // ['abacaxi', 'kiwi', 'pêssego', 'melancia', 'laranja', 'uva']


// forEach(): Executa uma função para cada elemento do array.
print('Usando forEach para listar frutas:');
frutas.forEach((fruta, indice) => {
    print(`Fruta no índice ${indice}: ${fruta}`);
});


// map(): Cria um novo array com os resultados da aplicação de uma função a cada elemento do array.
const numerosDobrados = numeros.map(num => num * 2);
print(`Números dobrados (map): ${numerosDobrados}`); // [2,4,6,8,10,12,14,16,18,20,22,24]

// usando map para transformar um array de strings em um array de seus comprimentos
const comprimentosFrutas = frutas.map(fruta => fruta.length);
print(`Comprimentos das frutas (map): ${comprimentosFrutas}`); // [8,4,6,9,7,3]

// usando map para atualizar notas de alunos adicionando 1 ponto extra a cada nota
const notas = [7, 8.5, 6, 9, 5.5];
const notasAtualizadas = notas.map(nota => Math.min(nota + 1, 10)); // garantindo que a nota máxima seja 10
print(`Notas atualizadas (map): ${notasAtualizadas}`); // [8,9.5,7,10,6.5]

// o mesmo exemplo usando operador ternário
const notasAtualizadasTernario = notas.map(nota => (nota + 1 > 10 ? 10 : nota + 1));
print(`Notas atualizadas com ternário (map): ${notasAtualizadasTernario}`); // [8,9.5,7,10,6.5]



// filter(): Cria um novo array com todos os elementos que passam em um teste especificado por uma função.
const numerosPares = numeros.filter(num => num % 2 === 0);
print(`Números pares (filter): ${numerosPares}`); // [2,4,6,8,10,12]

// sintaxe: array.filter((elemento, indice, array) => { ... });
// os parametros são opcionais:
// elemento: o elemento atual sendo processado no array.
// indice: o índice do elemento atual sendo processado no array.
// array: o array original que está sendo percorrido.

const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const alunosAprovados = alunos.filter(( _, indice) => medias[indice] >= 7); // usando _ para indicar que o primeiro parâmetro não será usado
print(`Alunos aprovados (filter): ${alunosAprovados}`); // ['Ana', 'Maria', 'Mauro']


// usando o finder() para encontrar o primeiro número maior que 5
const primeiroMaiorQueCinco = numeros.find(num => num > 5);
print(`Primeiro número maior que 5 (find): ${primeiroMaiorQueCinco}`); // 6

// usando find() para encontrar um nome específico em um array de nomes
const nomes = ['João Silva', 'Maria Souza', 'Pedro Santos', 'Ana Oliveira'];
const nomeProcurado = 'Pedro Santos';
const encontrado = nomes.find(nome => nome === nomeProcurado);
print(`Nome encontrado (find): ${encontrado}`); // 'Pedro Santos'

// exemplo acima exibindo o nome no console, caso não encontrado exibe mensagem de aviso
if (encontrado) {
    print(`Nome encontrado: ${encontrado}`);
} else {
    print('Nome não encontrado.');
}


// reduce(): Aplica uma função a um acumulador e a cada elemento do array (da esquerda para a direita) para reduzi-lo a um único valor.
// sintaxe: array.reduce((acumulador, valorAtual) => { ... }, valorInicial);
const somaTotal = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
print(`Soma total dos números (reduce): ${somaTotal}`); // 66
// O valor inicial do acumulador é 0.
// A função soma cada valor do array ao acumulador.
// No final, retorna a soma total dos números no array.

// como funciona o reduce passo a passo em divesas operações:
// 1. Inicialmente, o acumulador é 0.
// 2. O primeiro valor (1) é adicionado ao acumulador: 0 + 1 = 1
// 3. O segundo valor (2) é adicionado ao acumulador: 1 + 2 = 3
// 4. O terceiro valor (3) é adicionado ao acumulador: 3 + 3 = 6
// ...
// 11. O décimo valor (10) é adicionado ao acumulador: 45 + 10 = 55
// No final, o reduce retorna 55, que é a soma de todos os números no array.
// ou seja, o reduce "reduz" o array a um único valor executando a função fornecida em cada elemento.


// concat(): Junta dois ou mais arrays e retorna um novo array.
const maisFrutas = ['pera', 'cereja'];
const todasFrutas = frutas.concat(maisFrutas);
print(`Todas as frutas (concat): ${todasFrutas}`); // ['abacaxi', 'kiwi', 'pêssego', 'melancia', 'laranja', 'uva', 'pera', 'cereja']

//

// sort(): Ordena os elementos do array in place e retorna o array.
// reverse(): Inverte a ordem dos elementos do array in place.
// join(): Junta todos os elementos do array em uma string, separados por um separador especificado.
// Esses métodos são amplamente utilizados para manipular arrays em JavaScript e tornam o trabalho com coleções de dados muito mais fácil e eficiente.