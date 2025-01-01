document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    const buttons = document.querySelectorAll(".load-content");

    const loadContent = async (file, bgClass) => {
        try {
            document.body.className = bgClass;
            main.innerHTML = "<p>Carregando...</p>";

            const response = await fetch(file);
            if (!response.ok) {
                throw new Error(`Erro ao carregar a página: ${response.statusText}`);
            }

            const data = await response.text();
            main.innerHTML = data;
        } catch (error) {
            console.error(error);
            main.innerHTML = "<p>Erro ao carregar o conteúdo. Tente novamente mais tarde.</p>";
        }
    };

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const file = button.getAttribute("data-file");
            const bgClass = button.getAttribute("data-bg");
            loadContent(file, bgClass);
        });
    });
});