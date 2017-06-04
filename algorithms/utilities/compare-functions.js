'use strict';

let counterDecorator = require('./utilities').counterDecorator;

function compareNumbers(a, b) {
    return a === b ? 0 : a - b > 0;
}

function compareNumbersRevers(a, b) {
    return a - b < 0;
}

compareNumbers = counterDecorator(compareNumbers);
compareNumbersRevers = counterDecorator(compareNumbersRevers);

const compares = {
    compareNumbers,
    compareNumbersRevers
};

module.exports = compares;