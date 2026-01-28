// 16 Adicionando e removendo itens de uma lista

// Você está desenvolvendo um sistema de tarefas do dia a dia. O sistema deve permitir que a pessoa usuária adicione uma nova tarefa ao final da lista e, em seguida, remova a última tarefa que foi adicionada. Escreva um programa que:

// Crie um array com três tarefas iniciais.
// Adicione uma nova tarefa no final da lista.
// Remova a última tarefa da lista.
// Exiba a lista após cada operação.

// Exemplo de entrada:
// const tarefas = ['Estudar', 'Lavar roupa', 'Fazer compras'];

// Saída esperada:
// Lista após adicionar: ['Estudar', 'Lavar roupa', 'Fazer compras', 'Pagar boletos']
// Lista após remover a última tarefa: ['Estudar', 'Lavar roupa', 'Fazer compras']

// função para adicionar uma nova tarefa ao final da lista
function addTarefa(lista, tarefa){
    return lista.push(tarefa);
}

// função para remover a ultima tarefa
function removerTarefa(lista){
    return lista.pop();
}

const tarefas = ['Estudar', 'Lavar roupa', 'Fazer compras'];

// Exibindo a lista original
console.log('Lista original: ', tarefas);

// Adicionando uma nova tarefa
addTarefa(tarefas, 'Ler um Livro');
console.log('Lista após adicionar: ', tarefas);

// Removendo a última tarefa
removerTarefa(tarefas);
console.log('Lista após remover a última tarefa: ', tarefas);