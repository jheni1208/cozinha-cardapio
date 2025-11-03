import { mostraMsg } from "./util";
import { loginCozinheira } from "./API.js"
document.getElementById('formLogin').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if (!email || !senha) {
        mostraMsg('por favor, verefique seu email ou senha', red);
        return;
    }

    const botao = document.getElementById('acessar');
    botao.disable = true;
    botao.textContent = 'carregando...';

    const { sucesso, msg, user } = await loginCozinheira(email, senha);
    botao.disable = false;
    botao.textContent = 'acessar';

    if (sucesso) {
        mostraMsg(`bem vindo,${user.nome}`, green);
        setTimeout(() => {
            window.location.href = "sitema.html";
        }, 1500);

    } else {
        mostraMsg(msg || "falha ao mostrar login. verifique seu email e senha.", red);
    }


});