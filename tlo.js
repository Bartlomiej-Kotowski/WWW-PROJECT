document.body.innerHTML = '';

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
