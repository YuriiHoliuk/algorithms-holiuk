'use strict';

const CompareNumbers = require('./compare-functions').CompareNumbers;
const compareNumbers = new CompareNumbers();
const compare = compareNumbers.compare;

function mergeSort(array, compare) {
    let length = array.length;

    if (length > 1) {
         let point = Math.floor(length / 2),
             left = mergeSort(array.slice(0, point), compare),
             right = mergeSort(array.slice(point, length), compare);

         return merge(left, right);
    } else {
        return array;
    }

    function merge(array1, array2) {

        let mergedArray = [];

        while (true) {

            if (!array1.length) {
                mergedArray.push(...array2);
                break;
            }

            if (!array2.length) {
                mergedArray.push(...array1);
                break;
            }

            compare(array1[0], array2[0])
                ? mergedArray.push(array2.shift())
                : mergedArray.push(array1.shift());
        }

        return mergedArray;
    }
}

module.exports = mergeSort;