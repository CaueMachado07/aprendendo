function exibirLinhas() {
    console.log('\n>','==='.repeat(35), '¬ \n',);
};
exibirLinhas();

// 1 - Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.
const pessoa1 = {
    nome: 'Legolas',
    notas: [8, 7, 9, 8],
    calcularMediaNotas: function(){
        let somaNotas = this.notas.reduce((acc, nota) => acc + nota, 0);
        let mediaNotas = somaNotas / this.notas.length;
        return mediaNotas.toFixed(2);
    }
}

// Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada. Utilize as seguintes categorias:
// Desempenho excelente: média >= 9
// Bom desempenho: 7.5 <= média entre 7.6 e 8.9
// Desempenho regular: 6 <= média entre 6 e 7.5
// Desempenho insuficiente: média < 6
pessoa1.classificarDesenpenho = function(){
    let media = this.calcularMediaNotas();
    if(media >= 9){
        return 'Desempenho excelente';
    } else if(media >= 7.5 && media < 9){
        return 'Bom desempenho';
    } else if(media >= 6 && media < 7.5){
        return 'Desempenho regular';
    } else {
        return 'Desempenho insuficiente';
    }
};

// Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.
console.log(`A média do aluno ${pessoa1.nome} é ${pessoa1.calcularMediaNotas()}`);

// Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa.
console.log(`Sua classificação é de ${pessoa1.classificarDesenpenho()}.`);

exibirLinhas();

// 2 - Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes propriedades:
// marca (string): marca do carro.
// modelo (string): modelo do carro.
// ano (number): ano de fabricação do carro.
// cor (string): cor do carro.
const carro = {
    marca: 'Mitsubishi',
    modelo: 'eclipse',
    ano: 1995,
    cor: 'Verde',
}

// Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.
for (let chave in carro){
    console.log(`Chave: ${chave} | Valor: ${carro[chave]}`);
}

console.log('\n');

// Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.
carro.potencia = '140 cv';

// Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o nome da propriedade e o seu valor.
for (let chave in carro){
    console.log(`Chave: ${chave} | Valor: ${carro[chave]}`);
}

exibirLinhas();

// 3 - Crie um arquivo chamado metodosObjeto.js para realizar este exercício.
// Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:
// ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
// ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
// desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
// obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).
const carro2 = {
    marca: 'Mitsubishi',
    modelo: 'Eclipse',
    ano: 1995,
    cor: 'Verde',
    ligado: false,
    ligar: function(){
        if(this.ligado){
            return 'TRRRK! O carro já estava ligado!';
        } else {
            this.ligado = true;
            return 'Vruuuum! O carro está ligado!';
        }
    },
    desligar: function(){
        if(this.ligado){
            this.ligado = false
            return 'Vruuumm… o carro foi desligado';
        } else {
            return 'O carro já está desligado.';
        }
    },
    obterDetalhes: function(){
        let estado = this.ligado ? 'ligado' : 'desligado';
        return `Detalhes do carro: \nMarca: ${this.marca}, \nModelo: ${this.modelo}, \nAno: ${this.ano}, \nCor: ${this.cor}. \nEstado: ${estado}.`;
    },
}


// Em seguida, faça o seguinte:
// Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
console.log(carro2.ligar());
console.log(carro2.desligar());

console.log('\n');
// Chame o método obterDetalhes e imprima no console a string retornada.
console.log(carro2.obterDetalhes());

exibirLinhas();

// 4 - No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo. Defina a propriedade placa como não enumerável, para que ela não seja listada ao percorrer as propriedades do objeto.
Object.defineProperty(carro2, 'placa', {
    value: 'ABC-1234',
    enumerable: false,
});

// Utilize um loop for...in para percorrer as propriedades do objeto carro e imprima no console apenas as propriedades enumeráveis.
for (let chave in carro2){
    console.log(`Chave: ${chave} | Valor: ${carro2[chave]}`);
}

// Utilize o método Object.keys() para obter um array contendo apenas as chaves enumeráveis do objeto carro e imprima no console esse array.
console.log(Object.keys(carro2));

// Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado obtido.
console.log(`Placa do carro: ${carro2.placa}`);

exibirLinhas();

// 5 - Crie um novo objeto chamado carroNovo para representar as informações de um novo carro. O objeto deve ter as seguintes propriedades:
// marca (string): marca do novo carro.
// modelo (string): modelo do novo carro.
// ano (number): ano de fabricação do novo carro.
// cor (string): cor do novo carro.
const carroNovo = {
    marca: 'Toyota',
    modelo: 'Supra',
    ano: 1994,
    cor: 'Laranja',
};

// Utilize o operador de espalhamento (...) para criar um novo objeto chamado carroComNovosDetalhes que herde todas as propriedades do objeto carro e adicione as propriedades do objeto carroNovo.
const carroComNovosDetalhes = {...carro2, ...carroNovo};

// Imprima no console o objeto carroComNovosDetalhes para verificar as informações do carro com os novos detalhes.
console.log('Objeto carroComNovosDetalhes:\n');
console.log(carroComNovosDetalhes);

// Modifique o valor de uma propriedade no objeto carroComNovosDetalhes e imprima novamente o objeto no console para confirmar as alterações.
carroComNovosDetalhes.ligado = true;
console.log('\nAlterando o estado do carroComNovosDetalhes para ligado:\n');
console.log(carroComNovosDetalhes);
exibirLinhas();