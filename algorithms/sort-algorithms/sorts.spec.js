'use strict';

const algolib = require('../../index');
const sorts = {
    bubbleSort: algolib.bubbleSort,
    selectionSort: algolib.selectionSort,
    insertionSort: algolib.insertionSort,
    shellSort: algolib.shellSort,
    mergeSort: algolib.mergeSort,
    quickSort: algolib.quickSort,
    heapSort: algolib.heapSort
};

const compare =  require('../utilities/compare-functions').compareNumbers;

const swap = require('../utilities/utilities').swap;
const shuffle = require('../utilities/utilities').shuffleArray;
const isSorted = require('../utilities/utilities').isSorted;
const getShuffledArray = require('../utilities/utilities').getShuffledArray;

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

describe('#All sorts performance', function () {
    this.timeout(0);

    it('shood return array', function () {
        let testArray = getShuffledArray(10);
        testArray.should.be.instanceOf(Array);
    });
});