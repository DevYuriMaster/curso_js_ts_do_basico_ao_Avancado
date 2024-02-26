let nome = "Yuri Victor silva Barroso";
let CPF = "06200731101";

let resultado = nome.length; //Saber a quantidade de caracteries de uma string
let filtro = nome.indexOf('Victor'); //Entrega a posição de alguma palavra que esteja dentro da string
let parte = nome.slice(0, 6);//Entrega parte de uma string apartir do índice inicial até o último selecionado
let cpfExibido = CPF.slice(7, 11);
let cpfSite = "******" + cpfExibido;
let subStr = nome.substring(8, 3) //Começa com o índice do primeiro parâmetro, e o segundo se refere ao número de caractéres e não mais à posição
let repassar = nome.replace("Victor", "Gostoso");// Troca onde existe o primeiro parâmetro pelo segundo.
let nomeMaicusculo = nome.toUpperCase(); // Transforma o conteúdo da string em maiúsculo
let nomeMinusculo = nome.toLowerCase(); // Transforma os caractéres da string em minúsculos
let campoSemEspaco = nome.trim(); // Remove campos em branco da string
let posicaoChar = nome.charAt(5); // Devolve o caractére definido na posição 
let transformarArray = nome.split(' '); // Transformar uma string em array

console.log(resultado);
console.log(filtro);
console.log(parte);
console.log(cpfExibido);
console.log(cpfSite);
console.log(repassar);
console.log(nomeMaicusculo);
console.log(nomeMinusculo);
console.log(campoSemEspaco);


