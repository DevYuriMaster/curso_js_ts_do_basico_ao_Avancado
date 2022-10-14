const elementos = [
  {tag: 'p', texto: ' que tal?'},
  {tag: 'div', texto: 'Sabão crá'},
  {tag: 'section', texto: 'Wtf mano'},
  {tag: 'footer', texto: ' Estudar é uma bosta '},
];

console.log(elementos);

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
  let { tag, texto} = elementos[i];
  let tagCriada = document.createElement(tag);
  tagCriada.innerHTML = texto;
  div.appendChild(tagCriada);
}

container.appendChild(div);