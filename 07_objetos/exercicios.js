// Função para imprimir texto no console
function print(...args) { // usando rest parameter para aceitar múltiplos argumentos
    console.log(...args);
};

// 1. Criando um objeto pessoal
// Crie um objeto com seu nome, idade e profissão.
const pessoa = {
    nome: 'Cauê',
    idade: 34,
    profissao: 'Técnico de Redes',
}

print('Objeto pessoa criado.');
print(pessoa);


// 2. Acessando propriedades
// Acesse e exiba o valor da propriedade "nome" no console.
print(`Chave: nome | Valor: ${pessoa.nome}`);


// 3. Atualizando valores
// Modifique a propriedade "idade" com um novo valor.
print(`Idade antes de alterar: ${pessoa.idade}`);

pessoa.idade = 35;

print(`Idade depois de alterar: ${pessoa.idade}`);


// 4. Adicionando uma nova propriedade
// Adicione ao objeto uma nova propriedade chamada "cidade".
print("Objeto atual: ", pessoa);

pessoa.cidade = 'Brasília';

print("Objeto após adicionar a propriedade 'cidade': ", pessoa);


// 5. Função com objeto
// Crie uma função que recebe um objeto pessoa e retorna uma frase com seus dados.
function apresentacao(objeto){
    return `Olá, ${objeto.nome}! \nVocê tem ${objeto.idade} anos e trabalha como ${objeto.profissao}.`;
}

print(apresentacao(pessoa));

// 6. Lista de pessoas
// Crie um array com 3 objetos, cada um representando uma pessoa com nome e idade.
const pessoas = [
    { nome: 'Renata', idade: 28 },
    { nome: 'Bruno', idade: 17 },
    { nome: 'Leonardo', idade: 19 },
]; 


// 7. Filtrando maiores de idade
// Percorra o array e exiba apenas os nomes das pessoas com 18 anos ou mais.

for (const pessoa of pessoas) {
    if (pessoa.idade >= 18) {
        print(`${pessoa.nome} é maior de idade.`);
    }
}

// 8. Objeto com método
// Crie um objeto com um método chamado "saudacao" que imprime "Olá, eu sou [nome]".

const pessoaComMetodo = {
    nome: 'Cauê',
    saudacao: function() {
        print(`Olá, eu sou ${this.nome}.`);
    }
};

pessoaComMetodo.saudacao();

// 9. Listando propriedades com for...in
// Use um laço for...in para listar todas as propriedades e seus valores do objeto pessoal criado no exercício
print('imprimindo "chave --> valor" do objeto pessoa usando "for...in".')
for (let chave in pessoa){
    print(`${chave} --> ${pessoa[chave]}`);
}

// 10. Cálculo de compra
// Crie um objeto produto com preco e quantidade, e calcule o valor total da compra(preco * quantidade).
const compra = {
    produto: 'SODIN DDR5 32Gb',
    valor: 1300.00,
    quantidade: 2,
}

const valorTotal = compra.valor * compra.quantidade;

print(`O valor total da compra de ${compra.quantidade}x ${compra.produto} é R$ ${valorTotal.toFixed(2)}`);