document.body.innerHTML = '';//sprawdza czy cos jest w body

const menuGorne = document.createElement('div');
menuGorne.className = 'menu_gorne';
const linkTestowy = document.createElement('a');
linkTestowy.href = 'https://pogoda.interia.pl/prognoza-dlugoterminowa-bialystok,cId,1197';
linkTestowy.textContent = 'strona testowa';
const tytulAplikacji = document.createElement('p');
tytulAplikacji.textContent = 'Aplikacja pogodowa';
menuGorne.append(linkTestowy, tytulAplikacji);
document.body.append(menuGorne);

const srodek = document.createElement('div');
srodek.className = 'srodek';

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
duzeMiasto.textContent = 'Warszawa';
const wielkaTemp = document.createElement('span');
wielkaTemp.className = 'wielka-temperatura';
wielkaTemp.textContent = '7°C';
przyciskPogoda.append(malyTekst, duzeMiasto, wielkaTemp);

const prawyPrzycisk = document.createElement('button');
prawyPrzycisk.className = 'boczny_przycisk';
const tytulDzis = document.createElement('span');
tytulDzis.className = 'duzy-tekst';
tytulDzis.textContent = 'Prognoza na dziś';
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
inputMiasto.className = 'gorny-lewy';
inputMiasto.placeholder = 'Wpisz miasto';
const ustawieniaPojemnik = document.createElement('div');
ustawieniaPojemnik.className = 'ustawienia-pojemnik';
const btnUstawienia = document.createElement('button');
btnUstawienia.className = 'gorny-prawy';
btnUstawienia.id = 'przycisk-ustawienia';
btnUstawienia.textContent = 'Ustawienia';
const menuUstawienia = document.createElement('div');
menuUstawienia.id = 'menu-ustawienia';
const btnMotyw = document.createElement('button');
btnMotyw.id = 'przycisk-motyw';
btnMotyw.textContent = 'Motyw ciemny';

menuUstawienia.append(btnMotyw);
ustawieniaPojemnik.append(btnUstawienia, menuUstawienia);
przyciskiGorne.append(inputMiasto, ustawieniaPojemnik);
document.body.append(przyciskiGorne);

const menuDolne = document.createElement('div');
menuDolne.className = 'menu_dolne';
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const linkiMenu = ['Strona główna', 'Blog', 'Kontakt'];
linkiMenu.forEach(tekst => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = tekst;
    li.append(a);
    ul.append(li);
});
nav.append(ul);
const btnPokazWiecej = document.createElement('button');
btnPokazWiecej.id = 'przycisk-dolny';
btnPokazWiecej.textContent = 'Pokaz wiecej';
menuDolne.append(nav, btnPokazWiecej);
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