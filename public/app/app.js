import { log, timeoutPromise } from './utils/promise-helpers.js';
import { notasService as service } from './nota/service.js';
import { takeUntil, debounceTime } from './utils/operators.js';
import './utils/array-helpers.js';

const operation = takeUntil(3, () =>
        timeoutPromise(200, service.sumItems('2143'))
        .then(total => console.log('total', total))
        .catch(err => console.error('Aconteceu um erro:', err))
);

const action = debounceTime(500, operation);

document
    .querySelector('#myButton')
    .onclick = () => action();

