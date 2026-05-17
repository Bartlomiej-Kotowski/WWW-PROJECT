const otworzwiecej = document.getElementById("przycisk-dolny")
const oknowiecej = document.getElementById("okienko")
const zamknijwiecej = document.getElementById("zamknij")
function pokazwiecej() {
    oknowiecej.style.display = 'flex';
}
function schowajwiecej() {
    oknowiecej.style.display = 'none';
}
otworzwiecej.addEventListener("click", pokazwiecej)
zamknijwiecej.addEventListener("click", schowajwiecej)

//Przycisks USTAWIENIA
const przyciskUstawienia = document.getElementById("przycisk-ustawienia");
const menuUstawienia = document.getElementById("menu-ustawienia");
const przyciskMotyw = document.getElementById("przycisk-motyw");

function przelaczUstawienia() {
    if (menuUstawienia.style.display === "block") {
        menuUstawienia.style.display = "none";
    } else {
        menuUstawienia.style.display = "block";
    }
}

function zmienMotyw() {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        przyciskMotyw.textContent = "Motyw jasny";
    } else {
        przyciskMotyw.textContent = "Motyw ciemny";
    }
}

przyciskUstawienia.addEventListener("click", przelaczUstawienia);
przyciskMotyw.addEventListener("click", zmienMotyw);