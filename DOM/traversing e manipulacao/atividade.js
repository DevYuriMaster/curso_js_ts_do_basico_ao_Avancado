//Dubliqye o Menu adcionando ele em copy
const duplicaM = document.querySelector('.menu');
const getCopy = document.querySelector('.copy');

const cloneMenu = duplicaM.cloneNode(true);

getCopy.appendChild(cloneMenu);

// Selecioneoprimeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const primeiroDt = faq.querySelector('dt');
const proximoDD = primeiroDt.nextElementSibling;
                  
 console.log(proximoDD);

// Substituaoconteúdo html de .faq pelo de .animais

const animais=document.querySelector('.animais');
faq.innerHTML = animais.innerHTML; 