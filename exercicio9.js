//inicializa a classe SomadorDeNotas
class SomadorDeNotas {
    //define os parametros que serão recebidos na instanciação
    constructor() {
        //atributos
        this.total = 0;
    }
    //metodos
    adicionarNota(nota) {
        this.total += nota;
    }
    verTotal() {
        console.log(this.total);
    }
}
//instanciação de SomadorDeNotas: somador
let somador = new SomadorDeNotas();
//chama o metodo que adiciona notas ao total
somador.adicionarNota(6);
somador.adicionarNota(10);
somador.adicionarNota(3);
somador.adicionarNota(9);

//chama o metodo para exibir o total somado no console
somador.verTotal()