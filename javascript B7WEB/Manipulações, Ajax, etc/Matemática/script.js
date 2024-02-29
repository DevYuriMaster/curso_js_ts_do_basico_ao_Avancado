// Arredondamento para cima
let novoValor = Math.round(3.60);

// Arredondamento para baixo
let valorBaixo = Math.floor(3.50);

// Valor absoluto 
let valorAbsoluto = Math.abs(-9.9783);

//Filtrar maior valor 
let valorMaximo = Math.max(20, 40, 30, 107, 12);

//Entrega valores aleatórios entre 0 e 1
let valorAleatorio = Math.random();


/*
Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:
    A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
    A mensagem "Reprovado", se a média for menor do que sete;
    A mensagem "Aprovado com Distinção", se a média for igual a dez.

    Se a média do aluno for maior que 6.7, o sistema devwerá arredondar para 7 eexibir Aprovado pior arredondamento:

*/


let botao = document.querySelector('#botao');


botao.addEventListener('click', calcularMedia);


function calcularMedia() {
    let nota1 = parseFloat(document.querySelector('#nota1').value);
    let nota2 = parseFloat(document.querySelector('#nota2').value);
    let media = (nota1 + nota2) / 2;
   
    let novoParagrafo = document.createElement('p');

    if (media >= 7 && media < 10) {
        novoParagrafo.innerHTML = `Aluno aprovado! ${media.toFixed(2)}`;
    } else if (media < 6.7 || media > 0 ) {
        novoParagrafo.innerHTML = `Aluno reprovado! ${media.toFixed(2)}`;
    } else if (media == 10) {
        novoParagrafo.innerHTML = `Parabéns pela nota exemplar, sua média é: ${media.toFixed(2)}`;
    } else if (media >= 6.7 && media < 7) {
        let mediaArredondada = media.Math.round(media);
        novoParagrafo.innerHTML = `Aprovado por arredondamento, sua média é: ${mediaArredondada.toFixed(2)}`;
    } else if (media > 10 || media < 0) {
        novoParagrafo.innerHTML = `Valores inválidos!`;
    }

    document.querySelector('div').appendChild(novoParagrafo);
}







