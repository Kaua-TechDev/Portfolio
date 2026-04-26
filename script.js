const backToTopButton = document.getElementById("botao-topo");
const themeButton = document.getElementById("botao-tema");
const savedTheme = localStorage.getItem("portfolio-theme");

function updateThemeButton() {
    const isLightTheme = document.body.classList.contains("tema-claro");
    const nextLabel = isLightTheme ? "Ativar tema escuro" : "Ativar tema claro";
    themeButton.setAttribute("aria-label", nextLabel);
    themeButton.setAttribute("title", nextLabel);
}

function applyTheme(theme) {
    document.body.classList.toggle("tema-claro", theme === "claro");
    updateThemeButton();
}

function toggleBackToTopButton() {
    const shouldShowButton = window.scrollY > 260;
    backToTopButton.classList.toggle("visivel", shouldShowButton);
}

themeButton.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("tema-claro") ? "escuro" : "claro";
    applyTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

applyTheme(savedTheme === "claro" ? "claro" : "escuro");
window.addEventListener("scroll", toggleBackToTopButton);
toggleBackToTopButton();