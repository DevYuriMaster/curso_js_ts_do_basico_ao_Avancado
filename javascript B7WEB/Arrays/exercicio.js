// 1. No array abaixo qual número que pega a ferrari
let carros = ['BMW','Ferrari','Mercedes'];
let x = 1;
console.log('1. ' + carros[x]);

//2. Troque a Ferrari por Audi
carros[1] = 'Audi';
console.log('2. Lista com Audi:');
console.log(carros);

// 3. Adicione o volvo a lista
carros.push('volvo'); //Adiciona itens na array 
console.log('3. Lista com o volvo: ');
console.log(carros);

// 4. Exiba quantos itens tem no Array
console.log('4. itens no array: ');
console.log('A quantidade total de itens é: ' + carros.length);

