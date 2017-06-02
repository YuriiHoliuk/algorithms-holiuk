'use strict';

class CompareNumbers {
    get compares() {
        return CompareNumbers.compares;
    }

    reset() {
        CompareNumbers.compares = 0;
    }

    compare(a, b) {
        CompareNumbers.compares ? CompareNumbers.compares++ :  CompareNumbers.compares = 1;
        return a - b > 0;
    }
}

class CompareNumbersRevers {
    get compares() {
        return CompareNumbersRevers.compares;
    }

    reset() {
        CompareNumbersRevers.compares = 0;
    }

    compare(a, b) {
        CompareNumbersRevers.compares ? CompareNumbersRevers.compares++ :  CompareNumbersRevers.compares = 1;
        return a - b < 0;
    }
}

const compares = {
    CompareNumbers,
    CompareNumbersRevers
};

module.exports = compares;