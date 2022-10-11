//matchMedia();
//Utilize um media-querie como no CSS para verificara largura do
//browser

const small = window.matchMedia(" (max-width: 600px)");
if (small.matches) {
  console.log("Tela menor que 600px");
} else {
  consolelog("Tela maior que 600px");
}
