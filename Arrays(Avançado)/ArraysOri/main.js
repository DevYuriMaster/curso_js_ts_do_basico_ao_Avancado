// Crie um array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var ganhaCopa = [1959, 1962, 1970, 1994, 2002];

//Interaja com o array utilizando o loop, para mostrar
//no console a seguinte mensagem 'O brasil ganhou a copa'
for (var a = 0; a < ganhaCopa.length; a++) {
  console.log(`O Brasil ganhou a copa de   ${ganhaCopa[a]}`);
}
//interaja com um loop nas frutas abaixo e pare ao chegar em frutas
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melancia"];

for (let fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if (frutas[fruta] === "Pera") break;
}

//Coloque a yltima fruta de um array acima de uma variável
//sem remover o mesmo do array
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);
