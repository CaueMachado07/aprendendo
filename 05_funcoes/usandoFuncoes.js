// arquivo para demonstrar uso de funções importadas de outros arquivos
// importando as funções do arquivo 01_fucoes.js
const { 
    print,
    saudacao,
    soma,
    multiplicacao,
    potencia,
    saudacaoArrow,
    dividir,
    saudacaoSimples,
    calcularDobro
} = require('./01_fucoes');

// usando a função saudacao do arquivo 01_fucoes.js
saudacao('João'); // Chamada da função
saudacao('Ana'); 

// usando a função soma e função print do arquivo 01_fucoes.js
const resultado = soma(5, 3);
print(`A soma é: ${resultado}`);

// usando a função multiplicacao e função print do arquivo 01_fucoes.js
const resultadoMultiplicacao = multiplicacao(4, 6);
print(`A multiplicação é: ${resultadoMultiplicacao}`);

// usando a função potencia e função print do arquivo 01_fucoes.js
print(`2 elevado ao quadrado é: ${potencia(2)}`);
print(`3 elevado ao cubo é: ${potencia(3, 3)}`);

// usando a arrow function saudacaoArrow do arquivo 01_fucoes.js
saudacaoArrow('Carlos');

// usando a arrow function dividir e função print do arquivo 01_fucoes.js
print(`10 dividido por 2 é: ${dividir(10, 2)}`);

// usando saudacaoSimples do arquivo 01_fucoes.js
saudacaoSimples('Caue');

// usando calcularDobro do arquivo 01_fucoes.js
print(`O dobro de 8 é: ${calcularDobro(8)}`);

// Note: As funções saudacao, soma, multiplicacao, potencia, saudacaoArrow, dividir, saudacaoSimples, e calcularDobro
// são todas definidas e exportadas no arquivo 01_fucoes.js e aqui estamos apenas importando e utilizando elas.
//