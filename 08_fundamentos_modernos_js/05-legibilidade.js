// Legibilidade é crucial para manter e escalar o código ao longo do tempo.
// Nomes de variáveis e funções devem ser descritivos e claros.
// Comentários devem ser usados para explicar "por quê" algo é feito, não "o quê" está sendo feito.

// Exemplo de má legibilidade
let x = 10;
let y = 20;
let z = x + y;
console.log(z); 
// O que são x, y, z? O que esse código faz?

// Exemplo de boa legibilidade
let primeiroNumero = 10;
let segundoNumero = 20;
let soma = primeiroNumero + segundoNumero;
console.log(soma);
// Agora está claro que o código está somando dois números e exibindo o resultado.

// Outro exemplo de má legibilidade
function f(a, b) {
    return a * b;
}
let r = f(5, 10);
console.log(r);
// O que a função f faz? O que são a, b, r?
// Exemplo de boa legibilidade
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}
let resultado = multiplicar(5, 10);
console.log(resultado);
// Agora está claro que a função multiplica dois números e o resultado é exibido.

// case sensitive - diferencia maiúsculas de minúsculas
let idade = 25;
let Idade = 30;
console.log(idade); // 25
console.log(Idade); // 30



// Dicas para melhorar a legibilidade:
// 1. Use nomes descritivos para variáveis e funções.
// 2. Mantenha funções curtas e focadas em uma única tarefa.
// 3. Use espaçamento e quebras de linha para separar blocos lógicos de código.
// 4. Adicione comentários úteis onde necessário, mas evite comentários óbvios.
// 5. Siga convenções de codificação consistentes (como camelCase para variáveis e funções).
// 6. Revise e refatore o código regularmente para melhorar sua clareza.

// Lembre-se: código é lido muito mais vezes do que é escrito. Priorize a legibilidade!
