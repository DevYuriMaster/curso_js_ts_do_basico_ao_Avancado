const nome =  'Yuri Victor';


//FOR
for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}


 
//FOR IN
for (let i in nome){
  console.log(nome[i]);
}



//FOR OF
for (let valor of nome) {
  console.log(valor);
}


// for clássico - utilizado para objetos iteráveis (Arrays ou Strings)
//for in - Retorna o índice ou chave (string, array ou objetos)
//for of - retorna o valor em si (iteráveis, arrays ou strings)
