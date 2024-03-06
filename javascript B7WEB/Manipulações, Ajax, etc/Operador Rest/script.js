//É passado os "..." no parâmetro para que a função possa receber parâmetros indeterminados em seu escopo.

function adicionar(...numeros){
    console.log(numeros);
}

adicionar(1, 2, 3, 4);

function adicionarNomes(...nomes){
    console.log(nomes);
}

adicionar('Nyo', 'Nani', 'Diogo','Ferreira');

