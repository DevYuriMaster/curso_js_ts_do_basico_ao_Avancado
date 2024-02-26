
// Criando a classe para a Pessoa
class Person {
    //Utiliza-se estatic para definir uma variável única da classe, que não pode ser fácilmente acessada e independente do objeto
    static hands = 2;
    age = 0;

    constructor(name) {
        this.name = name;
    }
}

let p1 = new Person("Yuri");

console.log(`O ${p1.name}, possui ${Person.hands} mão(s)!`); //Para acessar a váriável statica deve-se utilizar o nome da classe antes





