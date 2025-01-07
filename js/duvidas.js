document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todas as perguntas com a classe "question-toggle"
    const questionToggles = document.querySelectorAll(".question-toggle");

    // Adiciona o evento de clique a cada pergunta
    questionToggles.forEach(function (toggle) {
      toggle.addEventListener("click", function (event) {
        event.preventDefault(); // Previne o comportamento padrão do link

        const additionalText = this.nextElementSibling; // Seleciona o próximo elemento (o <p>)
        const isVisible = additionalText.style.display === "block";

        // Alterna a visibilidade do texto adicional
        additionalText.style.display = isVisible ? "none" : "block";

        // Alterna os ícones de seta
        const icon = this.querySelector("i");
        icon.classList.toggle("fa-caret-down");
        icon.classList.toggle("fa-caret-up");
      });
    });
});
