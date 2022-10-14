

// 1- exemplo
/*
function Carro(marcaAtribuida, precoAtribuido){
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
}

const honda = new Carro('Honda', 3000);
const fiat = new Carro('Fiat', 4000);

function Carro2(marca, precoInicial){
     this.taxa = 1.2;
    const precoFinal = precoInicial * this.taxa;
    this.marca = marca;
    this.precoAtribuido = precoFinal;
}
*/
// 2 - Exemplo Real

//Forma sem construção

/*
const Dom = {
    selector: 'li', 
    element(){
        return document.querySelector(this.selector);
    },
    ativar(){
        this.element().classList.add('ativar');        
    }
}

Dom.ativar();
Dom.selector = 'ul';
*/

//Forma com contructior function
/*
function Dom(selector) {
    this.element = function(){
        return document.querySelector(selector);
    }
    this.ativar = function(){
        this.element().classList.add('ativar');
    }
}

const li = new Dom('li');
const ul = new Dom('ul');

const lastLi = new Dom('li:last-child');
lastLi.ativar();
*/

// Exercício 
// Transforme o objeto abaixo em uma contructor function 
/*
const pessoa = {
    nome: 'Nome Pessoa',
    idade: 0, 
    andar(){
        console.log(this.nome + 'andou');
    }
}
*/

function criaPessoa(nome, idade){
   this.nome = nome;
   this.idade = idade;
    this.andar = function(){
        console.log(nome + 'andou');
    }
}

const Yuri = new criaPessoa('Yuri Victor Silva Barroso', 22);

console.log(Yuri);

