function apertou() {
    console.log("Apertou");
}

function segurou() {
    console.log("Segurou");

}
function soltou() {
    console.log("Soltou");
}

// OU

const input = document.querySelector('input');


input.document.addEventListener('keydown', apertou);
input.document.addEventListener('keypress', segurou);
input.document.addEventListener('keyup', soltou);


