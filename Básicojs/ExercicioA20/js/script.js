function meuEscopo (){
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');
 
  const pessoas = [];

 function recebeEventoForm (evento) {
  evento.preventDefault(); 
  const nome = document.querySelector('.nome');
  const sobrenome = document.querySelector('.sobrenome');
  const peso = document.querySelector('.peso');
  const altura = document.querySelector('.altura');
 
  pessoas.push({
    nome: nome.Value,
    sobrenome: sobrenome.Value,
    peso: peso.Value,
    altura: altura.Value
  });

  console.log(pessoas);

  resultado.innerHTML += `<p>${nome.Value} ${sobrenome.Value} ${peso.Value} ${altura.Value}</p>`   

  // console.log(nome.value, sobrenome.value, peso.value, altura.value);/
 }

 /* form.onsubmit = function (evento) {
    evento.preventDefault();
    alert(1);
    console.log('Foi enviado!');
  };*/


  /*let contador = 1;
  function recebeEventoForm(evento) {
    evento.preventDefault();
    console.log(`Formulário não enviado!, ${contador}`);
    contador++;
  }*/

  

  form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();