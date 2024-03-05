/*Toda array herda os métodos e propriedades do prototipo do
construtor Array.*/


const instrumentos = ['Guitarra', 'Baixo', 'Violao'];
const carros = new Array('Corola', 'Mustang', 'Honda');

carros[1] // Mustang
carros[2] =  'ferrari';
carros[10] = 'Parati';
carros.length; //11


// Array.isArray()
//Verifica se o valor passado é uma array e retorna um valor
//booleano

let li = document.querySelectorAll('li');
Array.isArray(li); //false

li = Array.from(li); //Array
Array.isArray(li); // true

//Array.of(), Array() e new Array()
//Verifica se o valor passado é uma array e retorna um valor
//booleano. A palavra chave new nao é necessaria para utilizar o
//construtor Array.

Array.of(10); // [10]
Arzay.of(1,2,3,4); // [1,2,3,4]
new Array(5); // [,,,,]
Array(5);
Array(1, 2, 3, 4); // [1, 2, 3, 4]

// Métodos modificadores [];sort 
/* Os proximos métodos que vamos falar sobre, sao métodos
modificadores (mutator methods). Além de retornarem um valor,
eles modificam a array original. [].sort() organiza a pelo
unicode.*/

const instrumentos = ['Guitarra', 'Baixo', 'Violao'];
instrumentos.sort() ;
instrumentos; // ['Baixo', ‘Guitarra', Violdo]

const idades = [32,21,33,43,1,12,8];
idades.sort();
idades; // [1, 12, 21, 32, 33, 43, 8]


//[].unshift() .push()
/*[].unshift() adiciona elementos ao inicio da array e retorna o
length da mesma. [].push() adiciona elementos ao final da
array e retorna o length da mesma.*/

const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Honda', 'Kia'); // 5
carros; // ['Honda', 'Kia', 'Ford', ‘Fiat’, ‘VW'];

carros.push('Ferrari'); // 6
carros; // ['Honda', '‘Kia', ‘Ford', 'Fiat', 'VW', '‘Ferrari'];

//[].shift e [].pop()

//[].shift() remove o primeiro elemento da array e retorna o mesmo 
//[].pop remove o último elemento da array e retorna o mesmo.

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
const primeiroCarro = carros.shift(); // ‘Ford’
carros; // ['Fiat', 'VW', ‘'Honda'];

const ultimoCarro = carros.pop(); // ‘Honda’
carros; // ['Fiat', 'Vw'];

// [].reverse() Inverte a ordem da Array e retorna uma nova Array.
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
carros.reverse(); // ['Honda', '‘Vw', 'Fiat', 'Ford'];

//[].splice()
//[]-splice(index, remover, iteml, item2, ...) adiciona
//valores na array a partir do index. Remove a quantidade de itens
//que for passada no segundo parametro (retorna esses itens).

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
carros.splice(1, 0,'Kia' 'Mustang'); // []
carros; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', '‘Honda']

carros.splice(3, 2, 'Ferrari'); // ['Fiat', '‘Vw']
carros; // ['Ford', 'Kia', 'Mustang', 'Ferrari', ‘Honda']

/*[].copyWithin(alvo, inicio, final) a partir do alvo, ele
irá copiar a array comecgando do inicio até o final e vai preencher o
mesma com essa copia. Caso omita os valores de inicio e final, ele
ira utilizar como inicio o 0 e final o valor total da array.
*/

['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3);
// ['Item1', 'Item2', 'Item1', ‘Item2']

['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);
// ['Item1', 'Item2', 'Item3', 'Item1']


//[].fill(valor, inicio, final) preenche a array com o valor de início até o fim (Preencher tudo)


['Item1', 'Item2', 'Item3', 'Item4'].fi11('Banana');
// (['Banana', 'Banana', 'Banana', 'Banana']

['Item1', 'Item2', 'Item3', 'Item4'].fi11('Banana', 2);
// ['Item1', ‘Item2', 'Banana', 'Banana']

['Item1', 'Item2', 'Item3', 'Item4'].fi11('Banana', 1, 3);
// ['Item1', 'Banana', 'Banana', '‘Item4']

//Método de acesso [].concat()

/*Os métodos abaixo nao modificam a array original, apenas
retornam uma array modificada. [].concat() ira concatenar a
array com 0 valor passado.
*/

const transportei1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transportez2) ;

// ('Barco', 'Aviao', ‘Carro', 'Moto'];


/*[].includes(valor) verifica se a array possui o valor e retorna
true ou false. [].indexOf(valor) verifica se a array possui 0
valor e retorna o index do primeiro valor na array. Ja o
[]-lastIndexOf(valor) retornao index do ultimo.*/

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

linguagens.includes('css'); // true 
linguagens.includes('ruby'); // false
linguagens.indexOf('python'); // 4
linguagens.indexOf('js'); // 2 primeiro ítem
linguagens.lastIndex0f('js'); // 5 ultimo item

//[].join 

/*[].join(separador) junta todos os valores da array e retorna
uma string com eles. Se vocé passar um valor como parametro,
este será utilizado durante a junção de cada item da array.
*/

const linguagens = ['html', 'css', 'js', 'php', 'python'];
linguagens.join(); // ‘'htmlcssjsphppython'
linguagens.join(' '); // ‘html css js php python'
linguagens.join('-_-'); // 'html-_-css-_-js-_-php-_-python'

//[].slice

/*[].slice(inicio, final) retornaos itens da array
comegando pelo inicio e indo até o valor de final.
*/

const linguagens = ['html', 'css', 'js', 'php', 'python'];
linguagens.slice(3) //['php', 'python']; 
linguagens.slice(1, 4); // ['css', '‘js', 'php'];

const cloneLinguagens = linguagens.slice() ;



































