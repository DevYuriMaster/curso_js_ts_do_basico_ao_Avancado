
// Criando a classe para a Pessoa
class Person {
    age = 0;

    constructor(name) {
        this.name = name;
    }
}

//A classe estudante vai herdar propriedades da Pessoa

class Student extends Person {
    constructor(name, id,) {
        super(name); //Super é a Função usada para referenciar a propriedade da classe pai 
        this.id = id;
    }
}

let p1 = new Student("Yuri Victor", 1);
let p2 = new Student("Nicolas Lincoln", 2);
let p3 = new Student("Rafaela Moreira" ,3); 

console.log(`${p1.name} tem ${p1.age} anos e sua matricula é: ${p1.id}`);

//Desafio opcional
let msg = document.querySelector('.saudacao');

function boasVindas() {
    newMsg = document.createElement('h1');
    newMsg.innerText = `Boas-vindas ${this.name}, bons estudos!`;
    msg.append(newMsg);
}

boasVindas();


