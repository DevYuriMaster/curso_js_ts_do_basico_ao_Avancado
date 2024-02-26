// Criando a classe construtora 
class Person {

    steps = 0;

    constructor(name, age){
        this.name = name;
        this.age = age; 
    }
    // Criando uma ação ou método para a classe
    takeAStep(){
        this.steps++
    }
}

// Criando o objeto - Instância da classe
let p1 = new Person("Yuri", 23);
let p2 = new Person("Nicolas", 24);


console.log(`O ${p1.name} possui ${p1.age} anos de idade` );
console.log(`O ${p2.name} possui ${p2.age} anos de idade` );

//Iniciando o método 
p1.takeAStep();
console.log(`O ${p1.name} deu o total de ${p1.steps} passo(s)`);