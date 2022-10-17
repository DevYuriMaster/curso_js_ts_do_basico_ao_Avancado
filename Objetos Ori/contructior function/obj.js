

/*Constructor Functions

Para isso existem as Constructor Functions, ou seja, Fung¢des
Construtoras que sao responsaveis por construir novos objetos
sempre que chamamos a mesma.
*/


function Carro() {
this.marca = 'Marca'; 
this.preco = 0;
}

const honda = new Carro();
honda.marca = 'Honda';
honda.preco = 4000;

const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.preco = 3000;

/*

new Keyword

A palavra chave new é responsavel por criar um novo objeto
baseado na função que passarmos a frente dela.
*/

const honda = new Carro();

// 1 Cria um novo objeto
honda = {};

// 2 Define o protótipo
honda.prototype = Carro.prototype;

// 3 Aponta a varidvel this para o objeto
this = honda;

// 4 Executa a função, substituindo this pelo objeto.
honda.marca = 'Marca';
honda.preco = 0;

//5 retorna o novo objeto

return honda = {
    marca: 'marca',
    preco: 0
}


