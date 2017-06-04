'use strict';

const fs = require('fs');

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

const compare = require('../utilities/compare-functions').compareNumbers;

const swap = require('../utilities/utilities').swap;
const shuffle = require('../utilities/utilities').shuffleArray;
const isSorted = require('../utilities/utilities').isSorted;
const getShuffledArray = require('../utilities/utilities').getShuffledArray;
const makePartialSorted = require('../utilities/utilities').makePartialSorted;

let length = 10000;
let results = {
    sorts: [],
    timers: {
        shuffledTime: {},
        partialTime: {},
        reverseTime: {},
        sortedTime: {}
    },
    compares: {}
};

for (let sortName in sorts) {
    results.sorts.push(sortName);
}

describe.only(`#All sorts performance for ${length} elements`, function () {
    this.timeout(0);

    after(function () {
        console.log(results);
        let resultsJSON = JSON.stringify(results, null, 4);
        fs.writeFile('./algorithms/sort-algorithms/overall-performance.json', resultsJSON);
    });

    for (let sort in sorts) {
        describe(`#${sort}`, function () {
            let testArray = getShuffledArray(length);

            it('', function () {
                this.slow(9999999999);

                let start = new Date();
                testArray = sorts[sort](testArray, compare);
                let end = new Date();
                let result = end - start;
                results.timers.shuffledTime[sort] = result;

                let compares = compare.count;
                results.compares[sort] = compares;
                compare.resetCount();

                isSorted(testArray, compare).should.be.true();
                console.log(`        Sort shuffled array ${result}ms`);
            });

            it('', function () {
                this.slow(9999999999);

                testArray = makePartialSorted(testArray, 0.4, 0.3);

                let start = new Date();
                testArray = sorts[sort](testArray, compare);
                let end = new Date();
                let result = end - start;
                results.timers.partialTime[sort] = result;

                isSorted(testArray, compare).should.be.true();
                console.log(`        Sort partial sorted array ${result}ms`);
            });

            it('', function () {
                this.slow(9999999999);

                testArray = testArray.reverse();

                let start = new Date();
                testArray = sorts[sort](testArray, compare);
                let end = new Date();
                let result = end - start;
                results.timers.reverseTime[sort] = result;

                isSorted(testArray, compare).should.be.true();
                console.log(`        Sort reversed array ${result}ms`);
            });

            it('', function () {
                this.slow(9999999999);

                let start = new Date();
                testArray = sorts[sort](testArray, compare);
                let end = new Date();
                let result = end - start;
                results.timers.sortedTime[sort] = result;

                isSorted(testArray, compare).should.be.true();
                console.log(`        Sort sorted array ${result}ms`);
            });

        });
    }
});