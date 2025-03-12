// const nome = "Gabriela lindona";

// try { //se houver erro o script continua
//     nome = "Sofia Lais"
// } catch (e){
//     console.error("Ops! A variável somente leitura 'nome' não pode ser alterada. Veja o erro: " + e);
// }
// // sem try se rodar um codigo errado ele para0jojojojojjo
// nome = "Pão Doce";

// console.log("Teste");

function verificarLogin(){
    let usuario = document.getElementById("txtLogin");
    let senha = document.getElementById("txtSenha");

    try {
        if (usuario.value !== "usuario123") {
            throw new Error("Erro:  Usuário incorreta!");
        }
        if (senha.value !== "senha123") {

            throw new Error("Erro:  Senha incorreta!");
        }
        console.log("Login Realizado com Sucesso");
    } catch (erro) {
        console.error(erro.message);
    }
}