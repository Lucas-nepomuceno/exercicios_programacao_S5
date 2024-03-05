//inicializa classe funcionario
class Funcionario {
    //define os parametros que serão recebidos na instanciação
    constructor(nome,idade,salarioBase) {
        //recebe nome do objeto funcionario
        this.nome = nome;

        //recebe idade do objeto funcionario
        this.idade = idade;

        //recebe o salario base do funcionario que será usado no metodo calcular salario das subclasses
        this.salarioBase = salarioBase;
    }
    //metodo calcular salario que será herdado por Professor
    calcularSalario() {}
}

//inicializa a classe Professor que herda de Funcionario
class Professor extends Funcionario {
    //define os parametros que serão recebidos na instanciação
    constructor(nome, idade, salarioBase, horaAulaSemana) {
        //herda os seguintes atributos de professor
        super(nome,idade, salarioBase);
        //atributo disciplina pertencente à professor
        this.disciplina;

        //recebe a quantidade de horas de aula por semana do professor para ser usado no metodo calcular salario
        this.horaAulasSemana = horaAulaSemana;
    }
    //metodo que calcula o salario do professor multiplicando as horas de aula por semana pelo salario base e exibe no console
    calcularSalario() {
        console.log(`O salário desse professor é R$${this.horaAulasSemana*this.salarioBase},00`);
    }
}

//instanciação dos professores com atributos ficticios
let marcelo = new Professor("Marcelo", 27, 110, 40);
let ana = new Professor("Ana", 32, 150, 30);

//chamada do metodo calcularSalario, cujo resultado é exibido no console
marcelo.calcularSalario();
ana.calcularSalario();