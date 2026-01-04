// importando a função print
const { print } = require('../05_funcoes/01_fucoes');

// vamos explorar o operador spread e rest em arrays JavaScript

const frutas1 = ['uva','laranja','banana'];
const frutas2 = ['pêra','jaboticaba','Kiwi'];

// usando o operador espread para clonar outro array
const cloneFrutas1 = [...frutas1];

// exibindo os arrays
print('frutas1: ', frutas1);
print('frutas2: ', frutas2);
print('cloneFrutas1: ', cloneFrutas1);

// criando um novo array 'cestaDeFrutas' com os elementos de frutas1 e frutas2
const cestaDeFrutas = [...frutas1, ...frutas2]; // a ordem importa, os elementos de frutas1 aparecem primeiro

print('Cesta de Frutas: ', cestaDeFrutas);

// usando o operador rest para agrupar elementos restantes em um array
const [primeiraFruta, segundaFruta, ...outrasFrutas] = cestaDeFrutas;

print('Primeira Fruta:', primeiraFruta);
print('Segunda Fruta:', segundaFruta);
print('Outras Frutas:', outrasFrutas);
// aqui, usamos o operador rest (...) para agrupar todos os elementos restantes do array cestaDeFrutas em um novo array chamado outrasFrutas, após extrair as duas primeiras frutas em variáveis separadas.


// outrasFrutas conterá todos os elementos do array original, exceto os dois primeiros.
const [ , , ...frutasRestantes] = cestaDeFrutas;
print('Frutas Restantes:', frutasRestantes);
// aqui, usamos o operador rest para agrupar todos os elementos do array cestaDeFrutas, exceto os dois primeiros, em um novo array chamado frutasRestantes.



// como mencionado anteriormente, o operador spread também pode ser usado em chamadas de função para expandir elementos de um array em argumentos individuais:
function somar(a, b, c) {
    return a + b + c;
}
const numerosParaSomar = [1, 2, 3];
const resultado = somar(...numerosParaSomar);
print('Resultado da soma:', resultado);
// aqui, usamos o operador spread para passar os elementos do array numerosParaSomar como argumentos individuais para a função somar.



// podemos usar o spread em arrays também:
const numeros = [1, 2, 3];
const novosNumeros = [...numeros, 4, 5, 6];
print('Array novosNumeros:', novosNumeros);
// aqui, criamos um novo array novosNumeros que contém todos os elementos do array numeros, seguidos pelos números 4, 5 e 6.