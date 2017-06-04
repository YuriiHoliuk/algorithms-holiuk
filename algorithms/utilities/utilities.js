'use strict';

function random(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

function counterDecorator(func) {
    let _count = 0;

    let returnedFunc = function () {
        _count++;
        return func.apply(this, arguments);
    };

    Object.defineProperty(returnedFunc, 'count', {
        enumerable: false,
        configurable: false,

        get: function () {
            return _count;
        }
    });

    returnedFunc.resetCount = function () {
        _count = 0;
    };

    return returnedFunc;
}

function swap(array, a, b) {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}
swap = counterDecorator(swap);

function shuffleArray(array) {


    let length = array.length;
    for (let i = 0; i < length; i++) {
        swap(array, i, random(0, length - 1));
    }


    return array;
    function random(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min));
    }
}

function isSorted(array, compare) {
    let sorted = true;

    array.forEach((element, i, arr) => {
        if (i < arr.length - 1) {
            if (compare(element, arr[i + 1])) {
                sorted = false;
            }
        }
    });

    return sorted;
}

function getShuffledArray(length) {
    let array = [];

    for (let i = 0; i < length; i++) {
        array.push(random(-10 * length, 10 * length));
    }

    return array;
}

const utilities = {
    counterDecorator,
    swap,
    shuffleArray,
    isSorted,
    getShuffledArray,
    random
};

module.exports = utilities;