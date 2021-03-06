'use strict';

const swap = require('../../utilities/utilities').swap;

function insertionSort(array, compare) {
    let length = array.length;

    for (let i = 1; i < length; i++) {
        for (let j = i; j > 0; j--) {

            if (compare(array[j - 1], array[j])) {
                swap(array, j  -1, j);
            } else {
                break;
            }
        }
    }

    return array;
}

module.exports = insertionSort;