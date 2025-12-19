// // estruturas condicionais
// const temperatura = 35;
// if (temperatura >= 37) {
//     console.log('Febre alta');
// } else if (temperatura < 37 && temperatura >= 36.5) {
//     console.log('Febre baixa');
// } else {
//     console.log('Temperatura normal');
// }


// // operador ternário
// // condição ? true : false;
// const idade = 18;
// const podeBeber = idade >= 18 ? 'Pode beber' : 'Não pode beber';
// console.log(podeBeber);
// // Ideal para atribuições simples com base em uma condição


// // operador ternário aninhado
const nota = 85;
// const conceito = nota >= 90 ? 'A' :
//                  nota >= 80 ? 'B' :
//                  nota >= 70 ? 'C' :
//                  nota >= 60 ? 'D' : 'F';
// console.log('Conceito: ' + conceito);
// // Útil para múltiplas condições, mas pode reduzir a legibilidade se exagerado
// // resumo
// console.log('Resumo das Estruturas Condicionais:');
// console.log('if...else: Usado para executar blocos de código com base em condições.');
// console.log('Operador Ternário: Uma forma concisa de expressar condições simples.');
// console.log('Ternário Aninhado: Permite múltiplas condições, mas deve ser usado com cautela para manter a legibilidade.');  


// // condicional com if simples usando o exemplo das notas acima
// let conceitoIf;
// if (nota >= 90) {
//     conceitoIf = 'A';
// }
// else if (nota >= 80) {
//     conceitoIf = 'B';
// }
// else if (nota >= 70) {
//     conceitoIf = 'C';
// }
// else if (nota >= 60) {
//     conceitoIf = 'D';
// }
// else {
//     conceitoIf = 'F';
// }
// console.log('Conceito usando if...else: ' + conceitoIf);
// // essa forma com if...else é mais legível que o operador ternário aninhado para múltiplas condições


// condicional switch case usando o exemplo das notas acima
let conceito;
switch (true) {
    case (nota >= 90):
        conceito = 'A';
        break;  
    case (nota >= 80):
        conceito = 'B';
        break;  
    case (nota >= 70):
        conceito = 'C';
        break;
    case (nota >= 60):
        conceito = 'D';
        break;
    default:
        conceito = 'F';
}
console.log('Conceito usando switch case: ' + conceito);
// switch case pode ser usado para múltiplas condições, mas é menos comum para intervalos numéricos comparado ao if...else  
// geralmente é mais usado para valores discretos, como strings ou números específicos  
// resumo final
console.log('Resumo das Estruturas Condicionais:');
console.log('if...else é a estrutura mais versátil para condições variadas.');
console.log('Operador Ternário é ótimo para atribuições simples.');
console.log('Ternário Aninhado: Permite múltiplas condições, mas deve ser usado com cautela para manter a legibilidade.');
console.log('switch case é útil para valores discretos, mas menos comum para intervalos numéricos.');   
