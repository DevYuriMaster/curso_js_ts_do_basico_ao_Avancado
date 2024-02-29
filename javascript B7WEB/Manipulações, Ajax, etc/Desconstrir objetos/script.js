let pessoa = {
    nome: 'José',
    sobrenome: 'Inácio',
    idade: 90,
    social: {
        facebook: 'José Da Manga',
        instagram: 'ZezinManjuba332'
    },

};

//Desestruturar
/*
let {nome, sobrenome, idade} = pessoa; 
let {social: {facebook, instagram} } = pessoa;
*/


function nomeCompleto({nome, sobrenome}){
    return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto(pessoa));  

//Desconstruír Arrays
let info = ['Yuri Victor Brroso', 'Yuri', 'Victor Barroso', 'yurisboss_'];

let [nomeComplete, , , tagInsta] = info;

console.log(nomeComplete, tagInsta);



