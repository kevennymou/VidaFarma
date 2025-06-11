const form = document.querySelector("#conteudo-form");
const nomeInput = document.querySelector("#nome");
const telefoneInput = document.querySelector("#telefone");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (nomeInput.value === "") {
    alert("Por favor, preencha o nome");
    return;
  }
  if (telefoneInput.value === "") {
    alert("Por favor, preencha o telefone");
    return;
  }
  if (emailInput.value === "") {
    alert("Por favor, preencha o email");
    return;
  }
  if (passwordInput.value === "") {
    alert("Por favor, preencha a senha");
    return;
  }
  if (confirmPasswordInput.value === "") {
    alert("Por favor, confirme a senha");
    return;
  }
  if(passwordInput.value !== confirmPasswordInput.value){
    alert("Confirmação de senha inválida, certifique-se que digitou a mesma senha");
    return;
  }

  window.location.href = "../Login/login.html";
  alert("Conta criada com sucesso!");
});
