'use strict';

const algolib = require('../../index');
const sort = algolib.heapSort;
const Heap = algolib.Heap;
const compare = require('./compare-functions').compareNumbers;
const compareRevers = require('./compare-functions').compareNumbersRevers;
const shuffle = require('./shuffle-array');
const isSorted = require('./is-sorted');

let testArray = [];
for (let i = 0; i < 20000; i++) {
    testArray.push(i);
}

describe('#heapSort(array, compare)', function() {
    this.timeout(0);

    it('should be a function', function () {
        sort.should.be.instanceOf(Function);
    });

    it('should return array', function () {
        sort([8, 9, 1, 12], compareRevers).should.be.instanceOf(Array);
        sort([], compareRevers).should.be.instanceOf(Array);
    });

    it('should return empty array if accept empty array', function () {
        sort([], compareRevers).should.be.deepEqual([]);
    });

    it('should return the same array if accept array with length 1', function () {
        sort([1], compareRevers).should.be.deepEqual([1]);
    });

    it('should return array with the same length', function () {
        sort([1, 7, 8, 12], compareRevers).length.should.be.eql(4);
    });

    it('should return sorted array', function () {
        testArray = shuffle(testArray);
        // console.log(testArray);

        testArray = sort(testArray, compareRevers);
        // console.log(testArray);

        isSorted(testArray, compare).should.be.true();
    });

});