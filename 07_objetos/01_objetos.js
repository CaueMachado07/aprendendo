// importando a função print
const { print } = require('../05_funcoes/01_fucoes');

// // o que são objetos?
// // Objetos são estruturas de dados que permitem armazenar coleções de pares chave-valor.
// // Eles são usados para representar entidades do mundo real, onde cada chave (ou propriedade) descreve uma característica ou atributo do objeto, e o valor associado a essa chave pode ser de qualquer tipo de dado, incluindo outros objetos ou funções.
// // Objetos são fundamentais na programação orientada a objetos e são amplamente utilizados em JavaScript para organizar e manipular dados de forma eficiente.
// // Criando um objeto simples

// const pessoa = {
//     nome: 'Cauê',
//     idade: 34,
//     altura: 1.75,
// }

// // adicionando novas propriedades ao objeto
// pessoa.estudante = true; // adicionando uma nova propriedade ao objeto
// pessoa.cursos = ['Node.js', 'Lógica de Programação', 'SQL']; // adicionando um array como propriedade

// // acessando propriedades do objeto
// print(`Nome: ${pessoa.nome}`);
// print(`Idade: ${pessoa.idade}`);
// print(`Altura: ${pessoa.altura}`);
// print(`É estudante? ${pessoa.estudante}`);
// print(`Cursos: ${pessoa.cursos.join(', ')}`); // usando join para exibir o array como string

// // acessando propriedades usando colchetes
// print(`Nome (colchetes): ${pessoa['nome']}`);
// // útil quando a chave é dinâmica ou não é um identificador válido

// // alterando uma propriedade existente
// pessoa.idade = 35;
// print(`Idade atualizada: ${pessoa.idade}`);

// // adcionando um elemento ao array dentro do objeto
// pessoa.cursos.push('JavaScript Avançado');
// print(`Cursos atualizados: ${pessoa.cursos.join(', ')}`);

// // removendo uma propriedade do objeto
// delete pessoa.idade;
// print(`Propriedades do objeto após remoção da idade: ${Object.keys(pessoa).join(', ')}`); // exibindo as chaves restantes do objeto

// //-------------------------------------------------------------------------------------

// // Objetos aninhados
// // Objetos podem conter outros objetos como valores de suas propriedades, permitindo a criação de estruturas de dados mais complexas.
// // Exemplo de objeto aninhado:
// // vamos um objeto livro
// const livro = {
//     tirulo: 'JavaScript para Iniciantes',
//     autor: 'João Silva',
//     anoPublicacao: 2021,
//     paginas: 350,
//     idiomas: ['Português', 'Inglês', 'Espanhol'],
// }

// print(`Título do livro: ${livro.tirulo}`);
// print(`Autor do livro: ${livro.autor}`);

// // adicionando um objeto aninhado para autor
// livro.autor = {
//     nome: 'João Silva',
//     nacionalidade: 'Brasileiro',
//     nascimento: 1980,
// }
// print(`Nome do autor: ${livro.autor.nome}`);
// print(`Nacionalidade do autor: ${livro.autor.nacionalidade}`);

// // Exemplo mais complexo de objeto aninhado:
// const aluno = {
//     nome: 'Maria',
//     idade: 22,
//     endereco: {
//         rua: 'Rua das Flores',
//         numero: 123,
//         cidade: 'São Paulo',
//         estado: 'SP'
//     },
//     cursos: [
//         {
//             nome: 'Matemática',
//             nota: 9.5
//         },
//         {
//             nome: 'História',
//             nota: 8.7
//         }
//     ]
// };
// print(`Nome do aluno: ${aluno.nome}`);
// print(`Cidade do aluno: ${aluno.endereco.cidade}`);
// print(`Nome do primeiro curso: ${aluno.cursos[0].nome}`);
// print(`Nota do segundo curso: ${aluno.cursos[1].nota}`);
// // Neste exemplo, o objeto aluno contém um objeto endereco e um array de objetos cursos, demonstrando como objetos aninhados podem ser usados para representar dados complexos de forma organizada.

// // Uma das principais vantagens de usar colchetes é a possibilidade de utilizar expressões para determinar o nome da propriedade em tempo de execução. Por exemplo, quando o nome da propriedade é armazenado em uma variável, a notação de colchetes torna o acesso possível e eficiente.

// // Além disso, quando o nome da propriedade possui caracteres especiais, espaços ou inicia com números, a notação de colchetes se torna indispensável. Essa abordagem garante que a linguagem interprete o nome corretamente, sem que haja a necessidade de seguir as restrições impostas pela notação de ponto.

// // Embora a notação de colchetes ofereça flexibilidade, é importante utilizá-la com atenção. Ao utilizar expressões, certifique-se de que elas retornem strings válidas correspondentes às propriedades do objeto. Caso contrário, o acesso retornará undefined, o que pode levar a erros em tempo de execução se não houver verificações prévias.

// // Outra dica é misturar o uso das duas notações de maneira estratégica: utilize a notação de ponto para acessos diretos e a notação de colchetes quando houver a necessidade de dinamismo ou quando os nomes de propriedades não seguirem a convenção padrão.

// //-------------------------------------------------------------------------------------

// // Resumo
// // Objetos são estruturas de dados que armazenam pares chave-valor.
// // Eles permitem representar entidades do mundo real com suas características e atributos.
// // Propriedades podem ser acessadas, adicionadas, modificadas e removidas usando a notação de ponto ou colchetes.
// // Objetos podem conter outros objetos e arrays, permitindo a criação de estruturas de dados complexas e organizadas.
// // Objetos são fundamentais na programação orientada a objetos e amplamente utilizados em JavaScript.
// // Eles facilitam a organização e manipulação eficiente de dados.
// // Compreender e utilizar objetos é essencial para o desenvolvimento de aplicações em JavaScript.
// // Eles são a base para muitos conceitos avançados na linguagem, como classes, herança e encapsulamento.

// // Pratique criando e manipulando objetos para fortalecer seu entendimento sobre esse importante conceito de programação.
// //-------------------------------------------------------------------------------------
// // Atividades práticas com objetos em JavaScript

// // 1. Crie um objeto representando um carro, com propriedades como marca, modelo, ano e cor.

// // 2. Adicione uma nova propriedade ao objeto carro chamada "proprietário" e atribua um valor a ela.

// // 3. Acesse e imprima o valor da propriedade "modelo" do objeto carro.

// // 4. Modifique a propriedade "cor" do objeto carro para uma nova cor.

// // 5. Remova a propriedade "ano" do objeto carro.


// // -------------------------------------------------------------------------------------

// // um pouco mais sobre objetos
// const estudante = {
//   nome: 'José Silva',
//   idade: 32,
//   cpf: '12312312312',
//   turma: 'JavaScript'
// };

// // convertendo objeto para JSON
// const estudanteJSON = JSON.stringify(estudante);
// print('Objeto estudante em formato JSON:', estudanteJSON);

// // mstrando o nome do estudante
// print(`Nome do estudante: ${estudante.nome}`);

// // mostrando os 3 primeiros caracteres do CPF
// print(`Início do CPF: ${estudante.cpf.substring(0, 3)}`);

// // usando notação de colchetes
// function exibeInfoEstudante(objEstudante, infoEstudante) {
//     // console.log(objEstudante.infoEstudante); // undefined, pois está tentando acessar a propriedade 'infoEstudante'
//     console.log(objEstudante[infoEstudante]); // acessa a propriedade dinamicamente
// }

// exibeInfoEstudante(estudante, 'nome');
// exibeInfoEstudante(estudante, 'turma');

// ------
// // atribuindo valores e propriedades dinamicamente
// estudante.email = 'jose.silva@email.com';

// console.log(estudante);

// // removendo uma propriedade de objeto
// const objPersonagem = {
//  nome: "Gandalf",
//  classe: "mago",
//  nivel: "20",
//  aliado: {
//    nome: "Saruman",
//    classe: "mago"
//  },
//  status: "desaparecido"
// }
// print('Objeto personagem inicial:', objPersonagem);

// // usando notação de ponto para remover uma propriedade
// delete objPersonagem.status;

// print('Objeto personagem após remoção da propriedade status:', objPersonagem);

// // usando notação de colchetes para remover uma propriedade
// delete objPersonagem['aliado'];

// print('Objeto personagem após remoção da propriedade aliado:', objPersonagem);

// -------------------------------------------------------------------------------------

// // não podemos esquecert que devemos ter cuidado ao copiar objetos
// // pois se fizermos uma cópia direta, estaremos apenas copiando a referência do objeto original
// isso significa que alterações feitas na cópia também afetarão o objeto original.
// // para evitar isso, podemos usar o método Object.assign() ou o operador spread (...) para criar uma cópia superficial do objeto ou uma cópia profunda usando parse e stringify do JSON.
// vejamos um exemplo:
const objetoOriginal = { a: 1, b: 2 };
const objetoCopia = objetoOriginal; // cópia por referência (não recomendado)
const objetoCopia2 = Object.assign({}, objetoOriginal); // cópia superficial usando Object.assign()
const objetoCopia3 = { ...objetoOriginal }; // cópia superficial usando spread operator

objetoCopia.b = 3; // alterando a cópia

console.log('Objeto Original:', objetoOriginal); // { a: 1, b: 2 }
console.log('Objeto Cópia:', objetoCopia); // { a: 1, b: 3 }
console.log('Objeto Cópia2:', objetoCopia2); // { a: 1, b: 2 }
console.log('Objeto Cópia3:', objetoCopia3); // { a: 1, b: 2 }
// para cópia profunda

const objetoParaCopiaProfunda = { a: 1, b: { c: 2 } };
const objetoCopiaProfunda = JSON.parse(JSON.stringify(objetoParaCopiaProfunda));

objetoCopiaProfunda.b.c = 3; // alterando a cópia profunda

console.log('Objeto Original (Profundo):', objetoParaCopiaProfunda); // { a: 1, b: { c: 2 } }
console.log('Objeto Cópia Profunda:', objetoCopiaProfunda); // { a: 1, b: { c: 3 } }
