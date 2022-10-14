// definepropriety -> Getters e Setters
function Produtos(nome, preco, estoque) {
this.nome = nome;
this.preco = preco;
let estoquePrivado = estoque;

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    // value: estoque, // valor
    //writable: true, // pode alterar
    configurable: true, // configurável
    get: function(){
      return estoquePrivado;
    },
    set: function(valor){
      if(typeof valor !== 'number') {
        throw new TypeError('Not is a number');
      }

    }
    
  });
}   

const p1 = new Produtos('Camiseta', 20, 3);
p1.estoque = 22;
console.log(p1.estoque);