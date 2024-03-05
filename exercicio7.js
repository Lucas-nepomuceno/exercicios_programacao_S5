//inicializa a classe animal
class Animal {
    //parâmetros para os atributos
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
//instancia a classe nos objetos cachorro e gato
let cachorro = new Animal("cachorro", 8);
let gato = new Animal("gato", 10);

//chama o metodo dos objetos que exibe a mensagem no console
cachorro.descrever();
gato.descrever();