const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];

// Remova o primeiro valor de comidas e coloque em uma varidvel
const primValor = comidas.shift();
// Remova o ultimo valor de comidas e coloque em uma varidvel
const ultiValor = comidas.pop();
// Adicione ‘Arroz' ao final da array
const adicionarAoFinal = comidas.push('arroz');
// Adicione ‘Peixe' e ‘Batata’ ao inicio da array
const adicionarAoInicio = comidas.unshift('Peixe', 'batata');

console.log(primValor);
console.log(ultiValor);
console.log(adicionarAoFinal);
console.log(adicionarAoInicio);
console.log(comidas);

const estudantes =  ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];

//Ordene os estudantes em ordem alfabética,
const ordemAlfabetica = estudantes.sort();

//inverta a ordem dos estudantes 
const estudantesReverse = estudantes.reverse();

//Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'));

console.log(ordemAlfabetica);
console.log(estudantesReverse);




















