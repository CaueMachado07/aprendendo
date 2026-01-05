// 1. Destructuring em objetos
// Crie um objeto com nome, idade e email. Use destructuring para extrair essas informações em variáveis separadas.
const pessoa = {
    nome: 'Cauê Machado',
    idade: 30,
    email: 'caue.machado@email.com'
};

const { nome, idade, email } = pessoa

console.log('Nome: ', nome);
console.log('Idade: ', idade);
console.log('E-mail: ', email);


// 2. Destructuring em arrays
// Crie um array com 3 linguagens de programação. Use destructuring para criar variáveis ling1, ling2 e ling3.
const linguagens = ['JavaScript', 'Python', 'Ruby'];

const [ling1, ling2, ling3] = linguagens;

console.log('Linguagem 1: ', ling1);
console.log('Linguagem 2: ', ling2);
console.log('Linguagem 3: ', ling3);



// 3. Rest operator em função
// Crie uma função que receba um número qualquer de argumentos e retorne a soma de todos. Use o operador rest (...).

// criando uma função para verificar se todos os argumentos são números
function isNumber(...args){
    for (const arg of args){
        if (typeof arg !== 'number'){
            return false;
        }
    }
    return true;
}
// função para somar todos os argumentos
function somarTudo (...args){
    if (isNumber(...args)){
        return args.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    }
    return 'algum dos argumentos não é um número';
}

console.log(somarTudo(1, 2, 3, 4, 5)); // 15



// 4. Spread operator com arrays
// Crie dois arrays de frutas e combine-os usando o operador spread.
const frutas1 = ['uva', 'laranja', 'melancia'];
const frutas2 = ['limão', 'maçã', 'jaboticaba'];

const cesta = [...frutas1, ...frutas2];
console.log(cesta);



// 5. Spread operator com objetos
// Crie dois objetos: um com nome e outro com idade. Combine-os em um terceiro objeto usando spread.
const nome2 = {nome: 'Cauê'};
const idade2 = {idade: 32};

const pessoa2 = {...nome2, ...idade2};
console.log(pessoa2);



// 6. Função com parâmetro default
// Crie uma função que recebe um nome e imprime "Olá, [nome]". Se o nome não for passado, use "visitante" como valor padrão.
function cumprimentar(nome = "visitante") {
    console.log(`Olá, ${nome}`);
}

cumprimentar("Cauê");
cumprimentar();



// 7. Trabalhando com datas
// Crie uma variável com a data atual e exiba o dia, mês e ano formatados.
const dataAtual = new Date();
console.log(dataAtual)

console.log('Data formatada em pt-BR: ', dataAtual.toLocaleDateString('pt-BR'))



// 8. Modularização com export/import
// Crie uma função simples chamada somar(a, b) e exporte-a como módulo (modo CommonJS ou ES Modules, dependendo do ambiente).

// função no padrão ES Modules
export function somar(a, b) {
    return a + b;
}
// pode ser importada em outro arquivo usando:
// import { somar } from './caminho/do/arquivo.js';



// 9. Classe com construtor
// Crie uma classe Livro com propriedades titulo e autor. Crie dois objetos dessa classe.
class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
}

const livro1 = new Livro('JavaScript Moderno', 'Cauê Machado');
const livro2 = new Livro('Json para iniciantes', 'Cauê Machado');
console.log(livro1);
console.log(livro2);

// 10. Método dentro da classe
// Adicione um método descrever() à classe Livro que retorna uma string com as informações do livro.
Livro.prototype.descrever = function () {
  return `${this.titulo} foi escrito por ${this.autor}.`
}

console.log(livro1.descrever())
