let lista = ['Ovo', 'Farinha', 'Corante', 'Massa'];
let lista2 = ['Pão', 'Banana', 'leite', 'Abacaxi'];
let lista3 = [45, 4, 9, 16, 25];
let lista4 = [];
let lista5 = [];
let lista6 = [];
let lista7 = [];


let res = lista;
let res2 = lista2;
let res3 = lista3;


let resj = lista.join('-'); //Transforma o array em uma string e separa as palavras pelo ítem divisor escolhido.
let resi = lista.indexOf('Corante'); //Retorna o índice da string dentro de um array
let resp = lista.pop(); //Remove o último ítem de um array
let ress = lista.shift(); //Remove o primeiro ítem de um array
let respu = lista.push('Prato')// Adiciona ítem ao final do array
lista[0] = 'Ovos'// Altera o array através de seu índice  
let removeAddAoFinal = res2.splice(1, 1);//Maneira simplificada de retirar um ítem de uma array
let juntaTudo = lista.concat(lista2); //Utilizado para oncatenar dois Arrays
let ordenado = lista2.sort(); //Utilizado para ordenar em ordem alfabética 
let decrescente = lista.reverse(); //Utilizado para reverter a ordem do array


lista4 = lista3.map(function (item) { //Map irá mapear ou realizar um loop no array, executando uma função em cada ítem.
    return item * 2
});

lista5 = lista3.filter(function (item) {// Método utilizado para criar um filtro no array
    if (item < 20) {
        return true;
    } else {
        return false;
    }
});

lista6 = lista3.every(function (item) { // Método utilizado para verificar condições verdadeira ou falsa para cada item do array, devolve verdadeiro ou falso.
    return (item > 3) ? true : false;
}); //.some Mesma lógica porém ele verifica se "algum" ítem respeita a condição.

lista7 = lista3.find(function (item) {
    return (item == 16) ? true : false;
}); //.FindIndex() Mesma lógica, só que entrega o índice do ítem

let linguagens = [
    { id: 1, nome: 'Java', tipo: 'Backend' },
    { id: 2, nome: 'CSS', tipo: 'Frontend' },
    { id: 3, nome: 'Ruby', tipo: 'Backend' },
    { id: 4, nome: 'JavaScript', tipo: 'Frontend' },
    { id: 5, nome: 'Node.js', tipo: 'Backend' },
    { id: 6, nome: 'React.js', tipo: 'Frontend' },
]
let linguagens2 = linguagens.find((linguagens) => linguagens.tipo === "Backend");
console.log(linguagens2);

console.log(res);
console.log(removeAddAoFinal);
console.log(res2);
console.log(juntaTudo);
console.log(ordenado);
console.log(decrescente);
console.log(lista5);