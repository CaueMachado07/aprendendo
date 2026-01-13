

// // Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.
// const frutas = ['laranja', 'banana'];
// console.log(frutas);

// frutas.unshift('uva');
// console.log(frutas);

// // Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.
// const meuArray = [];

// meuArray.push(7);
// meuArray.push(14);
// meuArray.push(21);

// console.log(meuArray);

// meuArray[0] = meuArray[0] * 2;

// console.log(meuArray);


// // Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.
// const clinica = [];

// clinica.push('cachorro');
// clinica.push('gato');
// clinica.push('papagaio');

// console.log(clinica);

// clinica.shift();
// console.log(clinica);

// clinica.shift();
// console.log(clinica);

// clinica.shift();
// console.log(clinica);

// // Partindo para o próximo desafio, temos uma lista de estudantes e precisamos dividir essa lista em duas, com a mesma quantidade de estudantes.
// const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

// // estrutura básica do slice.(): arr.slice(início, fim)
// const sala1 = listaEstudantes.slice(0, listaEstudantes.length/2);
// const sala2 = listaEstudantes.slice(listaEstudantes.length/2);
// // lembrando que o slice.() não altera o array original.

// console.log(sala1);
// console.log(sala2);

// // Teremos uma lista de chamadas com seis estudantes. No entanto, Ana e Caio, que são duas pessoas estudantes, mudaram de escola e Rodrigo entrou nessa sala no lugar delas. Ou seja, agora temos que manipular uma lista, um array.
// // para esta atividade vamos usar os métodos splice() e push().
// // estrutura básica do splice(): arr.splice(índice, número de elementos a remover, elemento1, elemento2, ...)

// const listaEstudantes2 = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];
// console.log(listaEstudantes2);

// // removendo os alunos Ana e Caio.
// listaEstudantes2.splice(1,2);
// console.log(listaEstudantes2);
// // lembrando que o splice() altera o array original

// listaEstudantes2.push('Rodrigo');
// console.log(listaEstudantes2);



// // Haverá uma palestra sobre padrões de projeto para salas de JavaScript e Python. Nós precisamos unir ambas as salas em uma única lista que exiba todas as pessoas estudantes.

// const salaJS = ['Evaldo', 'Camis', 'Mari'];
// const salaPython = ['Ju', 'Leo', 'Raquel'];

// const auditorio1 = salaJS.concat(salaPython);
// console.log(`Unsando concat(): ${auditorio1}`);

// const auditorio2 = [...salaJS, ...salaPython]
// console.log(`Unsando spread: ${auditorio2}`);


// // Crie uma lista com os seguintes nomes de estudantes: 
// // 'João', 'Juliana', 'Caio', 'Ana'

// // Crie uma lista com as seguintes médias: 
// // 10, 8, 7.5, 9 

// // Crie uma lista que contém as duas listas acima.

// const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
// const medias = [10, 8, 7.5, 9];

// const lista = [alunos, medias];

// console.log(
// `a aluna da posição 1 da lista é: ${lista[0][1]}.
// a nota dessa aluna é ${lista[1][1]}`
// );

// console.log(lista[0]);


