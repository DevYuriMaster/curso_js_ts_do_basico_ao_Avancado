async function enviar(){
    //Selecionando arquivo
    let arquivo = document.getElementById('arquivo').files[0];

    //Para arquivos usar classe form Data
    let body = new FormData();
    body.append('Title', 'Bla bla');
    body.append('arquivo', arquivo);

    //Fazendo upload
    let req = await fetch('https://www.meusite.com.br/upload', {
        method: 'POST',
        body: body,

        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

/*
function mostrar() {
    let imagem = document.getElementById("imagem").files[0];

    let img = document.createElement('img');
    img.src = URL.createObjectURL(imagem);
    img.width = 200;

    document.getElementById("area").appendChild(img);
}
*/

//Asíncrono 
function mostrar(){
    let reader = new FileReader();
    let imagem = document.getElementById('imagem').file[0];

    reader.onloadend = function(){
        let img = document.createElement('img');
        img.src = reader.result;
        img.width = 200;

        document.getElementById("area").appendChild(img);
    }

    reader.readAsDataURL(imagem);
}
