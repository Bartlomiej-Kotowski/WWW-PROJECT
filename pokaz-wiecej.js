let trybCzystychBlokow = false;

let zapisanyLewyBlok = [];
let zapisanySrodkowyBlok = [];
let zapisanyPrawyBlok = [];

function dodajTekstDoBloku(blok, tekst, klasa) {
    const span = document.createElement('span');
    span.className = klasa;
    span.textContent = tekst;
    blok.append(span);
}
let godziny = ['--','--','--','--','--','--','--','--'];
let szansa = '--';
let godzinateraz = '';
let cisnienia = ['','','','','','','',''];
let zachmurzenia = ['','','','','','','',''];
function pokazCzysteBloki() {
    trybCzystychBlokow = true;
    btnPokazWiecej.textContent = 'Wróć';

    zapisanyLewyBlok = [...lewyPrzycisk.childNodes];
    zapisanySrodkowyBlok = [...przyciskPogoda.childNodes];
    zapisanyPrawyBlok = [...prawyPrzycisk.childNodes];

    lewyPrzycisk.textContent = '';
    przyciskPogoda.textContent = '';
    prawyPrzycisk.textContent = '';

    dodajTekstDoBloku(lewyPrzycisk, 'Ciśnienie atomsfetyczne', 'duzy-tekst');
    let i = 0;
    let j = 0;
    godziny.forEach(godz => {
        dodajTekstDoBloku(lewyPrzycisk, godz+':00 - '+cisnienia[i], 'maly-tekst');
        i++;
    });

    dodajTekstDoBloku(przyciskPogoda, 'Aktualna Pogoda', 'maly-tekst');
    dodajTekstDoBloku(przyciskPogoda, 'Obecna godzina: '+godzinateraz, 'maly-tekst');
    dodajTekstDoBloku(przyciskPogoda, 'Szansa na opady', 'duze-miasto');
    dodajTekstDoBloku(przyciskPogoda, szansa + '%', 'wielka-temperatura');

    dodajTekstDoBloku(prawyPrzycisk, 'Zachmurzenie', 'duzy-tekst');
    godziny.forEach(godz => {
        dodajTekstDoBloku(prawyPrzycisk, godz+':00 - '+zachmurzenia[j], 'maly-tekst');
        j++;
    });
}

function wrocDoPogody() {
    trybCzystychBlokow = false;
    btnPokazWiecej.textContent = 'Pokaz wiecej';

    lewyPrzycisk.textContent = '';
    przyciskPogoda.textContent = '';
    prawyPrzycisk.textContent = '';

    lewyPrzycisk.append(...zapisanyLewyBlok);
    przyciskPogoda.append(...zapisanySrodkowyBlok);
    prawyPrzycisk.append(...zapisanyPrawyBlok);
}

btnPokazWiecej.addEventListener('click', () => {
    if (trybCzystychBlokow === false) {
        pokazCzysteBloki();
    } else {
        wrocDoPogody();
    }
});