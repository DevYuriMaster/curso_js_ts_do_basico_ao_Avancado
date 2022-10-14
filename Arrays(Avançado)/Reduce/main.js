// Some todos os numeros (reduce)
// Retorne um Array só com pares (filter)
// Retorne um Array com o dobro dos valores (Map)

const numeros = [5, 50, 90, 1, 2, 3, 5, 6, 7, 11, 15, 22, 27];
const somaTudo = numeros.reduce(function(acumulador, valor, indice, array) {
 /* acumulador = acumulador + valor;
  console.log(acumulador);
  return acumulador;
*/
  acumulador += valor;
  return acumulador;
}, 0);

const valorPar = numeros.filter(function(valor) {
  return  (valor % 2 === 0); 
}); 

const numerosEmDobro = numeros.map(valor => valor * 2);

console.log(valorPar);

//Retorne a pessoa mais velha
const pessoas = [
  {nome: 'Yuri', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Letícia', idade: 19},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47},
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
  if(acumulador.idade > valor.idade) return acumulador;
  return valor;
});
console.log(maisVelha);












