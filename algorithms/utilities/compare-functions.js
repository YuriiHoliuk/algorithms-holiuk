'use strict';

let counterDecorator = require('./utilities').counterDecorator;

function compareNumbers(a, b) {
    return a - b > 0;
}

function compareNumbersRevers(a, b) {
    return a - b < 0;
}

const compares = {
    compareNumbers,
    compareNumbersRevers
};

module.exports = compares;