import GeraSenha from './modules/GeraSenha';

import './assets/css/style.css';

const fieldSize = document.querySelector('#quantidade');
const fieldNumero = document.querySelector('#numero');
const fieldMaiuscula = document.querySelector('#maiuscula');
const fieldMinuscula = document.querySelector('#minuscula');
const fieldSimbolo = document.querySelector('#simbolo');
const button = document.querySelector('#gerar');
const div = document.querySelector('.retorno');

button.addEventListener('click', (e) => {
    e.preventDefault();
    const size = Number(fieldSize.value);
    if (!size) return;

    const numero = fieldNumero.checked;
    const maiuscula = fieldMaiuscula.checked;
    const minuscula = fieldMinuscula.checked;
    const simbolo = fieldSimbolo.checked;
    
    if(!numero && !maiuscula && !minuscula && !simbolo) {
        div.innerHTML = 'Selecione alguma opção';
        return;
    }

    const gera = new GeraSenha(size, numero, maiuscula, minuscula, simbolo);
    div.innerText = gera.gerarSenha();
});