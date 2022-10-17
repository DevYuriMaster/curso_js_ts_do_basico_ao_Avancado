// *NATIVE

// Objetos nativos são aqueles definidos na especificação da
// linguagem e são implementados independente do Host

// Exemplo:

// Construtores de objetos nativos

// object
// String
// Array
// Function

// * HOST

// Objetos do host sao aqueles implementados pelo proprio ambiente.
// Por exemplo no browser possuimos objetos do DOM, como
// DomList, HTMLCollection e outros. Em Node.js os objetos do Host
// sao diferentes, ja que nao estamos em um ambiente do browser.

// Objetos do browser

// NodeList
// HTMLCollection
// Element

//USER

// Objetos do user, sao os objetos definidos pelo seu aplicativo. Ou
// seja, qualquer objeto que vocé criar ou que importar de alguma
// biblioteca externa.

const Pessoa = {
    nome: 'Yuri'
}

// BIBLIOTECAS

// Bibliotecas como jQuery foram criadas para resolver o problema de
// inconsisténcias entre browsers e adicionar funcionalidades que
// nao existiam nativamente. A padronização dos browsers e a
// implementagao de solugées nativas, torna as mesmas obsoletas.

//VERIFICAR A EXISTÊNCIA DE OBJETOS

// O typeof retorna o tipo de dado. Caso esse dado nao exista ou nao
// tenha sido definido, ele ira retornar undefined. Ou seja, quando nao
// for undefined quer dizer que existe.

if (typeof Array.from !== "undefined");
if (typeof NodeList !== "undefined");

// API

// Application Programming Interface, É uma interface de
// software criada para a interação com outros softwares.
// Ou seja, toda interação que fazemos com o browser
// utilizando Objetos, Métodos e Propriedades, estamos na
// verdade interagindo com a API do browser.

//EXERCÍCIOS

// Liste  5  objetos Nativos
String
Object
Array
Number
Math
Function

// Liste 5 Objetos do Browser
Window
history
document
HTMLAllCollection
NodeList 
 
//Liste dois métodos, propriedades ou objetos
addEventListener
querySelector
