
// arrays são listas ordenadas de valores

// represetados por colchetes [] e separados por vírgulas ,

// podem armazenar qualquer tipo de dado, incluindo números, strings, objetos, outros arrays, etc.

// seus elementos são acessados por índices, que começam em 0

// ---- exemplo de metodos comuns de arrays ----

// metodos que modificam o array original:
// push(): adiciona um ou mais elementos ao final do array
// pop(): remove o último elemento do array
// shift(): remove o primeiro elemento do array
// unshift(): adiciona um ou mais elementos no início do array

// vamos criar um array de notas e calcular a média
const notas = [7, 8, 9];

// adicionando mais uma nota ao array
notas.push(6); // notas agora é [7, 8, 9, 6]

// calculando a média
let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(`Média: ${media}`); // Média: 7.5

// remove o primeiro elemento (7), notas agora é [8, 9, 6]
notas.shift(); 
console.log(notas); // [8, 9, 6]

// remove o último elemento (6), notas agora é [8, 9]
notas.pop(); 
console.log(notas); // [8, 9]

// adiciona dois elementos no início do array
notas.unshift(10);
notas.unshift(5); 
console.log(notas); // [5, 10, 8, 9]


// procurando em uma lista com indexOf()
// crie uma função que receba como argumento o nome de um estudante e retorne a sua respectiva média ou uma mensagem de erro caso o estudante não esteja cadastrado na lista.

// a seguir temos duas listas: uma com os nomes dos estudantes e outra com as respectivas médias.
// vamos realizar a busca do nome do estudante na lista de nomes e, caso encontrado, pegar o índice para buscar a média na lista de médias.

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibirMediaAluno(aluno){
    if(lista[0].includes(aluno)){ // se na lista, dentro do índice 0 (alunos) incluir o nome do aluno 
        const indice = lista[0].indexOf(aluno); // pega o índice do aluno na lista e armazena na variável indice
        const media = lista[1][indice]; // pega a média do aluno dentro da lista de médias (índice 1) usando o índice encontrado acima
        console.log(`${aluno} tem média ${media}`);
    } else {
        console.log('Aluno não existe na lista.')
    }
}

exibirMediaAluno('Caio'); // Caio tem média 7.5
exibirMediaAluno('Pedro'); // Aluno não existe na lista.

// observe que há uma certa complexidade em manter duas listas separadas (nomes e médias) e garantir que os índices correspondam corretamente.
// uma outra abordagem pode ser feita através da desestruturação do array de listas para facilitar o acesso aos dados.

// a seguir, o mesmo exemplo acima, mas usando desestruturação para separar as listas de alunos e médias:

const alunos2 = ['João', 'Juliana', 'Caio', 'Ana'];
const medias2 = [10, 8, 7.5, 9];

const lista2 = [alunos2, medias2];

function exibirMediaAluno2(aluno){
    if(lista2[0].includes(aluno)){ // se na lista, dentro do índice 0 (alunos) incluir o nome do aluno 
        const [nomes, medias] = lista2; // desestruturação do array de listas
        const indice = nomes.indexOf(aluno); // pega o índice do aluno na lista e armazena na variável indice
        const media = medias[indice]; // pega a média do aluno dentro da lista de médias (índice 1) usando o índice encontrado acima
        console.log(`${aluno} tem média ${media}`);
    } else {
        console.log('Aluno não existe na lista.')
    }
}
// observe que o código acima funciona da mesma forma que o exemplo anterior, mas a desestruturação torna o acesso aos dados mais claro e legível.
exibirMediaAluno2('Juliana'); // Juliana tem média 8
exibirMediaAluno2('Marcos'); // Aluno não existe na lista.


// agora, vamos usar a desestruturação diretamente na declaração da lista de listas:

const lista3 = [alunos, medias];
const [nomesEstudantes, mediasEstudantes] = lista3; // desestruturação do array de listas

function exibirMediaAluno3(aluno){
    if(nomesEstudantes.includes(aluno)){
        const indice = nomesEstudantes.indexOf(aluno);
        const media = mediasEstudantes[indice];
        console.log(`${aluno} tem média ${media}`);
    } else {
        console.log('Aluno não existe na lista.')
    }
}

exibirMediaAluno3('Ana'); // Ana tem média 9
exibirMediaAluno3('Marcos'); // Aluno não existe na lista.

// essa abordagem torna o código mais legível e fácil de entender, pois cada lista tem um nome claro e específico.
// além disso, reduz a complexidade de acessar os dados dentro do array de listas.
// lembre-se de que a desestruturação é uma funcionalidade poderosa do JavaScript que pode ser usada para extrair valores de arrays e objetos de forma concisa e clara.
// arrays multidimensionais são arrays que contêm outros arrays como elementos, permitindo a criação de estruturas de dados mais complexas, como matrizes ou tabelas.

// ainda sobre destructuring (Desestruturação) em arrays
// o código a baixo:
let num1 = 1;
let num2 = 2;

// pode ser substituído por:
let [n1, n2] = [1, 2];
// veja que os valores 1 e 2 são atribuídos às variáveis n1 e n2 respectivamente, de forma mais concisa usando destructuring.

// observe também que podemos ignorar valores durante a desestruturação:
let [p, , q] = [10, 20, 30];
console.log(p); // 10
console.log(q); // 30
// veja que o valor 20 foi ignorado ao deixar um espaço vazio entre as vírgulas.
// isso é útil quando queremos apenas alguns valores de um array e não todos.

// também podemos usar o operador rest (...) para coletar o restante dos valores em um novo array:
let [x, y, ...z] = [10, 20, 30, 40, 50];
console.log(x); // 10
console.log(y); // 20
console.log(z); // [30, 40, 50]
// veja que o operador rest (...) é usado para coletar o restante dos valores do array em uma nova variável z como um array.

// destructuring também pode ser usado para trocar valores entre variáveis sem a necessidade de uma variável temporária:
let a = 5;
let b = 10;
console.log(`a: ${a}, b: ${b}`); // a: 5, b: 10

// trocando os valores usando destructuring
[a, b] = [b, a]; // agora a é 10 e b é 5
console.log(`a: ${a}, b: ${b}`); // a: 10, b: 5
// essa técnica é útil para simplificar o código e melhorar a legibilidade ao lidar com múltiplas variáveis.

// também é possivel estabelecer valores padrão durante a desestruturação:
let [m = 1, n = 2, o = 3] = [10];
console.log(m); // 10
console.log(n); // 2
console.log(o); // 3
// veja que m recebe o valor 10 do array, enquanto n e o recebem os valores padrão 2 e 3 respectivamente, pois não há valores suficientes no array para atribuir a essas variáveis.
// isso é útil para garantir que as variáveis tenham valores válidos mesmo quando o array original não fornece valores suficientes.



// -------------------------------------------------------------------------------------------------------------------

// atividades práticas sobre arrays
// veja os arquivos atividades_01.js e atividades_02.js para as atividades práticas sobre array
// -------------------------------------------------------------------------------------------------------------------

// revisando alguns métodos de arrays em JavaScript
// veja o arquivo execicios_01.js para exercícios práticos sobre arrays
// -------------------------------------------------------------------------------------------------------------------

