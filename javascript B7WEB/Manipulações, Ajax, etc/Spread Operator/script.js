// Com  arrays
let numeros = [1, 2, 3 ,4];

let outros = [...numeros, 5, 6, 7, 8];

console.log(outros);

// Com objetos

let info =  {
    nome: 'Yuri',
    sobrenome: 'Victor',
    Idade: '23'
}

let novasInfos = {
    ...info,
    cidade: 'Ceilândia',
    estado: 'DF'
}

console.log(novasInfos);

//Funcionamento do spread em funções

function adicionarInfo(info){
    let outrasInfos = {
        ...info,
        status: 0,
        token: 'ABCK%$#',
        data_cadastro: '...'
    };

    return outrasInfos;
}

