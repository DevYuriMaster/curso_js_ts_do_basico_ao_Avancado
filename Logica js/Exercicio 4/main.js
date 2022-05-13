// 1 - Escreva uma função que recebe 2 números e retorne o maior deles
// Minha resposta
/*
let num1 = 7;
let num2 = 10;

function maiorNumero(){
  if(num1 >= num2)
  console.log(num1, 'é maior que', num2);
}  if (num2 >= num1){
  console.log(num2, 'é maior que', num1);
} else {
  console.log('Deixa quieto');
}
*/

//Resposta do professor
/*
function max(x, y){
 return x > y ? x : y;
}
console.log(max(10, 2));
*/

// -2 Escreva una função chamada ePaisagem que receba dois // argumentos, largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

/*
function ePaisagem(largura , altura){
  return largura > altura ? true : false; 
}
console.log(ePaisagem(1920, 1080));
 */

// 3- Escreva uma função que recebe um número e
// retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 ou 5 = FizzBuzz
// Número NÃO é divisível por 3 ou 5 = Número
// *Checar se o número é realmente um número
// Use a função com números de 0 a 100
function fizzBuzz(n) {
  if (typeof n !== 'number') return NaN;
  if (n % 3 === 0 && n % 5 === 0) return '3 e 5 FizzBuzz';
  if (n % 3 === 0) return '3 Fizz';
  if (n % 5 === 0) return '5 Buzz';
  return n;
}

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}