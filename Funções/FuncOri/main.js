// 1 - Crie uma função que verifique o Imc
function imc(peso, altura) {
  const imc = peso / (altura ** 2 );
  return imc;
}

//console.log(imc(75, 1.71));


// 2 - Crie uma função que retorne o perimetro do quadrado
  function perimetroQuadrado(lado) {
    return lado * 4; 
  }

//  console.log(perimetroQuadrado(5));


// 3 - Crie uma função que retorne seu nome completo:

  function nomeCompleto(nome, sobrenome) {
    return nome + ' ' + sobrenome;
  }

// 4 - Crie uma função que verifica se um número é par

function numeroPar(numero){
  var modulo = numero % 2;
  if(modulo === 0) {
    return "O número é par";
  } else {
    return "numero impar";
  }
}
// console.log(numeroPar(9));

// 5 - Dado do argumento passado nela (tupeof)
function tipoDeDado(dado) {
  return typeof dado;
}

//console.log(tipoDeDado());

// 6 - Utilize o addEventListner uma função nativa do javascript. Utilizar essa função para mostrar seu nome completo quando so scroll aparecer

addEventListener('scroll', function(){
  return console.log('Yuri Victor Silva Barroso');
});



