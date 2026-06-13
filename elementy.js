
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
tytulTydzien.textContent = 'Prognoza na tydzień (12:00)';
lewyPrzycisk.append(tytulTydzien);
for(i=0; i<7; i++){
    const span = document.createElement('span');
    span.className = 'maly-tekst';
    span.textContent = '--';
    lewyPrzycisk.append(span);
};

const przyciskPogoda = document.createElement('button');
przyciskPogoda.className = 'przycisk';
const malyTekst = document.createElement('span');
malyTekst.className = 'maly-tekst';
malyTekst.textContent = 'Aktualna Pogoda';
const obecnaGodzina = document.createElement('span');
obecnaGodzina.className='maly-tekst';
obecnaGodzina.textContent='Obecna godzina: ';
const duzeMiasto = document.createElement('span');
duzeMiasto.className = 'duze-miasto';
duzeMiasto.textContent = 'Nie wybrano miasta';
const wielkaTemp = document.createElement('span');
wielkaTemp.className = 'wielka-temperatura';
wielkaTemp.textContent = '--°C';
przyciskPogoda.append(malyTekst, obecnaGodzina, duzeMiasto, wielkaTemp);

const prawyPrzycisk = document.createElement('button');
prawyPrzycisk.className = 'boczny_przycisk';
const tytulDzis = document.createElement('span');
tytulDzis.className = 'duzy-tekst';
tytulDzis.textContent = 'Prognoza na dziś';
prawyPrzycisk.append(tytulDzis);
for(i=0; i<8; i++){
        const span = document.createElement('span');
        span.className = 'maly-tekst';
        span.textContent = '--:00';
        prawyPrzycisk.append(span);
};

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
menuUstawienia.id = 'menu-ustawienia';
const btnMotyw = document.createElement('button');
btnMotyw.id = 'przycisk-motyw';
btnMotyw.textContent = 'Motyw ciemny';

menuUstawienia.append(btnMotyw);
ustawieniaPojemnik.append(btnUstawienia, menuUstawienia);
przyciskiGorne.append(inputMiasto, ustawieniaPojemnik);
document.body.append(przyciskiGorne);