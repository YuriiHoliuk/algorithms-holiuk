'use strict';

const Swap = require('./swap');
const swapInstance = new Swap;
const swap = swapInstance.swap;

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

module.exports = shuffleArray;