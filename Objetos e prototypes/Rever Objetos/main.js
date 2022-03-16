/*
const pessoa1 = new Object();
pessoa1.nome = 'Yuri';
pessoa1.sobrenome = 'Victor';
pessoa1.idade = 20;
pessoa1.falarNome = function(){
  return (`${this.nome} está falando seu nome!`);
};

pessoa1.getDataNascimento = function() {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
  console.log(pessoa1[chave]);
}
*/

/*
// factory function 

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto(){
      return `${this.nome} ${this.sobrenome}`;
    }
  };
}

const p1 = criaPessoa('Yuri', 'Victor');
//console.log(p1.criaPessoa);
*/


// / constructor functiobn
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

// {} <- this -> this
//Object.freeze(p1); - Trancar o valor da variável
const p1 = new Pessoa('Yuri', 'Victor');
const p2 = new Pessoa('Nicolas', 'Lincoln');
console.log(p1);
console.log(p2);











