//Promisses são como promessas na vida real, ela está esperando algum retorno
//Para criar uma promessa instanciamo a classe Promisse
//Ela leva dois argumentos resolve (Solução) e reject (erro)
//Alguns recursos em JS(fetch API) retornam promessas

function pegarTemperatura(){
    return new Promisse(function(resolve, reject){
        console.log("pegando temperatura...");

        setTimeout(function(){
            resolve('40 na sombra');
        }, 2000);
    });
}
//Usando a Promisse

let temp = pegarTemperatura();
temp
    .then(function(resultado){
    console.log("TEMPERATURA: "+resultado);
    })
    .catch(function(error){
        console.log("Eita deu erro!");
    });