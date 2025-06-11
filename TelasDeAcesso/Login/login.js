const form = document.querySelector("#conteudo-form")
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(emailInput.value ===""){
        alert("Por favor, preencha o email");
        return;
    }
    if(passwordInput.value ===""){
        alert("Por favor, preencha a senha");
        return;
    }

    window.location.href = "../../index.html";
    alert("Login realizado com sucesso!")
});