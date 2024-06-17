const btnDarkMode = document.querySelector(".dark-mode-btn");

// Функция для применения темы
function applyTheme(isDark) {
    if (isDark) {
        btnDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "dark");
    } else {
        btnDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "light");
    }
}

// Проверка темы при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
    // Проверка темы в localStorage
    if (localStorage.getItem('darkMode') === 'dark') {
        applyTheme(true);
    } else if (localStorage.getItem('darkMode') === 'light') {
        applyTheme(false);
    } else {
        // Проверка системных настроек
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            applyTheme(true);
        }
    }
});

// Если меняются системные настройки, меняем тему
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    const newColorScheme = event.matches ? "dark" : "light";
    applyTheme(newColorScheme === "dark");
});

// Включение ночного режима по кнопке
btnDarkMode.onclick = function () {
    const isDark = document.body.classList.toggle("dark");
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    localStorage.setItem("darkMode", isDark ? "dark" : "light");
};
