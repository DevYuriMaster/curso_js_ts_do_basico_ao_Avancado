function clicou() {
    const teste = document.querySelector('#teste');
    // console.log(teste.children[1]); - Seleciona o filho do elemento
    const ul = teste.querySelector('ul');
   // ul.innerHTML = ul.innerHTML + "<li>Novo item adicionado</li>"; //Insere no html  
   /*
   let newLi = document.createElement("li");
    newLi.innerText = "Item adicionado porra";
    ul.appendChild(newLi);
   */
    let newUl = document.createElement('ul');
    
    for(let i = 0; i < 5; i++){
        let newLi = document.createElement('li');
        newLi.innerHTML = "item add" + i;
        newUl.append(newLi);
    }

    ul.after(newUl);
} 