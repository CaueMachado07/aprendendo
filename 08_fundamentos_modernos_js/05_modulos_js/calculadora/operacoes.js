export function soma(num1, num2) {
  return num1 + num2;
}

export function subtracao(num1, num2) {
  return num1 - num2;
}

export function multiplicacao(num1, num2) {
  return num1 * num2;
}

export function divisao(num1, num2) {
  return num1 / num2;
}

export function potencia(num, exp) {
  return num ** exp;
}

export function porcentagem(total, perc) {
  return (total * perc) / 100;
}


// perseba que a exportação é feita diretamente na declaração da função usando a palavra-chave 'export'.
// isso permite que essas funções sejam importadas em outros arquivos usando a sintaxe de módulos do ES6.
// diferente do CommonJS, onde usamos 'module.exports' e 'require()', aqui usamos 'export' e 'import'.
// isso é especialmente útil em ambientes modernos de JavaScript, como navegadores e Node.js (a partir da versão 12 com a flag apropriada ou quando o tipo do módulo é definido como 'module' no package.json).
// assim, podemos organizar nosso código em módulos reutilizáveis e manter uma estrutura mais limpa e modularizada.
