// IIFE -> Immediately invoked function expression
(function(idade, peso, altura) {

  const sobrenome = 'Victor';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Yuri'));
  }

  falaNome();
  console.log(idade, peso, altura);

})(30, 80, 1.80);

/* 
É um Design Pattern também conhecido como Self-Executing Anonymous Function e contém duas partes principais. A primeira é a função anônima cujo escopo léxico é encapsulado entre parênteses. Isso previne o acesso externo às variáveis declaradas na IIFE, bem como evita que estas variáveis locais poluam o escopo global.
*/