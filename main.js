document.body.innerHTML = '';//sprawdza czy cos jest w body

const ruchomeTlo = document.createElement('div');
ruchomeTlo.className = 'ruchome-tlo';

const slonce = document.createElement('div');
slonce.className = 'slonce';
ruchomeTlo.append(slonce);

const pasChmur = document.createElement('div');
pasChmur.className = 'pas-chmur';
for (let i = 1; i <= 8; i++) {
  const chmura = document.createElement('div');
  chmura.className = `chmura chmura${i}`;
  pasChmur.append(chmura);
}
ruchomeTlo.append(pasChmur);
document.body.append(ruchomeTlo);


const menuGorne = document.createElement('div');
menuGorne.className = 'menu_gorne';
document.body.append(menuGorne);

const srodek = document.createElement('div');
srodek.className = 'srodek';
srodek.id = 'glowna';
srodek.classList.add('strona');

const lewyPrzycisk = document.createElement('button');
lewyPrzycisk.className = 'boczny_przycisk';
const tytulTydzien = document.createElement('span');
tytulTydzien.className = 'duzy-tekst';
tytulTydzien.textContent = 'Prognoza na tydzień';
lewyPrzycisk.append(tytulTydzien);
const dniTygodnia = ['pon. ', 'wt. ', 'śr. ', 'czw. ', 'pią. ', 'sob. '];
dniTygodnia.forEach(dzien => {
    const span = document.createElement('span');
    span.className = 'maly-tekst';
    span.textContent = dzien;
    lewyPrzycisk.append(span);
});

const przyciskPogoda = document.createElement('button');
przyciskPogoda.className = 'przycisk';
const malyTekst = document.createElement('span');
malyTekst.className = 'maly-tekst';
malyTekst.textContent = 'Aktualna Pogoda';
const duzeMiasto = document.createElement('span');
duzeMiasto.className = 'duze-miasto';
duzeMiasto.textContent = 'Nie wybrano miasta';
const wielkaTemp = document.createElement('span');
wielkaTemp.className = 'wielka-temperatura';
wielkaTemp.textContent = '--°C';
przyciskPogoda.append(malyTekst, duzeMiasto, wielkaTemp);

const prawyPrzycisk = document.createElement('button');
prawyPrzycisk.className = 'boczny_przycisk';
const tytulDzis = document.createElement('span');
tytulDzis.className = 'duzy-tekst';
tytulDzis.textContent = 'Prognoza  nna dziś';
prawyPrzycisk.append(tytulDzis);
const godziny = ['12:00 ', '13:00 ', '14:00 ', '15:00 ', '16:00 ', '17:00 '];
godziny.forEach(godz => {
    const span = document.createElement('span');
    span.className = 'maly-tekst';
    span.textContent = godz;
    prawyPrzycisk.append(span);
});

srodek.append(lewyPrzycisk, przyciskPogoda, prawyPrzycisk);
document.body.append(srodek);

const przyciskiGorne = document.createElement('div');
przyciskiGorne.className = 'przyciski-gorne';
const inputMiasto = document.createElement('input');
inputMiasto.type = 'text';
inputMiasto.id = 'wpisywanie';
inputMiasto.className = 'gorny-lewy';
inputMiasto.placeholder = 'Wpisz miasto';
const ustawieniaPojemnik = document.createElement('div');
ustawieniaPojemnik.className = 'ustawienia-pojemnik';
const btnUstawienia = document.createElement('button');
btnUstawienia.className = 'gorny-prawy';
btnUstawienia.id = 'przycisk-ustawienia';
btnUstawienia.textContent = 'Ustawienia';
const menuUstawienia = document.createElement('div');
menuUstawienia.id = 'menu-ustawienia ';
const btnMotyw = document.createElement('button');
btnMotyw.id = 'przycisk-motyw';
btnMotyw.textContent = 'Motyw ciemny';

menuUstawienia.append(btnMotyw);
ustawieniaPojemnik.append(btnUstawienia, menuUstawienia);
przyciskiGorne.append(inputMiasto, ustawieniaPojemnik);
document.body.append(przyciskiGorne);

function zmianastrony(indeks) {
    document.querySelectorAll('.strona').forEach(podstrona => {
        podstrona.style.display = 'none';
    });
    if(strony[indeks] !== 'glowna') {
        inputMiasto.style.display = 'none';
        btnPokazWiecej.style.display = 'none';
    }
    else {
        inputMiasto.style.display = 'block';
        btnPokazWiecej.style.display = 'block';
    }
    document.getElementById(strony[indeks]).style.display = 'flex';
}

const menulista = document.createElement('div');
menulista.className = 'menu-lista';
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const linkiMenu = ['Strona główna', 'O nas', 'FAQ'];
const strony = ['glowna', 'onas', 'faq'];
linkiMenu.forEach(tekst => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#' + strony[linkiMenu.indexOf(tekst)];
    a.textContent = tekst;
    a.addEventListener("click", (e) => {
        e.preventDefault();
        zmianastrony(linkiMenu.indexOf(tekst));
    });
    li.append(a);
    ul.append(li);
});
nav.append(ul);
menulista.append(nav);
document.body.append(menulista);
const menuDolne = document.createElement('div');
menuDolne.className = 'menu_dolne';
const btnPokazWiecej = document.createElement('button');
btnPokazWiecej.id = 'przycisk-dolny';
btnPokazWiecej.textContent = 'Pokaz wiecej';
menuDolne.append(btnPokazWiecej);
document.body.append(menuDolne);

const okienko = document.createElement('div');
okienko.id = 'okienko';
const obrazek = document.createElement('img');
obrazek.src = 'leclerc.jpeg';
const przyciskOkienkoDiv = document.createElement('div');
przyciskOkienkoDiv.id = 'przycisk_okienko';
const btnZamknij = document.createElement('button');
btnZamknij.id = 'zamknij';
btnZamknij.textContent = 'Zamknij';
przyciskOkienkoDiv.append(btnZamknij);
okienko.append(obrazek, przyciskOkienkoDiv);
document.body.append(okienko);

btnPokazWiecej.addEventListener("click", () => {
    okienko.style.display = 'flex';
});

btnZamknij.addEventListener("click", () => {
    okienko.style.display = 'none';
});

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

inputMiasto.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
        const wpisanemiasto = document.getElementById('wpisywanie').value.trim();
        try {
            const MIASTO = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${wpisanemiasto}&count=1&language=pl&format=json`);
            const dane = await MIASTO.json();
            if(!dane.results || dane.results.length === 0) {
            alert("Nie znaleziono miasta");
            return;
        }
    const znalezioneMiasto = dane.results[0];
    const lat = znalezioneMiasto.latitude;
    const lon = znalezioneMiasto.longitude;
    const API = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`;
    const pogodaOdpowiedz = await fetch(API);
    const pogodaDane = await pogodaOdpowiedz.json();
    console.log(pogodaDane);
    duzeMiasto.textContent = wpisanemiasto;
    wielkaTemp.textContent = `${Math.round(pogodaDane.current.temperature_2m)}°C`;
    } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
        alert("Wystąpił błąd podczas pobierania danych. Sprawdź konsolę dla więcej informacji.");
    }
}});





onas = document.createElement('div');
onas.id = 'onas';
onas.className = 'strona';
onas.style.display = 'none';
onas.textContent = 'placeholder o nas';
document.body.append(onas);

faq = document.createElement('div');
faq.id = 'faq';
faq.style.display = 'none';
faq.className = 'strona';
faq.textContent = 'placeholder faq';
document.body.append(faq);