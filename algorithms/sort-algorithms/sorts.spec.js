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
const counterDecorator = require('../utilities/utilities').counterDecorator;
let compare = require('../utilities/compare-functions').compareNumbers;
compare = counterDecorator(compare);
const isSorted = require('../utilities/utilities').isSorted;
const getShuffledArray = require('../utilities/utilities').getShuffledArray;
const makePartialSorted = require('../utilities/utilities').makePartialSorted;

let length = 10000;
let results = [];

describe.only(`#All sorts performance for ${length} elements`, function () {
    this.timeout(0);

    after(function () {
        let resultsJSON = JSON.stringify(results, null, 4);
        fs.writeFile(`./data/sorts-performance${length}.json`, resultsJSON);
    });

    for (let sort in sorts) {
        describe(`#${sort}`, function () {
            let testArray = getShuffledArray(length);

            it('', function () {
                this.slow(9999999999);

                let start = new Date();
                testArray = sorts[sort](testArray, compare);
                let end = new Date();
                let time = end - start;

                let compares = compare.count;
                compare.resetCount();

                let result = {
                    sort,
                    time,
                    compares
                };
                results.push(result);

                isSorted(testArray, compare).should.be.true();
                console.log(`        Sort shuffled array ${time}ms`);
            });

            it('', function () {
                this.slow(9999999999);

                testArray = makePartialSorted(testArray, 0.4, 0.3);

                let start = new Date();
                testArray = sorts[sort](testArray, compare);
                let end = new Date();
                let time = end - start;

                isSorted(testArray, compare).should.be.true();
                console.log(`        Sort partial sorted array ${time}ms`);
            });

            it('', function () {
                this.slow(9999999999);

                testArray = testArray.reverse();

                let start = new Date();
                testArray = sorts[sort](testArray, compare);
                let end = new Date();
                let time = end - start;

                isSorted(testArray, compare).should.be.true();
                console.log(`        Sort reversed array ${time}ms`);
            });

            it('', function () {
                this.slow(9999999999);

                let start = new Date();
                testArray = sorts[sort](testArray, compare);
                let end = new Date();
                let time = end - start;

                isSorted(testArray, compare).should.be.true();
                console.log(`        Sort sorted array ${time}ms`);
            });

        });
    }
});