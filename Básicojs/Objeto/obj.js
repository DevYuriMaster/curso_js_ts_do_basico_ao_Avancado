function criaPessoa(nome, sobrenome, idade) {
  return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Yuri', 'Victor', 21);
const pessoa2 = criaPessoa('Nicolas', 'Lincoln', 22);
const pessoa3 = criaPessoa('Elcio', 'Barroso', 50);
const pessoa4 = criaPessoa('Cleide', 'Gomes', 39);
const pessoa5 = criaPessoa('Magali', 'Dog', 1);

console.log(pessoa1.nome);


