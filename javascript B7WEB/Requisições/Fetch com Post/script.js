async function inserirPost(){
    document.getElementById("posts").innerHTML = "Carregando...";
   
    let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Título de Teste',
            body: 'Corpo do Teste',
            userID: 4
        }),
        headers: {
            'Content-Type': 'aplication/json'
        }
    });
    let json = await req.json();
    console.log(json);
}