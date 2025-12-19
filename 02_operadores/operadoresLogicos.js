// Operadores Lógicos
const verdadeiro = true;
const falso = false;
// Operador E (AND)
// Retorna true se ambos os operandos forem true
const andResult = verdadeiro && falso;
console.log('Operador E (true && false): ' + andResult); // false   
// Operador OU (OR)
// Retorna true se pelo menos um dos operandos for true
const orResult = verdadeiro || falso;
console.log('Operador OU (true || false): ' + orResult); // true   
// Operador NÃO (NOT)
// Retorna o valor lógico oposto do operando
const notResult = !verdadeiro;
console.log('Operador NÃO (!true): ' + notResult); // false
// Combinação de operadores lógicos
// Exemplo: (true AND false) OR (NOT false)
const complexLogic = (verdadeiro && falso) || (!falso);
console.log('Combinação de operadores ((true && false) || (!false)): ' + complexLogic); // true   
// Resumo
// Este código demonstra os principais operadores lógicos em JavaScript.
console.log('Resumo dos Operadores Lógicos:');
// && : E lógico
console.log('&& : E lógico');
// || : Ou lógico
console.log('|| : Ou lógico');
// ! : Não lógico
console.log('! : Não lógico');

