// importando a função print
const { print } = require('../05_funcoes/01_fucoes');

// vamos trabalhar a funcionalidade chamada destructuring, onde podemos trabalhar partes especificas de objetos e arrays

const pessoa = {
    nome: 'Cauê',
    idade: 34,
    isEstudante: true,
}

// anteriormente vimos que podemos acessar os valores do objeto referenciando a chave junto ao nome do objeto como no exemplo a seguir:
print(pessoa.nome);
print(pessoa.idade);

// agora vamos aplicar os conceitos de destructuring ao objeto pessoa:
const {nome, idade} = pessoa;

print('-> ', nome);
print('-> ', idade);
// aqui, usamos a sintaxe de destructuring para extrair as propriedades nome e idade do objeto pessoa e atribuí-las a variáveis com os mesmos nomes. Agora podemos usar essas variáveis diretamente sem precisar referenciar o objeto pessoa toda vez.

// podemos também renomear as variáveis durante o destructuring:
const {isEstudante: estudante} = pessoa;
print('É estudante? ', estudante);
// aqui, extraímos a propriedade isEstudante do objeto pessoa e a atribuímos a uma nova variável chamada estudante.

// usando destructuring em funções:
function exibirPessoa({nome, idade}) {
    print(`Nome: ${nome}, Idade: ${idade}`);
}
exibirPessoa(pessoa);
// aqui, a função exibirPessoa usa destructuring diretamente no parâmetro para extrair as propriedades nome e idade do objeto passado como argumento.


// aplicando em uma situação realista com node/express
function criarUsuario({nome, idade}) {
    const usuario = {
        nomeUsuario: nome,
        idadeUsuario: idade,
        criadoEm: new Date(),
    };
    return usuario;
}
const novoUsuario = criarUsuario(pessoa);
print('Novo Usuário:', novoUsuario);
// aqui, a função criarUsuario usa destructuring para extrair as propriedades do objeto passado como argumento e criar um novo objeto usuario com essas informações.

// ----------------------------------------------------------------------------------------------------------------

// agora vamos ver como o destructuring funciona com arrays:
const numeros = [10, 20, 30, 40, 50];

// podemos extrair valores específicos do array usando destructuring:
const [primeiro, segundo] = numeros;
print('Primeiro número:', primeiro);
print('Segundo número:', segundo);
// aqui, extraímos os dois primeiros valores do array numeros e os atribuímos às variáveis primeiro e segundo.

// podemos também ignorar valores que não queremos:
const [, , terceiro] = numeros;
print('Terceiro número:', terceiro);
// aqui, ignoramos os dois primeiros valores e extraímos apenas o terceiro valor do array.

// usando destructuring em funções com arrays:
function exibirNumeros([a, b, c]) {
    print(`Números: ${a}, ${b}, ${c}`);
}

exibirNumeros(numeros);
// aqui, a função exibirNumeros usa destructuring diretamente no parâmetro para extrair os três primeiros valores do array passado como argumento.

// aplicando em uma situação realista com node/express
function criarListaDeTarefas([tarefa1, tarefa2, tarefa3]) {
    return {
        tarefas: [tarefa1, tarefa2, tarefa3],
        criadoEm: new Date(),
    };
}
const tarefasArray = ['Estudar JavaScript', 'Praticar Destructuring', 'Construir Projetos'];
const listaDeTarefas = criarListaDeTarefas(tarefasArray);
print('Lista de Tarefas:', listaDeTarefas);
// aqui, a função criarListaDeTarefas usa destructuring para extrair os três primeiros valores do array passado como argumento e criar um novo objeto com essas tarefas.
// ----------------------------------------------------------------------------------------------------------------

// o destructuring é uma funcionalidade poderosa do JavaScript que nos permite extrair valores de objetos e arrays de forma concisa e legível, facilitando o trabalho com dados em nossas aplicações.