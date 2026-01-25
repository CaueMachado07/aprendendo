// Imagine que você está desenvolvendo um sistema de sorteio interativo para um evento online. Os participantes se inscrevem com um nome e uma pontuação (baseada em atividades realizadas). O sistema deve:

// Sortear aleatoriamente um nome da lista de participantes.
// Exibir esse nome com um pequeno atraso (como se fosse um suspense).
// Avaliar se o participante foi premiado ou não com base na pontuação:
// Acima de 80: "Parabéns, você foi premiado!"
// Entre 50 e 80: "Você quase conseguiu! Fique de olho nos próximos sorteios."
// Abaixo de 50: "Infelizmente, não foi dessa vez."
// Sua missão é criar:

// Uma função para sortear um nome aleatoriamente.
// Uma função para exibir o nome sorteado com 2 segundos de atraso
// Uma função para avaliar a pontuação.
// Uma função final que organize o fluxo completo do sorteio.

// Exemplo de entrada:
// const participantes = [
//   { nome: "Laura", pontuacao: 92 },
//   { nome: "Pedro", pontuacao: 67 },
//   { nome: "Clara", pontuacao: 44 }
// ];
 
// realizarSorteio(participantes);

// Saída esperada:
// Sorteando...
// Participante sorteado: Pedro
// Pontuação: 67
// Você quase conseguiu! Fique de olho nos próximos sorteios.

// Uma função para sortear um nome aleatoriamente.
function sortearParticipante(lista) {
  const indice = Math.floor(Math.random() * lista.length);
  return lista[indice];
};

// Uma função para exibir o nome sorteado com 2 segundos de atraso
function exibirSorteio (participante){
  console.log("Iniciando o sorteio...");
    setTimeout(() => {
        console.log(`Participante sorteado: ${participante.nome}`);
        console.log(`Pontuação: ${participante.pontuacao}`);
        console.log(avaliarPontuacao(participante.pontuacao));
    }, 2000);
};

// Uma função para avaliar a pontuação.
function avaliarPontuacao (pontos){
  if (pontos > 80) {
      return "Parabéns, você foi premiado!";
  } else if (pontos >= 50) {
      return "Você quase conseguiu! Fique de olho nos próximos sorteios.";
  } else {
      return "Infelizmente, não foi dessa vez.";
  }
};

// Uma função final que organize o fluxo completo do sorteio.
function realizarSorteio(lista) {
  const sorteado = sortearParticipante(lista);
  exibirSorteio(sorteado);
}



const participantes = [
  { nome: "Laura", pontuacao: 92 },
  { nome: "Pedro", pontuacao: 67 },
  { nome: "Clara", pontuacao: 44 }
];

realizarSorteio(participantes)