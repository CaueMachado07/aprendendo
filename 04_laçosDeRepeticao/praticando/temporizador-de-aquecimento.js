// Você está programando o temporizador de uma esteira aquecida para secagem de produtos. O sistema precisa manter a esteira aquecida por pelo menos 5 segundos, mesmo que a temperatura ideal já tenha sido atingida.

// O painel deve exibir, segundo a segundo:

// “Aquecendo... segundo X” a cada ciclo;
// A mensagem "Temperatura ideal atingida." exatamente no segundo em que essa condição for alcançada;
// E ao final, o total de segundos que o sistema permaneceu ligado.
// Crie um programa que simule esse funcionamento do temporizador de aquecimento, garantindo que ele continue funcionando até atingir pelo menos 5 segundos.

// Exemplo de entrada:

// const tempoMinimo = 5;
// const temperaturaIdealAlcancadaEm = 3;
// Copiar código
// Saída esperada:

// Aquecendo... segundo 1
// Aquecendo... segundo 2
// Aquecendo... segundo 3
// Temperatura ideal atingida.
// Aquecendo... segundo 4
// Aquecendo... segundo 5
// Tempo total de aquecimento: 5 segundos

const timmer = 5;
const temperaturaIdealAlcancadaEm = 3;
 
let segundos = 0;
 
do {
    segundos++;
    console.log(`Aquecendo... segundo ${segundos}`);
 
    if (segundos === temperaturaIdealAlcancadaEm) {
        console.log("Temperatura ideal atingida.");
    }
 
} while (segundos < timmer);
 
console.log(`Tempo total de aquecimento: ${segundos} segundos`);