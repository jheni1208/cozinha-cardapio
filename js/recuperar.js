import { mostraMsg } from "./util";
import { recuperarSenha } from "./API.js"
document.getElementById('formRecuperar').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value.trim();

    if (!email) {
        mostraMsg('por favor, verefique seu email', red);
        return;
    }

    const botao = document.getElementById('recuperar');
    botao.disable = true;
    botao.textContent = 'enviando';

    const { sucesso, msg, } = await recuperarSenha(email);
    botao.disable = false;
    botao.textContent = 'recuperando senha';

    if (sucesso) {
        mostraMsg(msg || `instrucoes enviadas para seu email`, green);

    } else {
        mostraMsg(msg || "nao foi possivel enviar email para recuperacao", red);
    }

});