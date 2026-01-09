// Pratique a criação, manipulação e iteração de arrays usando for, for...of e métodos funcionais como forEach, map e filter, aplicando esses conceitos em problemas do cotidiano. Vamos lá!

// função print
function print(text){
    console.log(text);
}

// 1. Lista de nomes
// Crie um array com 5 nomes. Use for para imprimir cada nome no console, um por linha.
let nomes = ['Cauê', 'Bruno', 'Carla', 'Daniel', 'Eva'];
for(let i = 0; i < nomes.length; i++){
    print(`Indice: ${[i]} - Nome: ${nomes[i]}`);
}


// 2. Adicionar e remover itens
// Comece com um array de frutas. Adicione uma nova fruta ao final com push() e remova a primeira com shift(). Mostre o array antes e depois.
let frutas = ['banana', 'laranja', 'manga'];
print(`Array inicial: [${frutas}]`);

// Adcionando um elemento ao final
frutas.push('limão');
print(`Array após usar o método .push() para adicionar a fruta 'limão' : [${frutas}]`);

// Removendo um elemento do inicio
let frutaRemovida = frutas.shift();
print(`Array após usar o método .shift() para remover a fruta ${frutaRemovida} ao inicio do array: [${frutas}]`);


// 3. Contar itens do array
// Crie um array com nomes de cidades e exiba no console a quantidade total de itens usando .length.
let cidades = ['Brasília', 'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador', 'Curitiba'];

print(`Cidades listadas: ${cidades}`);
print(`Total de cidades: ${cidades.length}`);


// 4. Somar todos os números
// Crie um array com 10 números. Use for para somar todos os valores e mostrar o total no final.
let numeros = [1,2,3,4,5,6,7,8,9,10];
let soma = 0;

for(let i = 0; i < numeros.length; i++){
    soma += numeros[i];
}

print(`A soma de todos os números do array é: ${soma}`)


// 5. Média de notas
// Crie um array com 4 notas. Some os valores e calcule a média, exibindo uma mensagem de "Aprovado" ou "Reprovado" com base na média >= 7.
let notasCaue = [9, 8, 10, 9.5];

// calculando a soma das notas usando o método reduce() quer realiza uma iteração no array, acumulando os valores em um único resultado
let somaNotas = notasCaue.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
let mediaNotas = somaNotas / notasCaue.length;

// usando operador ternário para verificar se a média é maior ou igual a 7 por se tratar de uma condição simples
let statusCaue = mediaNotas >= 7 ? "Aprovado" : "Reprovado";

print(`Aluno Caue: ${statusCaue}`);


// 6. Mensagens personalizadas com forEach
// Crie um array com nomes de usuários. Use forEach para imprimir "Olá, [nome]!" para cada um.
let usuarios = ['Cauê', 'Mariana', 'João', 'Fernanda', 'Lucas'];

// usando forEach com arrow function para iterar sobre o array e imprimir a mensagem
usuarios.forEach(nome => print(`Olá, ${nome}`));


// 7. Descontos com map
// Crie um array com preços de produtos. Use map para aplicar 10% de desconto em cada um e mostre os preços com desconto.
let precos = [100, 250, 50, 80, 300];

// usando map com arrow function para criar um novo array com os preços com desconto de 10%
let precosComDesconto = precos.map(preco => preco * 0.9); // ou let precosComDesconto = precos.map(preco => preco - (preco * 0.1));

print(`Preços originais: [${precos}]`);
print(`Preços com 10% de desconto: [${precosComDesconto}]`);


// 8. Filtrar valores altos
// Crie um array com idades. Use filter para retornar apenas as idades maiores ou iguais a 18 e exiba o resultado.
let idades = [12, 17, 18, 20, 15, 22, 30, 16, 25];

// usando filter com arrow function para criar um novo array com as idades maiores ou iguais a 18
let maioresDeIdade = idades.filter(idade => idade >= 18);

print(`Idades originais: [${idades}]`);
print(`Maiores de idade (18+): [${maioresDeIdade}]`);


// 9. Simulando carrinho de compras
// Crie um array de preços e calcule o valor total da compra. Depois, aplique um cupom de 20% de desconto e mostre o valor final.
let carrinho = [150, 200, 50, 100];
let totalCompra = carrinho.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
let desconto = totalCompra * 0.2;
let valorFinal = totalCompra - desconto;

print(`Total da compra: R$ ${totalCompra.toFixed(2)}`);
print(`Valor do desconto (20%): R$ ${desconto.toFixed(2)}`);
print(`Valor final após desconto: R$ ${valorFinal.toFixed(2)}`);



// 10. Lista de tarefas
// Crie um array com 5 tarefas (strings). Use filter para mostrar apenas as tarefas que ainda não foram marcadas como concluídas (use uma convenção como "[x]" para concluídas).
let tarefas = ['[ ] Comprar leite', '[x] Estudar JavaScript', '[ ] Fazer exercícios', '[x] Lavar a louça', '[ ] Ler um livro'];
// Filtrando tarefas pendentes usando filter() com arrow function usando startsWith() metodo de string para verificar se a tarefa começa com '[ ]'
let tarefasPendentes = tarefas.filter(tarefa => tarefa.startsWith('[ ]'));

print('Tarefas pendentes:');
tarefasPendentes.forEach(tarefa => print(tarefa));