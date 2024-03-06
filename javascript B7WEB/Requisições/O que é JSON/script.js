//JSON - JAVASCRIPT OBJECT NOTATION
//Sintaxe de objeto utilizada pra fazer comunicações entre requisições, enviando e recebendo informações

let pessoa = {
    nome: "Yuri",
    idade: 90,
}


/*Parse
Ao receber o resultado de uma requisição, ela estará em formato JSON porém dentro de uma string
Para acessa-lo devo utilizar o JSON.parse, com "" no objeto:

EX:
let pessoa = JSON.parse({"nome": "Yuri"});
*/

/*stringfy
Inverso do parse, transforma um objeto JSON em uma string de formato JSON

EX: 
JSON.stringfy({nome: 'Yuri', idade: 23});
resultado: {"nome": "Yuri", "idade": 23};
*/




