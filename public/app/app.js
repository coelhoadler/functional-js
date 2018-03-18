import { log } from './utils/promise-helpers.js';
import { notasService as service } from './nota/service.js';
import './utils/array-helpers.js';

document.querySelector('#myButton').onclick = () => 
    service
    .sumItems('2143')
    .then(total => console.log('total', total))
    .catch(err => console.error('Aconteceu um erro:', err))

// const fn = sumItems('2143')
// fn(notas);

