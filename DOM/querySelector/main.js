const todasImagens = document.querySelectorAll("img");
console.log("img");

// Mostre no console cada paragrafo do site
const paragrafos = document.querySelectorAll("p");

paragrafos.forEach((item, index) => {
  console.log(item, index);
});

// Mostre o texto dos parágrafos nos consoles
paragrafos.forEach((item) => {
  console.log(item.innerText);
});
