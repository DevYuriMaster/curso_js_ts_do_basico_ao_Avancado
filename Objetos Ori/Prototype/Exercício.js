//Crie uma função contrutora de Pessoa
//Deve conter, nome, sobrenome e idade
//Crie um método no protótipo que retorne
//o nome completo da pessoa

function Pessoa(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;

    Pessoa.prototype.nomeCompleto = function(){
        //Lembrar de utilizar o template strings 
        return `${this.nome} ${this.sobrenome}`; 
    }
}

const Yuri = new Pessoa('Yuri', 'Victor Silva Barrroso', 22);
console.log(Yuri.nomeCompleto());

//Liste os métodos acessados por dados
//criados com nodeList
//HtmlCollection, Document



