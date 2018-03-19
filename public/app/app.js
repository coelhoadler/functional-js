import { log } from './utils/promise-helpers.js';
import { notasService as service } from './nota/service.js';
import { takeUntil } from './utils/operators.js';
import './utils/array-helpers.js';

const operation = takeUntil(3, () =>
    service
        .sumItems('2143')
        .then(total => console.log('total', total))
        .catch(err => console.error('Aconteceu um erro:', err))
);

document
    .querySelector('#myButton')
    .onclick = () => operation();

// const fn = sumItems('2143')
// fn(notas);

