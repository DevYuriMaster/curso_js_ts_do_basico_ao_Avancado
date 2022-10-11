//Adcione a classe ativo a todos os itens do menu
const manipulaItem = document.querySelectorAll(".menu a");
manipulaItem.forEach((item) => {
  addClasse.classList.add("ativo");
});

//Remova a classe ativo de todos os itens exceto no primeiro
manipulaItem.forEach((item) => {
  addClasse.classList.remove("ativo");
});
manipulaItem[0].classList.add("ativo");

//Verifiqye se as imagens possuem atributo alt

const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
  const temAtributo = img.hasAttribute('alt');
  console.log(temAtributo);
})