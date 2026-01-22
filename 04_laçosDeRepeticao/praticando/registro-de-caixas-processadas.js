// Você recebeu a tarefa de automatizar o painel de uma linha de empacotamento em um centro de distribuição. A cada ciclo, uma nova caixa é processada. A linha só pode processar no máximo 5 caixas válidas por vez. Mas, algumas caixas com número de identificação negativo precisam ser ignoradas, pois estão danificadas.

// Crie um programa que simule o processamento das caixas, exibindo as válidas e ignorando as danificadas. O programa deve parar o processamento assim que 5 caixas válidas forem processadas.

// Exemplo de entrada:
// const caixas = [12, -1, 8, 0, -5, 3, 7, 14];

// Saída esperada:

// Caixa processada: 12
// Caixa danificada, ignorada.
// Caixa processada: 8
// Caixa processada: 0
// Caixa danificada, ignorada.
// Caixa processada: 3
// Caixa processada: 7
// Limite de caixas processadas atingido!

const caixas = [12, -1, 8, 0, -5, 3, 7, 14];
let processadas = 0;
 
for (let i = 0; i < caixas.length; i++) {
  let valor = caixas[i];
 
  if (valor < 0) {
    console.log("Caixa danificada, ignorada.");
    continue;
  }
 
  console.log(`Caixa processada: ${valor}`);
  processadas++;
 
  if (processadas === 5) {
    console.log("Limite de caixas processadas atingido!");
    break;
  }
}