// Filter, Map, Reduce

//Rteone os numeros maiores que 10
/*
const numeros = [5, 50, 80, 1, 2, ,5, 8, 7, 11, 15, 22, 27 ];
function callbackFilter(valor, indice, array){
  return (valor > 10); 
}
const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);
*/

//Forma mais pragmática
//Retorne os numeros > 10

const numeros = [5, 50, 80, 1, 2, ,5, 8, 7, 11, 15, 22, 27 ];
const numerosFiltrados = numeros.filter(valor => valor > 10);



// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais d 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
  {nome: 'Yuri', idade: 62},
  {nome: 'Maria', idade: 23},
  {nome: 'Eduardo', idade: 55},
  {nome: 'Letícia', idade: 19},
  {nome: 'Rosana', idade: 32},
  {nome: 'Wallace', idade: 47},
];

const pessoasComNomeGrande = pessoas.filter(function(obj) {
  return obj.nome.length >= 5;
});
//console.log(pessoasComNomeGrande);


const pessoasBemVelhas = pessoas.filter(function(obj) {
  return obj.idade > 50;
});
//console.log(pessoasBemVelhas);

const nomeTerminaComA = pessoas.filter(function(obj) {
  return obj.nome.toLowerCase().endsWith('a');
});
console.log(nomeTerminaComA);







