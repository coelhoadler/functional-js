import { handleStatus, log } from './utils/promise-helpers.js';

document.querySelector('#myButton').onclick = () => 
    fetch('http:///localhost:3000/notas')
    .then(handleStatus)
    .then(notas => notas.$flatMap(nota => notas.itens))
    .then(itens => itens.filter(item => item.codigo == '2143'))
    .then(itens => itens.reduce((total, item) => total + item.valor, 0))
    .then(total => log(total))
    .catch(err => console.error('Aconteceu um erro:', err))