// https://jsonplaceholder.typicode.com/posts

async function clicou(){
    
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json();
    alert(`Título do primeiro post: ${json[0].title}`);

    alert("Clicou");
}


// PUT
async function inserir(){
    let response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',  
        {
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json' //Dizer ao servidor que o tipo de informação enviada será em formato JSON
            },
            body: JSON.stringify({  //Utilizada para mandar o objeto e traduzir em formato JSON
                title: 'Título de Teste',
                body: 'Corpo de teste',
                userId: 2
            })   
        });
    
    let json = await response.json();
    console.log(json);

}


document.querySelector('#botao').addEventListener('click', clicou);
document.querySelector('#inserir').addEventListener('click', inserir);
