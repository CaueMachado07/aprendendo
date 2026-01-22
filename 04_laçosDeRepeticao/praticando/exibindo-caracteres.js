// Você é analista de segurança da informação em uma empresa e precisa validar a senha digitada por um novo usuário. Sua tarefa é mostrar, caractere por caractere, todos os símbolos digitados, para garantir que nada foi escondido.

// Como você pode percorrer e exibir todos os caracteres de uma senha digitada, um por um?

// Exemplo de entrada: Senha cadastrada: seguranç@2025

// Saída esperada:
// Caractere 1: s
// Caractere 2: e
// Caractere 3: g
// Caractere 4: u
// Caractere 5: r
// Caractere 6: a
// Caractere 7: n
// Caractere 8: ç
// Caractere 9: @
// Caractere 10: 2
// Caractere 11: 0
// Caractere 12: 2
// Caractere 13: 5 

const senhaCadastrada = 'seguranç@2025';

for ( let i = 0; i < senhaCadastrada.length; i++) {
    console.log(`Caractere ${i + 1}: ${senhaCadastrada[i]}`);
}