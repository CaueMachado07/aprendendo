

// sintaxe basica de um objeto
// um objeto é uma coleção de pares chave-valor
// onde cada chave é uma string (ou símbolo) e o valor pode ser de qualquer tipo
// exemplo de um objeto simples
const pessoa = {
    nome: 'Cauê',
    idade: 30,
    profissao: 'Desenvolvedor'
};

// objetos podem conter outros objetos, arrays, funções, etc.
// exemplo de um objeto mais complexo
const empresa = {
    nome: 'Tech Solutions',
    endereco: {
        rua: 'Rua das Flores',
        numero: 123,
        cidade: 'São Paulo'
    },
    funcionarios: [
        { nome: 'Ana', cargo: 'Gerente' },
        { nome: 'Carlos', cargo: 'Desenvolvedor' }
    ]
};


// notação de ponto vs notação de colchetes
// notação de ponto é usada quando a chave é um identificador válido
console.log(pessoa.nome); // Cauê
// notação de colchetes é usada quando a chave é uma string dinâmica ou inválida como identificador
const chave = 'idade';
console.log(pessoa[chave]); // 30
// também é útil para chaves com espaços ou caracteres especiais
const objetoEspecial = {
    'chave com espaço': 'valor especial'
};
console.log(objetoEspecial['chave com espaço']); // valor especial

// deletando propriedades de um objeto
delete pessoa.idade;
console.log(pessoa); // { nome: 'Cauê', profissao: 'Desenvolvedor' }

// iterando sobre as propriedades de um objeto
// usando for...in padrão para objetos, dieferente do for...of usado em arrays
for (const chave in empresa) {
    console.log(`${chave}: ${empresa[chave]}`);
}


// metodos internos de objetos
// um método é uma função associada a um objeto
const calculadora = {
    somar: function(a, b) {
        return a + b;
    },
    subtrair: function(a, b) {
        return a - b;
    }
};
console.log(calculadora.somar(5, 3)); // 8
console.log(calculadora.subtrair(5, 3)); // 2

// métodos podem acessar outras propriedades do objeto usando 'this'
const contador = {
    valor: 0,
    // pode ser declarada como function
    incrementar: function() {
        this.valor++;
    },
    // ou como método abreviado
    decrementar() {
        this.valor--;
    }
};
// veja, o this referencia o próprio objeto, sem ele a função do metodo não reconhece a váriavel valor no contexto do objeto
// 

console.log(contador.valor); // 0
contador.incrementar();
console.log(contador.valor); // 1
contador.decrementar();
console.log(contador.valor); // 0

// objetos nativos do JavaScript
const dataAtual = new Date();
console.log(dataAtual.toDateString()); // ex: "Mon Jun 10 2024"

const texto = "Olá, mundo!";
console.log(texto.toUpperCase()); // "OLÁ, MUNDO!"

const numeros = [1, 2, 3, 4, 5];
console.log(numeros.map(n => n * 2)); // [2, 4, 6, 8, 10]

// metodos de objetos
// object.keys(), object.values(), object.entries()
const produto = {
    nome: 'Notebook',
    preco: 2500,
    estoque: 15
};
console.log(Object.keys(produto)); // ['nome', 'preco', 'estoque']
console.log(Object.values(produto)); // ['Notebook', 2500, 15]
console.log(Object.entries(produto)); // [['nome', 'Notebook'], ['preco', 2500], ['estoque', 15]]
// esses métodos são úteis para manipular e iterar sobre as propriedades de objetos
//


// outros exemplos de objetos nativos incluem Math, JSON, RegExp, entre outros.

const user = {
    nome: 'Cauê',
    nascimento: '1991-08-01',
    cpf: '23445667889',
    pontuacao: 4576,
    trofeus: ['speedrunner', 'indie']
};

// vamos criar um método para o objeto user que calcula a idade com base na data de nascimento
user.calcularIdade = function() {
    const hoje = new Date(); // data atual
    const nascimento = new Date(this.nascimento); // data de nascimento
    let idade = hoje.getFullYear() - nascimento.getFullYear(); // diferença de anos
    const mes = hoje.getMonth() - nascimento.getMonth(); // diferença de meses
    // ajusta a idade se o aniversário ainda não ocorreu este ano
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    return idade;
};
console.log(`Idade de ${user.nome}: ${user.calcularIdade()} anos`); // Idade de Cauê: 34 anos (em 2026)