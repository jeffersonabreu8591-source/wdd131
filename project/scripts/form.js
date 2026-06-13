// pega o form la do html
const form =
    document.querySelector("#contact-form");

// lugar da msg
const welcomeMessage =
    document.querySelector("#welcome-message");

// pega nome salvo antes
const savedName =
    localStorage.getItem("visitorName");

// se ja tem nome salvo mostra ele
if (savedName) {

    // mostra msg
    welcomeMessage.textContent =
        `Welcome back, ${savedName}!`;
}

// quando clicar no botao
form.addEventListener("submit", (event) => {

    // nao deixa atualizar a pagina
    event.preventDefault();

    // pega oq usuario digitou
    const fullName =
        document.querySelector("#fullname").value;

    // salva no navegador
    localStorage.setItem(
        "visitorName",
        fullName
    );

    // fala obrigado
    welcomeMessage.textContent =
        `Thank you, ${fullName}! Your information has been saved.`;

    // limpa os campo
    form.reset();
});

/*
coisas q eu usei

local storage
query selector
add event listener

fluxo:

  digita nome
clica submit
s lva nome
mostra msg
se voltar depois
aparece welcome back

pesquisa:

mdn
   w3schools
anotaçao da aula

nao apagar isso pq funciona kkk
*/