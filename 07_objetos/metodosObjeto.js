// importando a função print
const { print } = require('../05_funcoes/01_fucoes');


// vamos explorar métodos em objetos JavaScript

// Métodos são funções associadas a objetos que permitem realizar operações específicas relacionadas ao objeto em questão. Eles são definidos como propriedades do objeto e podem ser chamados para executar ações ou manipular os dados do objeto.

// criando um objeto pessoa
const pessoa = {
    nome: 'Cauê',
    idade: 34,
    altura: 1.75,
    pet: 'Ban',
}

// usando o método for in para exibir as chaves do objeto
for(let chave in pessoa){
    print('Chave: ' + chave);
}

// usando o metodo for in para exibir os valores do objeto de forma dinâmica
for(let chave in pessoa){
    print(`Chave: ${chave} -> Valor: ${pessoa[chave]}`);
}
// o metodo for in é útil para iterar sobre todas as propriedades enumeráveis de um objeto, permitindo acessar tanto as chaves quanto os valores de forma dinâmica.
// lembrando que para acessar o valor de uma propriedade usando uma variável (como no exemplo acima com 'chave'), precisamos usar a notação de colchetes (pessoa[chave]) em vez da notação de ponto (pessoa.chave), pois a notação de ponto não interpreta o valor da variável.
// o metodo for in é um metodo exclusivo para objetos em JavaScript e não deve ser usado para iterar sobre arrays, pois a ordem dos elementos pode não ser garantida. Para arrays, é recomendado usar loops tradicionais ou métodos específicos de array como forEach, map, for of, etc.


// usando o método Object.keys() para obter um array com as chaves do objeto
const chaves = Object.keys(pessoa);
print(`Chaves do objeto pessoa: ${chaves.join(', ')}`);

// usando o método Object.values() para obter um array com os valores do objeto
const valores = Object.values(pessoa);
print(`Valores do objeto pessoa: ${valores.join(', ')}`);
// usando o método Object.entries() para obter um array de arrays com pares [chave, valor]
const entradas = Object.entries(pessoa);
print(`Entradas do objeto pessoa: ${entradas.join(', ')}`);

// exibindo cada par chave-valor
entradas.forEach(([chave, valor]) => {
    print(`Chave: ${chave} -> Valor: ${valor}`);
});