
// 1 Realizando e tratando a requisição
function loadPosts() {

    document.getElementById("posts").innerHTML = 'Carregando...';
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (resultado) {
            //2 - Transformar o resultado da requisição em formato JSON
            return resultado.json() //3 - O resultado trará uma nova promisse
        })
        .then(function(json){
           //document.getElementById("posts").innerHTML = json.length+" posts";
           montarBlog(json);
        })
        .catch(function (error) {
            console.log("Deu problema...")
        });
}

//Forma somplificada com Async e Await
/*
async function loadPosts() {

    document.getElementById("posts").innerHTML = 'Carregando...';

    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await req.json();
    montarBlog(json);
        
}
*/


function montarBlog(lista){
    let html = '';

    for(i in lista){
        html += '<h3>' +lista[i].title+ '</h3>';
        html += lista[i].body+'<br/>'
        html += '<hr/>'; 
    }

    document.getElementById("posts").innerHTML = html;
}