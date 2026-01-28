// 20 Filtrando valores

// Você está desenvolvendo um sistema de controle de acesso para um evento exclusivo. Cada participante fornece seu nome e idade, mas apenas maiores de 18 anos podem entrar. Seu objetivo é exibir quem teve acesso liberado e criar uma lista final apenas com os nomes desses participantes.

// Para isso, você precisa:

// Criar um array com objetos contendo nome e idade de cada participante.
// Usar o método filter() para:
// Selecionar somente os participantes com 18 anos ou mais.
// Exibir no console a mensagem "Acesso liberado para: [nome]" para cada um que passou.
// Usar o método map() para criar um novo array com apenas os nomes dos autorizados.
// Exibir a lista de aprovados no final.
// Exemplo de entrada:

// const participantes = [
//   { nome: 'Ana', idade: 17 },
//   { nome: 'Bruno', idade: 22 },
//   { nome: 'Carla', idade: 19 },
//   { nome: 'Daniel', idade: 15 },
//   { nome: 'Eduarda', idade: 25 }
// ];

// Saída esperada:
// Acesso liberado para: Bruno
// Acesso liberado para: Carla
// Acesso liberado para: Eduarda
// Lista de aprovados: ['Bruno', 'Carla', 'Eduarda']







// Usar o método filter() para:
// Selecionar somente os participantes com 18 anos ou mais.
function filtrarMaiorIdade(participante){
    return participante.filter(p => p.idade >= 18);
}



function filtrarParticipante(lista){
    return lista.filter(participante => {
        participante.idade >= 18 ? console.log(`Acesso liberado para: ${participante.nome}`) : false;
        return participante.idade >= 18; 
    });
};

// Usar o método map() para criar um novo array com apenas os nomes dos autorizados.
function listarAprovados(lista){
    return lista.map(participante => participante.nome);
}


// array com objetos contendo nome e idade de cada participante.
const participantes = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Bruno', idade: 22 },
  { nome: 'Carla', idade: 19 },
  { nome: 'Daniel', idade: 15 },
  { nome: 'Eduarda', idade: 25 }
];

// Exibir no console a mensagem "Acesso liberado para: [nome]" para cada um que passou.
const autorizados = filtrarParticipante(participantes);

// novo array com apenas os nomes dos autorizados.
const aprovados = listarAprovados(autorizados);

// Exibir a lista de aprovados no final. usando join para formatar a saída
console.log('Lista de aprovados:', aprovados.join(', '));