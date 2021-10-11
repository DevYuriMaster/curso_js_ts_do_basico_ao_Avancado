
alert('Seja bem vindo a Calculadora! ');
var nome = prompt('Digite seu nome: ');
alert(nome + ', seja bem vindo!');
var operacao = prompt("Digite ''S'' para somar, ''L'' para subtrair, ''D'' para dividir, ''M'' para multiplicar: ");
if (operacao == 'S' || operacao == 's') {
    var s1 = parseInt(prompt('Digite primeiro número '));
    var s2 = parseInt(prompt('Digite segundo número '));
    var somar = s1 + s2;
    alert( 'A Soma entre os dois números é: ' + somar);

} else if (operacao == 'L' || operacao == 'l') {
    var a1 = parseInt(prompt('Digite primeiro número '));
    var a2 = parseInt(prompt('Digite segundo número '));
    var diminuir = a1 - a2;
    alert('A Subtração entre os dois números é: ' + diminuir);

} else if (operacao == 'D' || operacao == 'd') {
    var d1 = parseInt(prompt('Digite primeiro número '));
    var d2 = parseInt(prompt('Digite segundo número '));
    var dividir = d1 / d2;
    alert('A divisão entre os dois números é: ' + dividir);

} else if (operacao == 'M' || operacao == 'm') {
    var m1 = parseInt(prompt('Digite primeiro número '));
    var m2 = parseInt(prompt('Digite segundo número '));
    var multiplicar = m1 * m2;
    alert('A multiplicação entre os dois números é: ' + multiplicar );
}

