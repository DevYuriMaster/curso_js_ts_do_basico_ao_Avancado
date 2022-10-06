
// Crie um objeto com seus dados Pessoais
//Deve possuir nome e sobrenome
var Pessoa =  {
  nome: 'Yuri',
  sobrenome: 'Victor Silva Barroso',
  idade: 21,
  altura: 1.70,
}

//Crie um método no objeto anterior que mostre seu nome completo 
Pessoa.nomeCompleto = function (nome, sobrenome) {
  return this.nome + ' ' + this.sobrenome; 
}
//console.log(Pessoa.nomeCompleto());

//Modifiqye o valor da propriedade preco
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Chevrolet',
}

carro.preco = 3000;

//Crie um objeto de um cachorro que represente um labrador,
//preto com 10 anos, que late ao ver homem

var labrador = {
  cor: 'Preto',
  nome: 'Negão',
  latir(Pessoa) {
    if(Pessoa === 'homem') {
      return 'latir';
    } else {
      return 'Fique de boa';
    }
  },
  idade: 10,
}

console.log(labrador.latir());








