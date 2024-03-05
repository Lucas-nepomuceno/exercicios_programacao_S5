class Carro {
    constructor() {
        this.velocidadeAtual = 0;
    }
    acelerar(velocidade) {
        this.velocidadeAtual += velocidade;
    }
}

let carro1 = new Carro()
console.log(carro1.velocidadeAtual);
carro1.acelerar(30);
console.log(carro1.velocidadeAtual);