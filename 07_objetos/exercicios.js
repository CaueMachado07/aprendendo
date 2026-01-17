// // Função para imprimir texto no console
// function print(...args) { // usando rest parameter para aceitar múltiplos argumentos
//     console.log(...args);
// };

// // 1. Criando um objeto pessoal
// // Crie um objeto com seu nome, idade e profissão.
// const pessoa = {
//     nome: 'Cauê',
//     idade: 34,
//     profissao: 'Técnico de Redes',
// }

// print('Objeto pessoa criado.');
// print(pessoa);


// // 2. Acessando propriedades
// // Acesse e exiba o valor da propriedade "nome" no console.
// print(`Chave: nome | Valor: ${pessoa.nome}`);


// // 3. Atualizando valores
// // Modifique a propriedade "idade" com um novo valor.
// print(`Idade antes de alterar: ${pessoa.idade}`);

// pessoa.idade = 35;

// print(`Idade depois de alterar: ${pessoa.idade}`);


// // 4. Adicionando uma nova propriedade
// // Adicione ao objeto uma nova propriedade chamada "cidade".
// print("Objeto atual: ", pessoa);

// pessoa.cidade = 'Brasília';

// print("Objeto após adicionar a propriedade 'cidade': ", pessoa);


// // 5. Função com objeto
// // Crie uma função que recebe um objeto pessoa e retorna uma frase com seus dados.
// function apresentacao(objeto){
//     return `Olá, ${objeto.nome}! \nVocê tem ${objeto.idade} anos e trabalha como ${objeto.profissao}.`;
// }

// print(apresentacao(pessoa));

// // 6. Lista de pessoas
// // Crie um array com 3 objetos, cada um representando uma pessoa com nome e idade.
// const pessoas = [
//     { nome: 'Renata', idade: 28 },
//     { nome: 'Bruno', idade: 17 },
//     { nome: 'Leonardo', idade: 19 },
// ]; 


// // 7. Filtrando maiores de idade
// // Percorra o array e exiba apenas os nomes das pessoas com 18 anos ou mais.

// for (const pessoa of pessoas) {
//     if (pessoa.idade >= 18) {
//         print(`${pessoa.nome} é maior de idade.`);
//     }
// }

// // 8. Objeto com método
// // Crie um objeto com um método chamado "saudacao" que imprime "Olá, eu sou [nome]".

// const pessoaComMetodo = {
//     nome: 'Cauê',
//     saudacao: function() {
//         print(`Olá, eu sou ${this.nome}.`);
//     }
// };

// pessoaComMetodo.saudacao();

// // 9. Listando propriedades com for...in
// // Use um laço for...in para listar todas as propriedades e seus valores do objeto pessoal criado no exercício
// print('imprimindo "chave --> valor" do objeto pessoa usando "for...in".')
// for (let chave in pessoa){
//     print(`${chave} --> ${pessoa[chave]}`);
// }

// // 10. Cálculo de compra
// // Crie um objeto produto com preco e quantidade, e calcule o valor total da compra(preco * quantidade).
// const compra = {
//     produto: 'SODIN DDR5 32Gb',
//     valor: 1300.00,
//     quantidade: 2,
// }

// const valorTotal = compra.valor * compra.quantidade;

// print(`O valor total da compra de ${compra.quantidade}x ${compra.produto} é R$ ${valorTotal.toFixed(2)}`);



// // crie um objeto vazio, adcione propriedades, acesse algumas propriedades, altere algumas propriedades e remova alguma propriedade
// const pessoa = {};

// pessoa.nome = 'Cauê';
// pessoa.filmeFavorito = 'Interestelar';
// pessoa.animeFavorito = 'Attack on Titans';
// // adicionando um array como propriedade
// pessoa.hobbies = ['Paintball', 'Leitura']
// // adicionando um objeto como propriedade
// pessoa.contato = {
//     email: 'caue@email.com',
//     telefone: '061203040506',
// }

// console.log(pessoa);

// // adicionando um método como propriedade
// pessoa.apresentacao = function (){
//     return `Olá, meu nome é ${this.nome}.
// Gosto muito do filme ${this.filmeFavorito},
// meu anime favorito é ${this.animeFavorito}
// e meus hobbies são ${this.hobbies.join(' e ')}.`;
// }

// console.log(pessoa.nome)
// console.log(pessoa.hobbies[0])
// console.log(pessoa.apresentacao())
// // imprimindo o DDD do telefone
// console.log(`O DDD do telefone é ${pessoa.contato['telefone'].substring(0, 3)}`)

// // removendo uma propriedade do objeto dentro de outro objeto
// delete pessoa.contato['telefone'];
// console.log(pessoa.contato);

// // 1 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:

// // titulo (string): título do livro.
// // autor (string): nome do autor do livro.
// // anoPublicacao (number): ano de publicação do livro.
// // genero (string): gênero do livro.
// // No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.

// const livro = {
//     titulo: 'JavaScript: The Good Parts',
//     autor: 'Douglas Crockford',
//     anoPublicacao: 2008,
//     genero: 'Tecnologia',
//     apresentar() {
//     return `
// Título: ${this.titulo}
// Autor: ${this.autor}
// Ano de Publicação: ${this.anoPublicacao}
// Gênero: ${this.genero}
//     `;
//   }
// }

// console.log(livro.apresentar());


// // 2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.

// // Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.

// // Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.

// // Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.


// const livro2 = {
//     titulo: 'JavaScript: The Good Parts',
//     autor: 'Douglas Crockford',
//     anoPublicacao: 2008,
//     idadePublicacao(){
//         const anoAtual = new Date().getFullYear();
//         return anoAtual - this.anoPublicacao;        
//     },
//     genero: 'Tecnologia',
//     mostrarDetalhes() {
//     return `
// Título: ${this.titulo}
// Autor: ${this.autor}
// Ano de Publicação: ${this.anoPublicacao}
// Idade de Publicação: ${this.idadePublicacao()}
// Gênero: ${this.genero}
//     `;
//   }
// }
// console.log(livro2)
// console.log(livro2.mostrarDetalhes());




// // 3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.
// const livro3 = {
//     titulo: 'JavaScript: The Good Parts',
//     autor: 'Douglas Crockford',
//     anoPublicacao: 2008,
//     genero: 'Tecnologia',
//     idadePublicacao: function() {
//         const anoAtual = new Date().getFullYear();
//         return anoAtual - this.anoPublicacao;        
//     },
// }
// console.log('Detalhes do livro:');
// console.log(`Título: ${livro3['titulo']}`);
// console.log(`Autor: ${livro3['autor']}`);
// console.log(`Ano de Publicação: ${livro3['anoPublicacao']}`);
// console.log(`Gênero: ${livro3['genero']}`);
// console.log(`Idade de Publicação: ${livro3['idadePublicacao']()}`);


// // 4 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.

// // No final do arquivo livro.js, adicione uma avaliação ao objeto.

// // Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.

// // Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.
// const livro4 = {
//     titulo: 'JavaScript: The Good Parts',
//     autor: 'Douglas Crockford',
//     anoPublicacao: 2008,
//     genero: 'Tecnologia',
//     idadePublicacao: function() {
//         const anoAtual = new Date().getFullYear();
//         return anoAtual - this.anoPublicacao;        
//     },
//     avaliacao: null,
// }
// if (livro4.avaliacao === null){
//     livro4.avaliacao = 4.5;
//     console.log(`Avaliação adicionada: ${livro4.avaliacao}`);
// } else {
//     console.log('O livro já possui uma avaliação.');
// };



// // 5 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois altere o gênero do livro para "Aventura".
// const livro5 = {
//     titulo: 'JavaScript: The Good Parts',
//     autor: 'Douglas Crockford',
//     anoPublicacao: 2008,
//     genero: 'Tecnologia',
//     idadePublicacao: function() {
//         const anoAtual = new Date().getFullYear();
//         return anoAtual - this.anoPublicacao;        
//     },
// }

// console.log(`Gênero antes da alteração: ${livro5.genero}`);

// livro5.genero = 'Aventura';

// console.log(`Gênero depois da alteração: ${livro5.genero}`);


// // 6 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.
// const livro6 = {
//     titulo: 'JavaScript: The Good Parts',
//     autor: 'Douglas Crockford',
//     anoPublicacao: 2008,
//     genero: 'Tecnologia',
//     idadePublicacao: function() {
//         const anoAtual = new Date().getFullYear();
//         return anoAtual - this.anoPublicacao;        
//     },
//     avaliacao: 4.5,
// }

// console.log('Detalhes do livro antes de remover a avaliação:');
// console.log(livro6);

// delete livro6.avaliacao;

// console.log('Detalhes do livro após remover a avaliação:');
// console.log(livro6);

// ---------------------------------------------------------------------------------------
// function exibirLinhas() {
//     console.log('>','==='.repeat(35), '¬ \n',);
// };
// exibirLinhas();

// // 1 - Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa. Este objeto deve ter as seguintes propriedades:

// // nome (string): Nome da pessoa.
// // idade (number): Idade da pessoa.
// // solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado).
// // hobbies (array): Lista de hobbies da pessoa.
// // Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa específica.

// const pessoa = {
//     nome: 'Roronoa Zoro',
//     idade: 21,
//     solteiro: true,
//     hobbies: ['treinar', 'beber', 'usar espadas'],
// }

// // Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas as informações da pessoa no console, incluindo o tipo de dado de cada propriedade.
// function mostrarInfoPessoa ( obj ){
//     console.log("Informações da Pessoa:");
//     for (let chave in obj){
//         console.log(chave, obj[chave], typeof(obj[chave]));
//     }
// }

// // No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como argumento.
// mostrarInfoPessoa(pessoa);

// // Dica: você pode usar um método de array para retirar os elementos dos colchetes e exibi-los como texto.
// exibirLinhas();

// // 2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:

// // rua (string): nome da rua.
// // cidade (string): nome da cidade.
// // estado (string): nome do estado.
// // Preencha as subpropriedades do objeto endereco com valores fictícios.
// const pessoa2 = {
//     nome: 'Vincent Law',
//     idade: 30,
//     solteiro: true,
//     hobbies: ['trabalhar', 'gravar vídeos'],
//     endereco: {
//         rua: 'Dormitório de Trabalhadores Imigrantes',
//         setor: 'Zona Industrial',
//         cidade: 'Cidade-cúpula de Romdo',
//     }
// }

// // Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.

// // >>>>>>>> mantive a função original pois usando o for...in ela já percorre objetos aninhados <<<<<<<<

// // No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console.
// mostrarInfoPessoa(pessoa2);

// exibirLinhas();

// // 3 - Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. Cada objeto deve representar uma pessoa e conter as seguintes propriedades:

// // nome (string): nome da pessoa.
// // idade (number): idade da pessoa.
// // cidade (string): cidade de residência da pessoa.
// // Adicione pelo menos três objetos à lista pessoas com informações fictícias de diferentes pessoas.
// const pessoas = [
//     {
//         nome: 'Roronoa Zoro',
//         idade: 21,
//         cidade: 'Vila Shimotsuki',
//     },
//     {
//         nome: 'Proxy One',
//         idade: 30,
//         cidade: 'Cidade-cúpula de Romdo',
//     },
//     {
//         nome: 'Suguru Geto',
//         idade: 27,
//         cidade: 'Tóquio',
//     }
// ];

// // a) Crie uma função chamada mostrarListaPessoas que aceita a lista pessoas como parâmetro e imprima no console as informações de cada pessoa na lista.
// console.log('a) Mostrando a lista de pessoas:');
// function mostrarListaPessoas(arr){
//     for (let pessoa of arr){
//         console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
//     }
// }
// mostrarListaPessoas(pessoas)


// // b) Adicione uma nova pessoa à lista pessoas utilizando o método push. Certifique-se de que a nova pessoa tenha informações distintas das pessoas já existentes na lista.
// console.log('\nb) e c) Adicionando uma nova pessoa à lista e exibindo a lista atualizada:');
// pessoas.push({
//     nome: 'Edward Newgate',
//     idade: 72,
//     cidade: 'Ilha Sphinx',
// });
// // c) Chame a função mostrarListaPessoas para verificar se as informações, incluindo a nova pessoa, são exibidas corretamente no console.
// mostrarListaPessoas(pessoas);

// // d) Crie uma função chamada filtrarPorCidade que aceita a lista pessoas e uma string cidade como parâmetros. A função deve retornar uma nova lista contendo apenas as pessoas que residem na cidade fornecida.
// function filtrarPorCidade(arr, cidade){
//     const resultado = arr.filter( (pessoa) => pessoa.cidade === cidade );
//     return resultado;
// }

// // Chame a função filtrarPorCidade passando a lista pessoas e uma cidade fictícia como argumentos e imprima no console o resultado obtido.
// console.log('\nd) Pessoas que residem em Tóquio:');
// mostrarListaPessoas(filtrarPorCidade(pessoas, 'Tóquio'));
// exibirLinhas();

// // 4 - Crie um objeto chamado calculadora que terá os seguintes métodos:

// // soma: uma função que aceita dois parâmetros e retorna a soma deles.
// // subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
// // multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
// // divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso.
// const calculadora = {
//     soma: (a, b)=> console.log(`A soma de ${a} + ${b} é igual a ${a + b}`),
//     subtracao: (a, b) => console.log(`A subtração ${a} - ${b} é igual a ${a - b}`),
//     multiplicacao: (a, b) => console.log(`A multiplicação ${a} x ${b} é igual a ${a * b}`),
//     divisao: (a, b) => (a === 0 || b === 0) 
//         ? console.log('0 não pode ser dividido e nada porde ser dividido por 0') 
//         : console.log(`A divisão ${a} / ${b} é igual a ${a / b}`),
// }


// // a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.
// console.log('a)Resultados das operações da calculadora:');
// calculadora.soma(10,20)
// calculadora.subtracao(20, 10)
// calculadora.multiplicacao(20, 10)
// calculadora.divisao(100, 100)
// calculadora.divisao(0, 10)


// // b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.
// calculadora.calcularMedia = function (arr){
//     if (arr.length === 0){
//         console.log('Array vazio. Não é possível calcular a média.');
//     }else{
//         let soma = arr.reduce((acc, atual) => acc + atual, 0);
//         let media = soma / arr.length;
//         console.log(`A média dos valores é ${media}`);
//     }
// }

// // c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido.
// console.log('\nc) Calculando a média de um array de números:');
// calculadora.calcularMedia([10, 20, 30, 40, 50]);

// exibirLinhas();

// // 5 - Crie um objeto chamado contaBancaria com as seguintes propriedades:

// // titular: uma string representando o titular da conta.
// // saldo: um número representando o saldo da conta.
// // depositar: uma função que aceita um valor como parâmetro e adiciona esse valor ao saldo da conta. Utilize this para acessar a propriedade saldo.
// // sacar: uma função que aceita um valor como parâmetro e subtrai esse valor do saldo da conta. Utilize this para acessar a propriedade saldo. Certifique-se de verificar se há saldo suficiente antes de efetuar o saque.
// const contaBancaria = {
//     titular: 'Edward Newgate',
//     saldo: 200000,
//     depositar: function(valor){
//         if ( valor > 0 ){
//             this.saldo += valor;
//             console.log(`Valor depositado. Saldo atual: ${this.saldo.toFixed(2)}`);
//         } else {
//             console.log('Valor inválido.')
//         }
//     },
//     sacar: function(valor){
//         if( valor > 0 && valor <= this.saldo){
//             this.saldo -= valor;
//             console.log(`Saque efetuado. Saldo atual: ${this.saldo.toFixed(2)}`);
//         } else if (valor > this.saldo){
//             console.log('Saldo insuficiente. Saldo atual é ', this.saldo.toFixed(2));
//         } else {
//             console.log('Valor inválido.')
//         }
//     }
// }

// // Crie um objeto chamado cliente que representa um cliente com uma conta bancária. O objeto deve ter as seguintes propriedades:

// // nome: uma string representando o nome do cliente.
// // conta: uma referência à conta bancária associada a esse cliente (objeto criado anteriormente).
// // Crie uma função chamada mostrarSaldo que aceita o objeto cliente como parâmetro e imprime no console o nome do cliente e o saldo da sua conta utilizando this para acessar as propriedades do objeto.
// const cliente = {
//     nome: 'Edward Newgate',
//     conta: contaBancaria,
//     mostrarSaldo: function(){
//         console.log(`Cliente: ${this.nome}`);
//         console.log('Saldo atual: ', this.conta.saldo.toFixed(2));
//     }
// }
// cliente.mostrarSaldo()

// // Realize operações de depósito e saque na conta bancária do cliente usando as funções do objeto contaBancaria e, em seguida, chame a função para exibir as informações atualizadas no console.
// console.log('\nRealizando operações na conta bancária:');
// cliente.conta.depositar(50000);
// cliente.conta.sacar(100000);

// console.log('\nSaldo atualizado após operações:');
// cliente.mostrarSaldo();

// exibirLinhas();
