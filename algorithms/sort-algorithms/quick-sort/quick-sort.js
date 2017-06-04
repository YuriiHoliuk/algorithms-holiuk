'use strict';

const swap = require('../../utilities/utilities').swap;
const random = require('../../utilities/utilities').random;

function quickSort(array, compare) {
    let length = array.length;

    _quickSort(0, length - 1);

    return array;

    function _quickSort(start, end) {
        if (end - start < 1) {
            return;
        }

        let _pivot = random(start, end),
            pivot = array[_pivot];

        let i = start;
        let j = end;

        while (i < j) {

            while (compare(pivot, array[i])) {
                i++;
            }

            while (compare(array[j], pivot)) {
                j--;
            }

            if (i <= j) {
                swap(array, i, j);
            }
        }

        _quickSort(start, i);
        _quickSort(i + 1, end);
    }
}

module.exports = quickSort;