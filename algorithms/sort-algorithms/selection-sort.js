'use strict';

const Swap = require('./swap');
const swapInstance = new Swap;
const swap = swapInstance.swap;

function selectionSort(array, compare) {
    let length = array.length;

    for (let i = 0; i < length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < length; j++) {

            if(compare(array[minIndex], array[j])) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }

    return array;
}

module.exports = selectionSort;