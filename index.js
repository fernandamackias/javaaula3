class usuario{
    constructor (nome, idade, signo, email, endereco, altura, genero)
{
this.nome = nome,
this.idade = idade,
this.signo = signo,
this.email = email,
this.endereco = endereco,
this.altura = altura,
this.genero = genero
}

nomeIdade = function(){
    return this.nome + " " + this.idade;
}
}
class Professor extends Pessoa{
    constructor (nome, idade, signo, email, altura, genero, salario, turmas){
        super(
            nome,
            idade,
            signo,
            email,
            altura,
            genero
        );
this.salario = salario,
this.turmas = turmas
    }
}

const prof = new Professor("leonardo",25,1.88,"M",10000,16);
console.log(prof);
