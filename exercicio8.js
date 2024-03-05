//inicializa a classe animal
class Animal {
    //define os parametros que serão recebidos na instanciação
    constructor(nome, idade) {
        //atributos
        this.nome = nome;
        this.idade = idade;
    }
    //metodos
    descrever() {
        console.log(`Este é um ${this.nome} com ${this.idade} anos`)
    }
}

//inicializa a classe Gato que herda de Animal
class Gato extends Animal {
    //define os parametros que serão recebidos na instanciação
    constructor(nome, idade, cor) {
        //atributos herdados
        super (nome, idade);
        //atributo especifico
        this.cor = cor;
    }
    //métodos
    miar() {
        console.log("Miau");
    }
}
//instanciação dos objetos cachorro e gato
let cachorro = new Animal("cachorro", 8);
let gato = new Gato("gato", 10, "branco");

//chamada dos metodos que exibem mensagens no console
cachorro.descrever();
gato.descrever();
gato.miar();