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