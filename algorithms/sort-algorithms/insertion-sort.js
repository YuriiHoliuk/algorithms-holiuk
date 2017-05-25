'use strict';

function insertionSort(array, compare) {
    let length = array.length;

    for (let i = 1; i < length; i++) {
        for (let j = i; j > 0; j--) {

            if (compare(array[j - 1], array[j])) {
                let temp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = temp;

            } else {
                break;
            }
        }
    }

    return array;
}

module.exports = insertionSort;