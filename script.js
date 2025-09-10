let tamanhoFonte = 16;

const body = document.body;
const btnAumentar = document.getElementById('aumentarFonte');
const btnDiminuir = document.getElementById('diminuirFonte');
const btnContraste = document.getElementById('altoContraste');

btnAumentar.addEventListener('click', () => {
    tamanhoFonte += 2;
    body.style.fontSize = tamanhoFonte + 'px';
});

btnDiminuir.addEventListener('click', () => {
    tamanhoFonte -= 2;
    body.style.fontSize = tamanhoFonte + 'px';
});

btnContraste.addEventListener('click', () => {
    body.classList.toggle('contraste');
});
