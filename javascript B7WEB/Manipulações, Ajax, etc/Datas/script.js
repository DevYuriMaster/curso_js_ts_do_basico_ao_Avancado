//Cria uma instância para receber a data
//let d = new Date;
//let d = new Date(2020, 0, 1, 12, 30, 12);
//let d = new Date('2020-01-01 15:42:17');

let d = new Date();

//Exibe o ano atual.
let novoAno = d.getFullYear();

//Exibe o mês atual.
let novoMes = d.getMonth();

//Eibe o dia da semana de 0 a 6.
let valorDiaDaSemana = d.getDay();

//Exibe o dia atual.
let diaAtual = d.getDate();

//Exibe as horas.
let horaAtual = d.getHours();

//Define a data de uma propriedade a parte do objeto Date - Mais objetivo. 
let dataDeHoje = Date.now();

//Altera o ano
let fullYer = d.setFullYear(2022);

//Acrescentar a data atual
d.setDate(d.getDate() + 100);

//Dia atual
let novoValor = d.getDay();

console.log(d);





//Simplifica o objeto removento o fusuo-horário
//console.log(d.toUTCString());
//console.log(d.toString());


