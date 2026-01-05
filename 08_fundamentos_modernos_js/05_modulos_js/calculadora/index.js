// Importando as funções do módulo 'operacoes.js'
import { soma, subtracao, multiplicacao, divisao, potencia, porcentagem } from "./operacoes.js";
// perceba que usamos import e from para trazer as funções exportadas do módulo operacoes.js.
// diferente do CommonJS onde usamos 'require()', aqui usamos a sintaxe de módulos ES6 com 'import'.
// isso é possível porque definimos "type": "module" no package.json, permitindo o uso de módulos ES6 no Node.js.


// import { 
//     soma,
//     subtracao,
//     multiplicacao,
//     divisao,
//     potencia,
//     porcentagem,
// } from "./operacoes.js"; 

// // ou:
// import * as operacoes from "./operacoes.js"; // importa todas as funções como propriedades do objeto 'operacoes'

import { createInterface } from 'readline';

const leitor = createInterface({
    input: process.stdin,
    output: process.stdout
});


leitor.question('Digite o primeiro número:\n>', (numero1) => {
    leitor.question('Digite a operação:\n1: Soma\n2: Subtração\n3: Multiplicação\n4: Divisão\n5: Potência\n6: Porcentagem\n >', (operacao) => {
        leitor.question('Digite o segundo número:\n>', (numero2) => {
            const num1 = Number(numero1);
            const num2 = Number(numero2);

            let resultado = null;

            switch (operacao) {
                case '1':
                    resultado = soma(num1, num2);
                    break;
                case '2':
                    resultado = subtracao(num1, num2);
                    break;
                case '3':
                    resultado = multiplicacao(num1, num2);
                    break;
                case '4':
                    resultado = divisao(num1, num2);
                    break;
                case '5':
                    resultado = potencia(num1, num2);
                    break;
                case '6':
                    resultado = porcentagem(num1, num2);
                    break;
                default:
                    console.log('Operação inválida!');
            }

            if (resultado != null) {
                console.log('O resultado da operação é: ', resultado);
            }

            leitor.close();
        });
    });
});
