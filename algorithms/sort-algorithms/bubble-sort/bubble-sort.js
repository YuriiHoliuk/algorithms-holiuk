'use strict';

let swap = require('../../utilities/utilities').swap;

function bubbleSort(array, compare) {
    let length = array.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            if (compare(array[i], array[j])) {
                swap(array, i, j);
            }
        }
    }

    return array;
}

module.exports = bubbleSort;