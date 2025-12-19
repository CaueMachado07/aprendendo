// Operadores de Comparação
const valor1 = 10;
const valor2 = 5;  
const valor3 = '10';

// Igualdade
console.log('Igualdade (valor1 == valor3): ' + (valor1 == valor3)); // true
// Desigualdade
console.log('Desigualdade (valor1 != valor2): ' + (valor1 != valor2)); // true

// Estrita Igualdade
console.log('Estrita Igualdade (valor1 === valor3): ' + (valor1 === valor3)); // false
// Estrita Desigualdade
console.log('Estrita Desigualdade (valor1 !== valor3): ' + (valor1 !== valor3)); // true

// Maior que
console.log('Maior que (valor1 > valor2): ' + (valor1 > valor2)); // true

// Menor que
console.log('Menor que (valor2 < valor1): ' + (valor2 < valor1)); // true   
// Maior ou igual a
console.log('Maior ou igual a (valor1 >= valor3): ' + (valor1 >= valor3)); // true  
// Menor ou igual a
console.log('Menor ou igual a (valor2 <= valor1): ' + (valor2 <= valor1)); // true
// Comparações combinadas
console.log('Comparação combinada ((valor1 > valor2) && (valor1 === 10)): ' + ((valor1 > valor2) && (valor1 === 10))); // true
console.log('Comparação combinada ((valor1 < valor2) || (valor1 === 10)): ' + ((valor1 < valor2) || (valor1 === 10))); // true  
// Resumo
console.log('Resumo dos Operadores de Comparação:');
console.log('== : Igualdade');
console.log('!= : Desigualdade');
console.log('=== : Estrita Igualdade');
console.log('!== : Estrita Desigualdade');
console.log('> : Maior que');
console.log('< : Menor que');
console.log('>= : Maior ou igual a');
console.log('<= : Menor ou igual a');
console.log('&& : E lógico');
console.log('|| : Ou lógico');
