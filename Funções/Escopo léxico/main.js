const nome = "Luiz";

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = "Otávio";
  falaNome();
}
usaFalaNome();

/* Algumas vezes podemos ser tentados "reutilizar" uma variável para representar dois conceitos diferentes. Essa prática deve ser evitada, pois leva a um código não efetivo e de difícil leitura. Por isso, sempre recomendo a utilização de const e let quanto estiver em um código que permita seu uso, ou seja, que utilize o ES6. Caso você tenha uma variável que não precise que seu valor seja reatribuído, faça de const a sua escolha padrão. Seu código fica mais limpo e declarativo. Caso a reatribuíção seja necessária, como é o caso de contadores, acumuladores e outros mecanismos de loops, utilize let. Também vai indicar que a variável somente é utilizada no bloco onde ela foi declarada, e não na função inteira. */
