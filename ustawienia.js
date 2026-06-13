
btnUstawienia.addEventListener("click", () => {
    if (menuUstawienia.style.display === "block") {
        menuUstawienia.style.display = "none";
    } else {
        menuUstawienia.style.display = "block";
    }
});

btnMotyw.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        btnMotyw.textContent = "Motyw jasny";
    } else {
        btnMotyw.textContent = "Motyw ciemny";
    }
});