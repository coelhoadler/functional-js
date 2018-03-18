import { handleStatus } from '../utils/promise-helpers.js';
import { partialize, compose } from '../utils/operators.js';

const API = 'http://localhost:3000/notas';

const getItemsFromNotas = notas => notas.$flatMap(nota => nota.itens);
const filterItemsByCode = code => items => items.filter(item => item.codigo == code);
const sumItemsValue = items => items.reduce((total, item) => total + item.valor, 0);

// partial application
    // const ehDivisivel = (divisor, divisivel) => !(divisivel % divisor);
    // const ehDivisivelPorDois = ehDivisivel.bind(null, 2);

    // console.log(ehDivisivelPorDois(10));
    // console.log(ehDivisivelPorDois(13));
    // console.log(ehDivisivelPorDois(14));
// partial application

export const notasService = {
    
    listAll() {
        return fetch(API)
            .then(handleStatus)
            .catch(_ => Promise.reject('Não foi possível obter as nostas fiscais.'));
    },

    sumItems(code) {
        const sumItems = compose(
            sumItemsValue, 
            partialize(filterItemsByCode, code)(),
            getItemsFromNotas
        );

        return this.listAll().then(sumItems);
    }
};