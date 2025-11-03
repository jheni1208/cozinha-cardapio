import { mostraMsg } from "./util";
import { cadastrarCozinheira } from "./API.js"
document.getElementById('formCadastrar').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const confirmarSenha = document.getElementById('confirmarSenha').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if (!nome || !email || !senha || !confirmarSenha) {
        mostraMsg('por favor, preencha todos os campos', red);
        return;
    }

    if (senha !== confirmarSenha) {
        mostraMsg('as senhas nao conferem', 'red');
        return;
    }

    const botao = document.getElementById('cadastrar');
    botao.disable = true;
    botao.textContent = 'cadastrando...';

    const { sucesso, msg, } = await cadastrarCozinheira(nome, email, senha);
    botao.disable = false;
    botao.textContent = 'cadastrar';

    if (sucesso) {
        mostraMsg("cadastro com sucesso!", "green");
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1500);

    } else {
        mostraMsg(msg, "red");
    }


});