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
const linkiMenu = ['Strona główna', 'O nas', 'FAQ', 'Zgłoś błąd'];
const strony = ['glowna', 'onas', 'faq', 'zglos'];
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