'use strict';

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

module.exports = isSorted;