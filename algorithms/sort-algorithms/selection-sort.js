'use strict';

function selectionSort(array, compare) {
    let length = array.length;

    for (let j = 0; j < length - 1; j++) {
        for (let i = j + 1; i < length; i++) {
            if (compare(array[j], array[i])) {
                let temp = array[j];
                array[j] = array[i];
                array[i] = array[j];
            }
        }
    }

    return array;
}

module.exports = selectionSort;