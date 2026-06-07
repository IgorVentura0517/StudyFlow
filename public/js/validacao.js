document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form[data-validar]");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      const camposObrigatorios = form.querySelectorAll("[required]");
      let valido = true;

      form.querySelectorAll(".mensagem-erro").forEach((msg) => msg.remove());

      camposObrigatorios.forEach((campo) => {
        if (!campo.value.trim()) {
          valido = false;

          const mensagem = document.createElement("p");
          mensagem.classList.add("mensagem-erro");
          mensagem.textContent = "Este campo é obrigatório.";

          campo.insertAdjacentElement("afterend", mensagem);
        }
      });

      const senha = form.querySelector("input[name='senha']");

      if (senha && senha.value.length < 6) {
        valido = false;

        const mensagem = document.createElement("p");
        mensagem.classList.add("mensagem-erro");
        mensagem.textContent = "A senha deve ter pelo menos 6 caracteres.";

        senha.insertAdjacentElement("afterend", mensagem);
      }

      if (!valido) {
        event.preventDefault();
      }
    });
  });
});