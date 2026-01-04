// importando a função print
const { print } = require('../05_funcoes/01_fucoes');

// trabalhando com datas em JavaScript

// criando data para o momento atual, vamos usar a variavel 'agora' para o exemplo usando a funcionalidade Date()
const agora = new Date();

// temos armazenado na constante 'agora' a data atual.

// visualizar a data aatual.
print(agora); 
// Ao executar node data.js, obtemos uma string longa como '2026-01-03T21:51:10.475Z' onde 2026-01-03 representa ano, mês e dia. Há um "T" maiúsculo seguido pela hora 21:51:10, milissegundos e um "Z" no final. Este é um formato de data chamado ISO 8601, que podemos usar para trafegar datas em formato de string.
// o "Z" no final indica que a hora está em UTC (Tempo Universal Coordenado). Quer dizer que a hora não está ajustada para nenhum fuso horário específico, mas sim para o padrão global de tempo.

// podemos extrair separadamente cada uma das informações contidas na const agora usando alguns métodos
// exibindo o ano:
print('Ano: ', agora.getFullYear());

// exibindo o mês:
print('Mês: ', agora.getMonth(), ' - Importante: Aqui vai de 0 a 11, com o 0 representando o mês de Janeiro. Deve ser levado em consideração este comportamento do método.');
// aqui é importante lembrar que o mês começa do zero, ou seja, janeiro é 0, fevereiro é 1, março é 2 e assim por diante. Portanto, para exibir o mês corretamente, precisamos adicionar 1 ao valor retornado pelo método getMonth().
print('Mês (corrigido): ', agora.getMonth() + 1);

// exibindo o dia do mês:
print('Dia: ', agora.getDate());
// importante - para acessar o dia do MÊS usamos o getDate. O getDay retorna a posição do dia da SEMANA de acordo com o local time.

// exibindo o dia da Semana: 
print('Dia da semana: ', agora.getDay());

// exibindo horas:
print('Hora: ', agora.getHours());

// exibindo minutos:
print('Minutos: ', agora.getMinutes());

// exibindo segundos:
print('Segundos: ', agora.getSeconds());

// exibindo milissegundos
print('Milissegundos: ', agora.getMilliseconds());

// --------------------------------------------------------------------------------------------------------------------------------------------


// criando datas especificas
// temos duas formas de criar, 01- passando separadamente cada dado da data ou 02- usando o formato da ISO 8601.
// vamos usar o exemplo de uma data de aniversário em ambas 

// opção 01 - Deve-se ter maior atenção levando em consideração que os meses começam do 0 (zero).
// vamos usar a data 15 de Maio de 1990 (ano, mês, dia), para exemplificar como é o comportamento dos meses começando do zero.
const aniversario = new Date(1990, 5, 15);
print('Aniversário: ', aniversario);
// veja que ao exibir a data, o mês aparece como 06 (Junho) e não 05 (Maio), pois o mês 5 representa Junho, já que os meses começam do zero.

// opção 02 - usando o formato ISO 8601 (AAAA-MM-DD)
const aniversarioISO = new Date('1990-05-15');
print('Aniversário usando ISO 8601: ', aniversarioISO);
// aqui não precisamos nos preocupar com o mês começando do zero, pois ao usar o formato ISO 8601, o mês é representado corretamente.
// ambos os exemplos acima criam a mesma data de aniversário, mas usando abordagens diferentes.

// podemos também criar datas com horas, minutos, segundos e milissegundos usando ambos os métodos.
// exemplo usando o formato ISO 8601 com hora:
const dataComHora = new Date('1990-05-15T10:30:00');
print('Data com hora usando ISO 8601: ', dataComHora);

// exemplo usando o formato separado (ano, mês, dia, hora, minuto, segundo, milissegundo):
const dataComHoraSeparada = new Date(1990, 4, 15, 10, 30, 0, 0);
print('Data com hora usando formato separado: ', dataComHoraSeparada);
// ambos os exemplos acima criam a mesma data e hora, mas usando abordagens diferentes.
// lembre-se de que ao usar o formato separado, o mês ainda começa do zero.

// esses são os conceitos básicos para trabalhar com datas em JavaScript usando o objeto Date e seus métodos associados.
// você pode explorar mais métodos e funcionalidades do objeto Date conforme necessário para suas aplicações.

// --------------------------------------------------------------------------------------------------------------------------------------------

// formatando datas para diferentes localidades
// para formatar datas de acordo com diferentes localidades, podemos usar o método toLocaleDateString() do objeto Date.
// este método permite especificar a localidade desejada para formatar a data de acordo com as convenções locais.

print('Data Formatada (BR): ', agora.toLocaleDateString('pt-BR'));
print('Data Formatada (US): ', agora.toLocaleDateString('en-US'));
print('Data Formatada (JP): ', agora.toLocaleDateString('ja-JP'));
// no exemplo acima, formatamos a data atual (armazenada na constante 'agora') para três localidades diferentes: Brasil (pt-BR), Estados Unidos (en-US) e Japão (ja-JP).
// cada localidade tem seu próprio formato de data, então o resultado será diferente dependendo da localidade especificada.

// importante: o método toLocaleDateString() também pode receber um segundo parâmetro opcional, que é um objeto de opções para personalizar ainda mais a formatação da data, como exibir o dia da semana, mês por extenso, etc.
// exemplo com opções:
const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
print('Data Formatada com Opções (BR): ', agora.toLocaleDateString('pt-BR', opcoes));
// no exemplo acima, usamos o objeto de opções para exibir o dia da semana por extenso, o mês por extenso, o ano numérico e o dia numérico na formatação da data para a localidade do Brasil (pt-BR).
// você pode ajustar as opções conforme necessário para atender aos requisitos específicos de formatação de datas em sua aplicação.

// esses são os conceitos básicos para formatar datas em JavaScript usando o método toLocaleDateString() do objeto Date.