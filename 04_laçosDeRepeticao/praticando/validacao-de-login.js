// Você está desenvolvendo o sistema de login de um app interno da empresa. O sistema precisa permitir que o usuário tente digitar sua senha corretamente até 3 vezes. Se digitar certo, exibe uma mensagem de acesso permitido. Se errar 3 vezes, bloqueia o acesso.

// Seu desafio é escolher o laço de repetição mais adequado para resolver este problema.

// Exemplo de entrada:

// const tentativas = ["1234", "admin", "secreto"];
// const senhaCorreta = "secreto";
// Copiar código
// Saída esperada:

// Tentativa 1 inválida.
// Tentativa 2 inválida.
// Acesso permitido!

// Caso atinja o número total de tentativas:
// Acesso bloqueado. Número máximo de tentativas atingido.

// E aí? Como você resolveria esse problema? Qual tipo de laço de repetição você usaria validar o login? Justifique sua escolha e faça o código de resolução, explicando os motivos de usar o laço escolhido no contexto desse problema.

const tentativas = ["1234", "admin", "secreto"];
const senhaCorreta = "secreto";
 
let i = 0;
let acessoLiberado = false;
 
while (i < tentativas.length && i < 3) {
  if (tentativas[i] === senhaCorreta) {
    console.log("Acesso permitido!");
    acessoLiberado = true;
    break;
  } else {
    console.log(`Tentativa ${i + 1} inválida.`);
  }
  i++;
}
 
if (!acessoLiberado) {
  console.log("Acesso bloqueado. Número máximo de tentativas atingido.");
}