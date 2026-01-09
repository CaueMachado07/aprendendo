// Estruturas Especiais em JavaScript
// Além dos arrays comuns, JavaScript oferece algumas estruturas especiais como Set e Map, que são úteis para casos específicos de uso.

// importando a função print para exibir resultados
const { print } = require('../05_funcoes/01_fucoes');

// Set - Conjunto de valores únicos
// Um Set é uma coleção de valores que não permite duplicatas. Ele é útil quando queremos garantir que todos os elementos sejam únicos.
const meuSet = new Set();
meuSet.add(1);
meuSet.add(5);
meuSet.add(5); // duplicata, será ignorada

print(`Conteúdo do Set: ${[...meuSet]}`); // [1, 5]

// Verificando se um valor existe no Set
print(`Set tem o valor 1? ${meuSet.has(1)}`); // true
print(`Set tem o valor 3? ${meuSet.has(3)}`); // false

// Removendo um valor do Set
meuSet.delete(5);
print(`Conteúdo do Set após remoção: ${[...meuSet]}`); // [1]
// Limpando todo o Set
meuSet.clear();
print(`Tamanho do Set após limpar: ${meuSet.size}`); // 0

// elimininando duplicatas de um array usando Set
const arrayComDuplicatas = [1, 2, 2, 3, 4, 4, 5];
print(`Array com duplicatas: ${arrayComDuplicatas}`); // [1, 2, 2, 3, 4, 4, 5]
const arraySemDuplicatas = [...new Set(arrayComDuplicatas)];
print(`Array sem duplicatas: ${arraySemDuplicatas}`); // [1, 2, 3, 4, 5]

// set permite apenas valores únicos, então é ideal para armazenar coleções onde duplicatas não são permitidas.




// ------------------------------------------------------------------------------------------

// Map - Coleção de pares chave-valor
// Um Map é uma coleção de pares chave-valor onde as chaves podem ser de qualquer tipo. Ele é útil quando precisamos associar valores a chaves específicas.
const meuMap = new Map();
meuMap.set('nome', 'João');
meuMap.set('idade', 30);
meuMap.set(1, 'um'); // chave numérica
print(`Conteúdo do Map:`);
for (const [chave, valor] of meuMap) {
    print(`${chave} => ${valor}`);
}

// Acessando valores no Map
print(`Nome: ${meuMap.get('nome')}`); // João
print(`Idade: ${meuMap.get('idade')}`); // 30

// ------------------------------------------------------------------------------------------


// Diferença entre Set, Map e Array
// Array: Guarda valores em ordem e permite duplicatas.

// Set: Guarda valores únicos, sem duplicatas.

// Map: Guarda pares de chave e valor com chaves únicas e ordenadas.

// Quando escolher cada um?
// Set: Para coleções únicas e operações de conjunto.

// Map: Quando você precisar associar valores específicos a chaves únicas, especialmente se as chaves não forem simples strings.