/*
Crie uma função que valide um usuário e uma senha.
Usuário correto: Pedro
Senha correta: 123
*/

// Uso da função

let usuario = 'Nicolas'
let senha = '121'

let validarUsuario = validar(usuario, senha);

function validar(usuario, senha) {
    if (usuario == 'Pedro' && senha == '123') {
        console.log("Você está conectado!");
    } else {
        console.log("Usuário incorreto");
    }
}