
//Elementos
const ul = document.querySelector('ul');
const input = document.querySelector('input');

//Funções
function handleKeyUp(e) {
    if (e.key == 'Enter') {
        let newLi = document.createElement('li');
        newLi.innerHTML = input.value;
        ul.appendChild(newLi);
        input.value = ' '
    }
}

//Eventos
input.addEventListener('keyup', handleKeyUp);