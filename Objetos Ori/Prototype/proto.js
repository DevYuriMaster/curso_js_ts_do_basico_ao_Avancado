//PROTOTYPE

//A propriedade prototype é um OBHJETO adcionado a uma função
// quando a mesma é criada

function Pessoa (nome, idade){
    this.nome = nome;
    this.idade = idade;

}

const Yuri = new Pessoa('Yuri', 22);

console.log(Pessoa.prototype); //Retorna o objeto
console.log(Pessoa.Yuri); // Undefined

//Acesso ao prototipo 
//O objeto criado utilizabndo  construtor, possui acesso aos métodos
// e propriedades do protótipo deste construtor. Lembrando, prototype é
// uma propriedade e função apenas.

//_proto_
//O novo objeto acessa os métodos e propriedades do protótipo
//através da propriedade proto. É papel da ENGINE fazer essa busca 
//NÃO devemos falar com o proto diretamente.

//Herança do Protótipo
//O objeto possui acesso aos métodos e propriedades do protótipo 
//do construtor responsável por criar esse obnjeto. O objeto abaixo possui
//acessso a métodos que nunca definimos, mas são herdados do protótipo de 
//Object.

Object.prototype;
Yuri.toString();
Yuri.isPrototypeOf();
Yuri.valueOf();


//Transformar uma nodeList em Array
const listaArray = Array.prototype.slice.call (lista) ;
