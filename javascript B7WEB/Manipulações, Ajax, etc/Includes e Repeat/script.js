let lista = ['Ovo', 'Café', 'Arroz', 'Feijão', 'Macarrão'];

//Inccludes irá mostrar de forma simplificada se um írem existe em um array. Serve em arrays e Strings

console.log(lista.includes('Arroz'));

//Função Repeat facilita a repetição de variáveis.

let nome = 'Yuri';

console.log(nome.repeat(12));


//Keys, Entries e Values
let pessoa = {
    nome: 'José',
    sobrenome: 'Roberto',
    idade: 23
};

console.log(Object.keys(pessoa));
console.log(Object.entries(pessoa));
console.log(Object.values(pessoa));

//String, padStart, padEnd
let telefone = '5';

console.log(telefone.padEnd(9, '*')); // O prinmeuiro valor define o mínimo de caracteres 
//que a string deve ter, o segundo mostra como a string dever ser preenchida. Para o final

console.log(telefone.padStart(9, '*')); // A mesma coisa do padEnd só que preenche no início.

//EX

let card = '1234324534536353';

let lastDigts = card.slice(-4);

let maskCard = lastDigts.padStart(16, '*');

console.log(`Esse é seu cartão ${maskCard} ?`);



