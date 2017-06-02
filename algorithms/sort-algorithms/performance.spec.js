'use strict';

const algolib = require('../../index');
const sorts = {
    selectionSort: algolib.selectionSort,
    insertionSort: algolib.insertionSort,
    shellSort: algolib.shellSort,
    mergeSort: algolib.mergeSort,
    quickSort: algolib.quickSort,
    heapSort: algolib.heapSort
};

const CompareNumbers = require('./compare-functions').CompareNumbers;
const compareNumbers = new CompareNumbers();
const compare = compareNumbers.compare;

const Swap = require('./swap');
const swapInstance = new Swap;
const swap = swapInstance.swap;

const shuffle = require('./shuffle-array');
const isSorted = require('./is-sorted');


function random(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

function getShuffledArray(length) {
    let array = [];

    for (let i = 0; i < length; i++) {
        array.push(random(-10 * length, 10 * length));
    }

    return array;
}

function makePartialSorted(array, k, d) {
    let length = array.length,
        times = length * k;
        console.log(times);

    for (let i = 0; i < times; i++) {
        let a = random(0, length - 1),
            b = random(a - times * d, a + times * d);

        if (array[b]) {
            swap(array, a, b);
        }
    }

    return array;
}

describe.only('#All sorts performance', function () {
    this.timeout(0);

    // it('lolo', function () {
    //     let testArray = getShuffledArray(20);
    //     console.log('first');
    //
    //     testArray = sorts.quickSort(testArray, compare);
    //     console.log('second');
    //
    //     testArray = makePartialSorted(testArray, 0.1, 0.2);
    //     console.log('third');
    // });

});