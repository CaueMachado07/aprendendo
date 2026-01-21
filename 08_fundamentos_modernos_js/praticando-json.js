function exibirLinhas(vezes = 1){
    for (let i = 0; i < vezes; i++) {
        console.log('-'.repeat(50), '|>');
    }
};


// importando o json estudantes dentro de uma variavel
const estudantes = require('./estudantes.json');

// exibirLinhas();
// console.log('\nPraticando com JSON em JavaScript com find()\n');
// exibirLinhas();

// // função para buscar informações no objeto estudantes
// function buscarEstudante(lista, chave, valor){
//   return lista.find(estudante => estudante[chave] === valor);
// }

// // buscando o estudante José Silva pelo nome
// console.log(buscarEstudante(estudantes, 'nome', 'Juliet'), '\n');
// exibirLinhas();

// // a função buscarEstudante funciona corretamente porém ao tentar buscar um valor em uma propriedade array, como por exemplo telefones, ela não retorna o resultado esperado. Vamos ajustar a função para lidar com esse caso.
// // vejamos a seguir
// console.log(buscarEstudante(estudantes, 'telefone', '11998123183'), '\n');
// exibirLinhas();

// // veja que o resultado retornado é undefined, pois a função não está preparada para lidar com propriedades que são arrays. Vamos ajustar a função para verificar se a propriedade é um array e, em caso afirmativo, verificar se o valor está presente nesse array.

// function buscarEstudanteAprimorada(lista, chave, valor){
//     return lista.find((estudante) => estudante[chave].includes(valor));
// }

// // buscando o estudante pelo telefone
// console.log(buscarEstudanteAprimorada(estudantes, 'telefone', '11998123183'), '\n');
// // agora a função retorna o estudante correto ao buscar pelo telefone.

// --- Praticando com filter() ---

// exibirLinhas();
// console.log('\nPraticando com JSON em JavaScript com filter()\n');
// exibirLinhas();

// //função para filtrar estudantes que não tenham o CEP cadastrado
// function filtrarEstudantesSemCEP(lista){
//     return lista.filter((estudante) => {
//         //verificando se o estudante possui o campo endereco
//         if(estudante.endereco){
//             //verificando se o campo endereco possui o campo cep
//             if(estudante.endereco.cep){
//                 return false; //estudante possui o cep cadastrado
//             } else {
//                 return true; //estudante não possui o cep cadastrado
//             }
//         } else {
//             return true; //estudante não possui o campo endereco
//         }
//     });


// }
// // observe que a função filtrarEstudantesSemCEP percorre a lista de estudantes e verifica se cada estudante possui o campo endereco e dentro dele o campo cep. Se o campo cep estiver ausente, o estudante é incluído na lista retornada.
// // outra característica é que é uma função fixa, ou seja, sempre filtra estudantes sem cep. Poderíamos torná-la mais genérica aceitando o nome do campo a ser verificado como parâmetro, mas por enquanto vamos mantê-la assim.

// // filtrando estudantes sem CEP
// const estudantesSemCEP = filtrarEstudantesSemCEP(estudantes);
// console.log('Estudantes sem CEP cadastrado:\n', estudantesSemCEP, '\n');
// exibirLinhas(2);

// outro exemplo de função fixa usando hasOwnProperty()
function filtraPorPropriedade(lista, propriedade) {
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    })
}

console.log('\nEstudantes sem propriedade "complemento" no endereço:\n');
const listaEnderecosSemComplemento = filtraPorPropriedade(estudantes, 'complemento')
console.log(listaEnderecosSemComplemento, '\n');
exibirLinhas(2);

console.log('\nEstudantes sem propriedade "cep" no endereço:\n');
const listaEnderecosIncompletos = filtraPorPropriedade(estudantes, 'cep')
console.log(listaEnderecosIncompletos);

// como funciona hasOwnProperty():
// ele verifica se o objeto possui a propriedade especificada como uma propriedade direta do objeto, e não herdada através da cadeia de protótipos. Retorna true se a propriedade existir diretamente no objeto, caso contrário, retorna false.
