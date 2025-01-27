window.addEventListener("resize", () => {
    rebindEventListeners();
});

document.addEventListener("DOMContentLoaded", () => {
    rebindEventListeners();
    // Apply the saved theme when the page loads
    applySavedTheme();
});

function rebindEventListeners() {
    const buttons = document.querySelectorAll(".mode-toggler");
    buttons.forEach((button) => {
        // To add listener if it does not already exist.
        if (!button.__clickListener) {
            button.__clickListener = () => {
                const HTML = document.documentElement;
                HTML.classList.toggle("dark");

                const isDark = HTML.classList.contains("dark");
                localStorage.setItem("theme", isDark ? "dark" : "light");
            };
            button.addEventListener("click", button.__clickListener);
        }
    });
}

function applySavedTheme() {
    // To get the saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.add("dark");
    }
}
