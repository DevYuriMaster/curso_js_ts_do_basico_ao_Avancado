//outerHTML, innerHTMLeinnerText
//Propriedades que retornam uma string contendo o html ou texto.É
//possível atribuir um novo valor para as mesmas
//element.innerText='Novo Texto'.

const menu = document.querySelector('.menu');
menu.outerHTML; // todo o html do elemento
menu.innerHTML; // html interno
menu.innerText; // texto, sem tags

menu.innerText = '<p>Texto</p>'; //a tag vai como texto 
menu.innerHTML = '<p>Texto</p>'; //a tag é renderizada 

//Transversing
//Como navegar pelo DOM, utilizando suas propriedades e métodos.

const lista = document.querySelector ('.animais-lista');
lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho

//Manipulando Elementos
//É possível mover elementos no dom com métodos de Node.

const listas = document.querySelector ('.animais-lista'); 
const contato = document.querySelector('.contato'); 
const titulo = contato.querySelector('.titulo'); 

contato.appendChild(lista); // move lista para o final de contato
contato.insertBefore (lista, titulo); // insere a lista antes det
contato.removeChild (titulo); // remove titulo de contato
contato.replaceChild (lista, titulo); // substitui titulo por lista

// Clonar Elementos
//Todo elemento selecionado é único. Para criarmos um novo
//elemento baseado no anterior,é necessário utilizar o método
//cloneNode()

const titulos = document.querySelector('h1'); 
const titulo2 = document.querySelector('h1');
const  novoTitulo = titulos;
// titulo, titulo2 e novo Titulo são iguais

const cloneTitulo = titulo.cloneNode (true); 
const contatoa = document.querySelector('.contato'); 
contatoa.appendChild (cloneTitulo);

// Código atividade adciona e remove a classe ativo
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');
tabContent[0].classList.add('ativo');


if(tabMenu.length && tabContent.length){
  tabContent[0].classList.add('ativo');

function activeTab(index) {
  tabContent.forEach((section) => {
    section.classList.remove('ativo');

  });
  tabContent[index].classList.add('ativo');
}

tabMenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click', function(){
    activeTab(index);
  })
});
}
