// Criando a classe construtora 
class Person {

    steps = 0;
    _age = 0;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // Criando uma ação ou método para a classe
    takeAStep() {
        this.steps++
    }
    //Criando um getter pra pegar a idade
    get age() {
        return this._age;
    }

    get fullName(){
        return `${this.firstName} + ${this.lastName}`;
    }

    set age(x){
        if (typeof x == "number"){
            this._age = x;
        }
    }

    
}

// Criando o objeto - Instância da classe
let p1 = new Person("Yuri", "Victor silva Barroso");
let p2 = new Person("Nicolas", "Lincoln silva Barroso");

//
p1.age = 23
console.log(`O ${p1.fullName} possui ${p1.age} anos de idade`);


//Iniciando o método 
p1.takeAStep();
console.log(`O ${p1.name} deu o total de ${p1.steps}`);