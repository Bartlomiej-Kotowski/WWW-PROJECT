
onas = document.createElement('div');
onas.id = 'onas';
onas.className = 'strona';
onas.style.display = 'none';
const daneZespolu = [
    {
        imie: "Kamil",
        rola: "API / Logika strony",
        opis: "Podpiął stronę pod API, żeby wyświetlała prawdziwą pogodę i prognozy. Zrobił też system podstron i upewnił się, że wszystko dobrze wygląda na ekranach telefonów. Zadbał również o strukturę kodu."
    },
    {
        imie: "Bartłomiej",
        rola: "CSS / Wygląd i animacje",
        opis: "Zajął się tym, żeby strona po prostu dobrze wyglądała. Zrobił od zera ruchome tło z chmurami, ogarnął działający tryb ciemny i poukładał cały kod CSS, żeby był w nim porządek."
    },
    {
        imie: "Igor",
        rola: "Budowa elementów strony",
        opis: "Zbudował główne przyciski na stronie głównej i stworzył od podstaw całą zakładkę 'FAQ' i 'O nas' – ułożył kafelki, wymyślił pytania i zadbał o to, żeby fajnie się to czytało."
    }
];

// Tworzymy główny pojemnik na kafelki wizytówek
const kontenerZespolu = document.createElement('div');
kontenerZespolu.className = 'kontener-zespolu';


daneZespolu.forEach(osoba => {
    const karta = document.createElement('div');
    karta.className = 'kafelek-osoba';

    const imieElement = document.createElement('h2');
    imieElement.textContent = osoba.imie;

    const rolaElement = document.createElement('h4');
    rolaElement.textContent = osoba.rola;

    const opisElement = document.createElement('p');
    opisElement.textContent = osoba.opis;

    karta.append(imieElement, rolaElement, opisElement);
    kontenerZespolu.append(karta);
});
onas.append(kontenerZespolu);

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
