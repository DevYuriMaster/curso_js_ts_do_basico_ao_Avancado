//addEventListener
//Adiciona uma função ao elemento, esta chamada de callback,
//que será ativada assim que certo evento ocorrer neste elemento.
 
const img = document.querySelector('img'); 
 // elemento.addEventListener(event, callback, options)
 img.addEventListener('click', function(){
  console.log('Clicou');
 });

 //Callback
 //É boa prática separar a função de callback do addEventListener, ou
//seja, declarar uma função ao invés de passar diretamente uma
//função anônima.
                                                     
 const imgs = document.querySelector('img');
 function callback(){
   console.log('clicou');
 }
 imgs.addEventListener('click', callback); //*
 imgs.addEventListener('click', callback);
 imgs.addEventListener('click', function(){
   console.log ('Clicou'); // undefined
 })
 img.addEventListener('click', () =>{
   console.log ('Clicou');
 })

 //event.preventDefault()
//Previneocomportamento padrão do evento no browser. No caso
//de um link externo, por exemplo, irá previnir que o link seja ativado.
 const linkExterno = document.querySelector('a[href^="http"]');
 function clickNoLink (event){
   event.preventDefault();
   console.log (event.currentTarget.href);
 }
 linkExterno.addEventListener('click', clickNoLink);


//Propriedades do Event
 const animaisLista = document.querySelector('.animais-lista');
 function executarCallback (event){
  const currentTarget = event.currentTarget; // this 
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.type; // tipo de evento
  console.log(currentTarget, target, type, path);
 animaislista.addEventlistener ('click', executarCallback);
 }

 //Tipos de Evento
 const h1 = document.querySelector('h1');

function handlerEvent(event) {
  console.log(event.type, event);
}

h1. addEventListener ('click', handlerEvent);
h1. addEventListener ('mouseenter', handlerEvent);
h1. addEventListener ('mousemove', handlerEvent);

window.addEventListener ('scroll', handlerEvent);
window.addEventListener ('resize', handlerEvent);
window.addEventListener ('keydown', handlerEvent)

//Utilizando o Keydown
function handleKeyboard (event) {
  if(event.key ==='a'){
    document.body.classList.toggle('azul');
  }
}  
window.addEventListener('keydown', handleKeyboard);

//forEacheEventos
// O método addEventListener é adicionado à um único
//elemento, então é necessário um loop entre elementos de uma
//lista, para adicionarmos à cada um deles.

const imgss = document.querySelectorAll('img');
function imgSrc (event){
  const src=event.currentTarget.getAttribute ('src');
  console.log (src);
}
imgss.forEach ((img) =>{
  img.addEventListener('click', imgSrc);
});
