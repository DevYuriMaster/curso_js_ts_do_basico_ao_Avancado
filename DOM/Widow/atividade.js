//Verifique a distência da primeira
// imagem em relação ao topo da página
const imgT = document.querySelector('img');
const imgTop = imgT.offsetTop;

//Retorne a soma da largura de todas as imagens
const imagens = document.querySelectorAll('img');

function somaImagem() {
  imagens.forEach((imagem) => {
    console.log(imagem.offsetWidth);
  });
}
window.onload = function () {
  somaImagem();
};

//Verifique se os links da página possuem o mínimo recomendado
// para telas utilizadas com o dedo. (48px/ 48px);

const links = document.querySelectorAll('a');

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetheight;
  
  if(linkWidth > 48 && linkHeight > 48){
    console.log("O tamanho do link é o recomendado");
  } else {
    console.log("O tamanho do link não é o recomendado");
  }
});

