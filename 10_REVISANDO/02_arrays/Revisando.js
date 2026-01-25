

// arrays - Revisando

// são estruturas de dados que armazenam múltiplos valores em uma única variável
// são úteis para organizar e manipular conjuntos de dados relacionados
// podem conter qualquer tipo de dado, incluindo números, strings, objetos e até outras arrays
// são indexadas, o que significa que cada elemento tem uma posição numérica começando do zero
// permitem operações como adicionar, remover, ordenar e iterar sobre os elementos
// 
// arrays esparsas são arrays que possuem elementos em posições não contíguas, ou seja, há "buracos" entre os índices onde não há valores definidos. Isso pode ocorrer quando elementos são removidos ou quando índices específicos são atribuídos sem preencher os anteriores.


// uma array pode ser criada usando colchetes [] e os elementos são separados por vírgulas
// pode ser iterada usando loops como for, for...of, forEach, map, filter, etc.

// for: permite iterar sobre os índices da array
// for...of: permite iterar diretamente sobre os valores da array
// forEach: método que executa uma função para cada elemento da array
// map: método que cria uma nova array com os resultados da aplicação de uma função a cada elemento
// filter: método que cria uma nova array com todos os elementos que passam em um teste implementado por uma função fornecida
// reduce: método que aplica uma função a um acumulador e a cada elemento da array (da esquerda para a direita) para reduzi-la a um único valor
// 
// uma outra possibilidade usando o for com multiplas variaveis

// criar um array com uma sequência de números entre x e y
function criaArrNum(inicio, fim) {
  const arr = []; // array vazio
  let elemento = inicio; // elemento inicial

  for(let i = 0, j = 0; j < fim; i++, elemento++) { // duas variáveis de controle: i para o índice da array e j para o valor do elemento, que vai de inicio até fim, incrementando i e elemento a cada iteração
    arr[i] = elemento; // atribui o valor do elemento à posição i da array
    j = elemento; // atualiza j para o valor atual do elemento, para controlar o loop até atingir o valor fim
  }
  return arr;
}

// pop: remove o último elemento da array e o retorna
// push: adiciona um ou mais elementos ao final da array e retorna o novo comprimento da array
// shift: remove o primeiro elemento da array e o retorna
// unshift: adiciona um ou mais elementos ao início da array e retorna o novo comprimento da array
// splice: altera o conteúdo de uma array, removendo, substituindo ou adicionando elementos em uma posição específica
// slice: retorna uma cópia de uma parte da array, especificada por índices de início e fim
// indexOf: retorna o primeiro índice em que um determinado elemento pode ser encontrado na array, ou -1 se não estiver presente
// includes: determina se uma array inclui um determinado elemento, retornando true ou false
// join: junta todos os elementos de uma array em uma string, separados por um separador especificado
// delete: operador que pode ser usado para remover um elemento de uma array, deixando um "buraco" (undefined) na posição do índice removido
// length: propriedade que retorna o número de elementos em uma array
// reverse: método que inverte a ordem dos elementos na array
// sort: método que ordena os elementos da array in loco e retorna a array ordenada
// concat: método que é usado para mesclar duas ou mais arrays, retornando uma nova array sem modificar as arrays originais


// outra caracteristica dos arrays é que ao tentarmos atribui-los a uma variável, na verdade estamos atribuindo uma referência ao local na memória onde o array está armazenado, e não uma cópia do array em si. Isso significa que se modificarmos o array através de uma dessas variáveis, a outra variável também refletirá essas mudanças, pois ambas apontam para o mesmo array na memória.

// para criar uma cópia de um array e evitar esse comportamento de referência, podemos usar métodos como slice(), concat(), ou o operador spread (...). Esses métodos criam uma nova array com os mesmos elementos, permitindo que as modificações em uma não afetem a outra.

// para uma cópia rasa (shallow copy) de um array, onde apenas o primeiro nível de elementos é copiado, podemos usar os seguintes métodos:
// 1. slice(): const novaArray = arrayOriginal.slice();
// 2. concat(): const novaArray = [].concat(arrayOriginal);
// 3. operador spread: const novaArray = [...arrayOriginal];

// para uma cópia profunda (deep copy) de um array, onde todos os níveis de elementos são copiados, incluindo objetos aninhados, podemos usar JSON.parse() e JSON.stringify():
// const novaArrayProfunda = JSON.parse(JSON.stringify(arrayOriginal));

// também podemos fazer usando recursão para copiar arrays aninhadas, garantindo que todos os níveis sejam duplicados corretamente.
// veja um exemplo de função para cópia profunda usando recursão:
// usando forEach
const copiaArray = (arr) => {
  const copia = []; // array vazio para armazenar a cópia
  arr.forEach((elem) => {
    if (Array.isArray(elem)) { // verifica se o elemento é uma array
      copia.push(copiaArray(elem)); // chama recursivamente para arrays aninhadas
    } else {
      copia.push(elem); // adiciona valores primitivos diretamente
    }
  })
  return copia;
};

// usando map
function deepCopyArray(arr) {
  return arr.map(item => {
    if (Array.isArray(item)) {
      return deepCopyArray(item); // chama recursivamente para arrays aninhadas
    } else if (item !== null && typeof item === 'object') { // verifica se o item é um objeto
      return { ...item }; // cria uma cópia rasa de objetos
    }
    return item; // retorna valores primitivos diretamente
  });
}


// Praticando usnado condicionais e map()
// verificar se na lista de cpf tem algum diferente de string, se tiver, retornar uma lista com os cpfs válidos convertidos para string


const cpfs = ['12323434545', '34658756786', 43254365434, '76547865345', 56768767564];

const result = cpfs.map((cpf) => {
  if (typeof cpf === 'string') { // verifica se o cpf já é uma string
    return cpf;
  } else {
    return cpf.toString(); // converte para string se não for
  }
})

// otimizando com operador ternário
const resultOptimized = cpfs.map((cpf) => 
  typeof cpf === 'string' ? cpf : cpf.toString()
);
