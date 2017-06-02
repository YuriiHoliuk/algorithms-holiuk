'use strict';

const CompareNumbers = require('./compare-functions').CompareNumbers;
const compareNumbers = new CompareNumbers();
const compare = compareNumbers.compare;

const CompareNumbersRevers = require('./compare-functions').CompareNumbersRevers;
const compareNumbersRevers = new CompareNumbersRevers();
const compareRevers = compareNumbersRevers.compare;

const Swap = require('./swap');
const swapInstance = new Swap;
const swap = swapInstance.swap;

const selectionSort = require('./selection-sort');

function shellSort(array, compare) {
    let length = array.length;

    const gaps = generatePratt(length);

    gaps.forEach(gap => {
        for (let i = 0; i + gap < length; i++) {
            let j = i + gap;

            recursiveCompare(i, j, gap);
        }
    });

    return array;


    function recursiveCompare(i, j, gap) {
        if (compare(array[i], array[j])) {
            swap(array, i, j);
            j = i;
            i = j - gap;

            if (i >= 0) {
                recursiveCompare(i, j, gap);
            }
        }
    }

    function generatePratt(n) {
        let prattSequence = [];

        for (let i = 0; i < n; i++) {

            let pq;

            for (let j = 0; j < n; j++) {
                pq = Math.pow(2, i) * Math.pow(3, j);

                if (pq <= n / 2) {
                    prattSequence.push(pq);
                } else {
                    break;
                }
            }
        }

        return selectionSort(prattSequence, compareRevers);
    }
}

module.exports = shellSort;