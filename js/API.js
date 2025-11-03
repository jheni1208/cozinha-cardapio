const API_USUARIOS = "https://api-storege-cantina-main-eight.vercel.app/"

async function tratarErroResponse(res, msgPadrao) {
    const textErro = await res.text();
    let msgErro;

    try {
        const errorData = JSON.parse(textErro);
        msgErro = errorData.msg || erroData.error || errorData.menssage || textErro;
    } catch {
        msgErro - textErro;
    }
    return { sucesso: false, msg: msgErro || msgPadrao || "erro desconhecido na API", }
}

async function loginCozinheira(email, senha) {
    try {
        const res = await fetch(API_USUARIOS + "/login", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email, senha }),
        });

        if (!res.ok) return await tratarErroResponse(res, "erro ao fazer login")
        const data = await res.json();

        if (data.usuario) {

            localStorage.setItem("usuarioId:", data.usuario.id,);
            localStorage.setItem("usuarioNome:", data.usuario.name);
            localStorage.setItem("token:", data.token);

            return { sucesso: true, user: data.usuario };
        } else {
            return { sucesso: false, msg: "usuario ou senha incorretas" };
        }

    } catch (error) {
        console.error("erro ao fazer login", error);
        return { sucesso: false, mensagem: "erro de conexão" };
    }
}

async function cadastrarCozinheira(nome, email, senha) {
    try {
        const res = await fetch(API_USUARIOS + "/cadastro", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ nome, email, senha }),
        });

        if (!res.ok) return await tratarErroResponse(res, "erro ao cadastrar usuario")
        const data = await res.json();

        return { sucesso: true, user: data.usuario || null };

    } catch (error) {
        console.error("erro ao fazer login", error);
        return { sucesso: false, mensagem: "erro de conexão API" };
    }
}

async function recuperarSenha(email) {
    try {
        const res = await fetch(API_USUARIOS + "/recupera", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ nome, email, senha }),
        });

        if (!res.ok) return await tratarErroResponse(res, "erro ao recuperar senha")
        const data = await res.json();

        return { sucesso: true, msg: data.msg || "intrucoes enviadas ao seu email" };

    } catch (error) {
        console.error("erro ao fazer login", error);
        return { sucesso: false, mensagem: "erro de conexão API" };
    }
}

export async function listarCardapio() {
    try {
        const res = await fetch(API_USUARIOS);
        const cardapio = await res.json();
        return cardapios;

    } catch (error) {
        console.error("erro ao listar cardapio", error);
        alert("ocorreu um erro ao carregar cardapio");

    }
}

export async function loginCozinheira(email, senha) {
    try {
        const res = await fetch(API_USUARIOS);
        const cardapio = await res.json();
        return cardapios;

    } catch (error) {

        console.error("erro ao fazer login", error);
        alert("ocorreu um erro ao fazer login");
    }
}

export async function cadastrarCozinheira(nome, email, senha) {
    try {
        const res = await fetch(API_USUARIOS);
        const cardapio = await res.json();
        return cardapios;

    } catch (error) {
        console.error("erro ao cadastrar", error);
        alert("ocorreu um erro ao cadastrar");
    }
}

export async function recuperarSenha(email) {
    try {
        const res = await fetch(API_USUARIOS);
        const cardapio = await res.json();
        return cardapios;
    } catch (error) {
        console.error("erro ao recuperar senha", error);
        alert("ocorreu um erro ao recuperar senha");
    }
}

export async function cadastrarCardapio(cardapio) {
    try {
        const res = await fetch(API_USUARIOS);
        const cardapio = await res.json();
        return cardapios;

    } catch (error) {
        console.error("erro ao cadastrar cardapio", error);
        alert("ocorreu um erro ao cadastrar cardapio");
    }
}

export async function alterarCardapio(id) {
    try {
        const res = await fetch(API_USUARIOS);
        const cardapio = await res.json();
        return cardapios;

    } catch (error) {
        console.error("erro ao alterar cardapio", error);
        alert("ocorreu um erro ao alterar cardapio");
    }
}

export async function excluirCardapio(id) {
    try {
        const res = await fetch(API_USUARIOS);
        const cardapio = await res.json();
        return cardapios;


    } catch (error) {
        console.error("erro ao excluir cardapio", error);
        alert("ocorreu um erro ao excluir cardapio");
    }
} 

export async function buscarCardapio(id) {
    try {
        const res = await fetch(API_USUARIOS);
        const cardapio = await res.json();
        return cardapios;

    } catch (error) {
        console.error("erro ao buscar cardapio", error);
        alert("ocorreu um erro ao buscar cardapio");
    }
}