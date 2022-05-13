// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
//o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove('ativo');
  })
  event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((link) => {
  link.addEventListener("click", handleLink);
});
//Selecione todos os elementos do site começando a partir do body
//ao click mostre exatamente os elementos que estão sendo clicados

/*const todosElementos = document.querySelectorAll('body *');

function seguraElement(segura){
  console.log(segura.currentTarget);
}

todosElementos.forEach((event) => {
  event.addEventListener("click", seguraElement);
}); 
*/

// Utilizand o ocódigo anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

const todosElementos = document.querySelectorAll('body *');

function seguraElement(segura){
  segura.currentTarget.remove();
}

todosElementos.forEach((event) => {
  event.addEventListener("click", seguraElement);
}); 

//Se o usuário clicar na tecla (t), aumente todo texto do site

function hundleKeyborad(event){
  if (event.key==='t') {
    document.documentElement.classList.toggle('textomaior');
  }
}
window.addEventListener("keydown", hundleKeyborad);