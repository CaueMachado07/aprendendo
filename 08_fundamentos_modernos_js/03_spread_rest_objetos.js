// importando a função print
const { print } = require('../05_funcoes/01_fucoes');

// vamos explorar o operador spread e rest em objetos JavaScript

// O operador spread (...) permite expandir elementos iteráveis (como arrays ou strings) em locais onde zero ou mais argumentos (para chamadas de função) ou elementos (para arrays literais) são esperados. Já o operador rest (...) permite agrupar um número indefinido de argumentos em um array.

// objeto exemplo
const pessoa = {
    nome: 'Cauê',
    idade: 34,
    altura: 1.75,
};

// supondo que queremos criar um novo objeto com todas as propriedades do objeto pessoa.
// pode ser feito desta forma?
const pessoa2 = pessoa;
// altrerando a idade de pessoa2
pessoa2.idade = 35;

// exibindo os objetos
print('Objeto pessoa:', pessoa);
print('Objeto pessoa2:', pessoa2);
// observe que desta forma não criamos um novo objeto, mas sim uma referência ao objeto original. Portanto, qualquer alteração feita em pessoa2 também afetará pessoa.
// como pessoa2 é uma referência para o mesmo objeto que pessoa, ao alterar a idade em pessoa2, também alteramos a idade em pessoa. Isso ocorre porque ambos apontam para o mesmo local na memória.



// para criar um novo objeto com as mesmas propriedades de pessoa, podemos usar o operador spread:
const pessoa3 = { ...pessoa };

// alterando a idade de pessoa3
pessoa3.idade = 36;

// exibindo o objeto
print('Objeto pessoa3:', pessoa3);
// agora, pessoa3 é um novo objeto independente, e alterar sua idade não afeta o objeto original pessoa.



// podemos usar o spread para compiar e atualizar propriedades de objetos e adicionar novas propriedades de forma concisa:
const pessoaAtualizada = { ...pessoa, idade: 37, possuiCNH: true };
print('Objeto pessoaAtualizada:', pessoaAtualizada);
// aqui, criamos um novo objeto pessoaAtualizada que copia todas as propriedades de pessoa, atualiza a propriedade idade para 37 e adiciona uma nova propriedade peso com o valor 70.



// tmabém podemos usar o operador spread para combinar objetos:
const endereco = {
    rua: 'Rua A',
    cidade: 'São Paulo',
    estado: 'SP',
};
const pessoaComEndereco = { ...pessoa, ...endereco }; // a ordem importa, as propriedades do segundo objeto sobrescrevem as do primeiro em caso de conflito
print('Objeto pessoaComEndereco:', pessoaComEndereco);
// aqui, criamos um novo objeto pessoaComEndereco que combina as propriedades de pessoa e endereco usando o operador spread.



// seprando propriedades de um objeto usando o operador rest:
const { nome, ...resto } = pessoa;
print('Nome:', nome);
print('Resto das propriedades:', resto);
// aqui, usamos o operador rest para separar a propriedade nome do objeto pessoa, agrupando todas as outras propriedades restantes em um novo objeto chamado resto.



// o operador rest pode ser usado em funções para agrupar argumentos restantes em um array:
function listarHobbies(nome, ...hobbies) {
    print(`Hobbies de ${nome}:`, hobbies);
}
listarHobbies('Cauê', 'Paintball', 'Leitura', 'Programação');
// na função listarHobbies, o primeiro argumento é atribuído à variável nome, enquanto todos os argumentos subsequentes são agrupados em um array chamado hobbies usando o operador rest. Isso permite que a função aceite um número variável de argumentos.

// em resumo, o operador spread (...) é usado para expandir elementos iteráveis em locais onde múltiplos elementos são esperados, enquanto o operador rest (...) é usado para agrupar múltiplos argumentos em um único array. Ambos são recursos poderosos que tornam o código mais conciso e legível em JavaScript.
// lembre-se de que o operador spread e rest são representados pelos mesmos três pontos (...), mas seu uso depende do contexto em que são aplicados.

