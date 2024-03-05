class Carro {
    constructor(marca){
        this.marca = marca;
    }
    ligar() {
        console.log("Carro Ligado!");
    }
}

carro1 = new Carro("Hyundai");
carro1.ligar()