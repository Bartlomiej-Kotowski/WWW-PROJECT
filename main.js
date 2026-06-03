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
    const godzina = Number(new Date().toLocaleTimeString('en-US', {
        timeZone: znalezioneMiasto.timezone,
        hour: '2-digit',
        hour12: false
    }));
    const minuta = Number(new Date().toLocaleTimeString('en-US', {
        timeZone: znalezioneMiasto.timezone,
        minute: '2-digit'
    }));
    const API = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m&hourly=temperature_2m&timezone=auto`;
    const pogodaOdpowiedz = await fetch(API);
    const pogodaDane = await pogodaOdpowiedz.json();
    console.log(pogodaDane);
    duzeMiasto.textContent = wpisanemiasto;
    wielkaTemp.textContent = `${Math.round(pogodaDane.current.temperature_2m)}°C`;
    obecnaGodzina.textContent = 'Obecna godzina: '+godzina+':'+minuta;
    prawyPrzycisk.textContent = ''
    prawyPrzycisk.append(tytulDzis);
    const godziny = [godzina+1,godzina+2,godzina+3,godzina+4,godzina+5,godzina+6,godzina+7,godzina+8];
    godziny.forEach(godz => {
        const span = document.createElement('span');
        span.className = 'maly-tekst';
        span.textContent = godz+':00  -  '+Math.round(pogodaDane.hourly.temperature_2m[godz])+'°C';
        prawyPrzycisk.append(span);
});
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

const faq = document.createElement('div');
faq.id = 'faq';
faq.style.display = 'none';
faq.className = 'strona';

document.body.append(faq);

const daneFaq = [
    {
        pytanie: "Skąd strona pobiera dane o pogodzie?",
        odpowiedz: "Nasza strona korzysta z darmowego API open meteo."
    },
    {
        pytanie: "Jak zmienić wygląd strony na tryb nocny?",
        odpowiedz: "Wystarczy kliknąć przycisk 'Ustawienia' i wybrać 'Motyw ciemny'."
    },
    {   pytanie: "Na ile dni w przód mogę sprawdzić prognozę?",
        odpowiedz: "Strona oferuje szczegółową prognozę godzinową na bieżący dzień oraz ogólny zarys przewidywanej pogody na cały nadchodzący tydzień."
    },
    {
        pytanie: "Czy planujecie dalszy rozwój strony?",
        odpowiedz: "Oczywiscie! Mamy już wiele planów jak udoskonalić naszą już dobrze działającą stronę. Jednak potrzebujemy trochę czasu żeby je móc wdrożyć. "
    },
    {
        pytanie:"Co jesli nie moge znalezc swojego miasta?",
        odpowiedz: "No to masz problem..."
    },
    {
        pytanie:"Gdzie znalezc banana Leclerca?",
        odpowiedz:"Wystarczy kliknac przycisk 'pokaz wiecej'."
    }

];
daneFaq.forEach(element => {
   const blokFaq = document.createElement('div'); 
    blokFaq.className = 'kafelek-faq'; 

    const naglowek = document.createElement('h3');
    naglowek.className = 'pytanie-faq';
    naglowek.textContent = element.pytanie;

    const akapit = document.createElement('p');
    akapit.textContent = element.odpowiedz;

    blokFaq.append(naglowek, akapit);
    faq.append(blokFaq);
});
