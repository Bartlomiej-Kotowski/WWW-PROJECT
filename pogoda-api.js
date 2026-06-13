inputMiasto.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
        if(trybCzystychBlokow === true){
            wrocDoPogody();
        }
        const regex = /[0-9]/;
        let wpisanemiasto = document.getElementById('wpisywanie').value.trim().toUpperCase();
        if(wpisanemiasto.match(regex)){
            alert("Niedozwolone znaki!");
            return;
        }
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
    const godzina = Number(new Date().toLocaleTimeString('pl-PL', {
        timeZone: znalezioneMiasto.timezone,
        hour: '2-digit',
        hour12: false
    }));
    const minuta = String(new Date().getMinutes()).padStart(2, '0');
    const API = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=precipitation_probability_max&hourly=temperature_2m,surface_pressure,cloud_cover&current=temperature_2m,apparent_temperature&timezone=auto&forecast_days=10`
    const pogodaOdpowiedz = await fetch(API);
    const pogodaDane = await pogodaOdpowiedz.json();
    console.log(pogodaDane);
    duzeMiasto.textContent = wpisanemiasto;
    wielkaTemp.textContent = Math.round(pogodaDane.current.temperature_2m)+'°C' + '   ('+Math.round(pogodaDane.current.apparent_temperature)+'°C)';
    godzinateraz = godzina+":"+minuta;
    obecnaGodzina.textContent = 'Obecna godzina: '+godzinateraz;
    prawyPrzycisk.textContent = ''
    prawyPrzycisk.append(tytulDzis);
    godziny = [godzina+1,godzina+2,godzina+3,godzina+4,godzina+5,godzina+6,godzina+7,godzina+8];
    let czynastepnydzien = 0;
    let k = 0;
    godziny.forEach(godz => {
        if(godz > 23){
            godziny[k] -= 24;
            czynastepnydzien += 24;
        }
        const span = document.createElement('span');
        span.className = 'maly-tekst';
        span.textContent = godziny[k]+':00  -  '+Math.round(pogodaDane.hourly.temperature_2m[godziny[k]+czynastepnydzien])+'°C';
        prawyPrzycisk.append(span);
        cisnienia[k] = pogodaDane.hourly.surface_pressure[godziny[k]+czynastepnydzien]+' hPa';
        zachmurzenia[k] = pogodaDane.hourly.cloud_cover[godziny[k]+czynastepnydzien]+'%';
        k++;
    });
    lewyPrzycisk.textContent = ''
    lewyPrzycisk.append(tytulTydzien);
    for(i=1; i<=7; i++){
        const data = new Date();
        data.setDate(data.getDate() + i);
        const dzien = new Intl.DateTimeFormat('pl-PL', {
            weekday: 'short',
            timeZone: znalezioneMiasto.timezone
        }).format(data);
        const span = document.createElement('span');
        span.className = 'maly-tekst';
        span.textContent = dzien+' - '+Math.round(pogodaDane.hourly.temperature_2m[12+i*24])+'°C';
        lewyPrzycisk.append(span);
    }
    szansa = pogodaDane.daily.precipitation_probability_max[0];
    } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
        alert("Wystąpił błąd podczas pobierania danych. Sprawdź konsolę dla więcej informacji.");
    }
}});