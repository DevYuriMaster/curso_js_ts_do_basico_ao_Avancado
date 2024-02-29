
let timer;

function comecar() {
    timer = setInterval(showTime, 1000);
}

function parar() {
    clearInterval(timer);
}

function showTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = h + ':' + m + ':' + s;

    document.querySelector('.demo').innerHTML = txt;
}

/*
setTimeOut = Espera o tempo determinado e roda a função
setInterval = Executra a função mo intervalo de tempo determinado   
*/

/*
let timer;

function rodar(){
    timer = setTimeout(function() {
        document.querySelector('.demo').innerHTML = 'Rodou!!';
    }, 2000)
}

function parar(){
    clearTimeout(timer);
}

*/


