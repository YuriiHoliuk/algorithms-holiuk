'use strict';

const algolib = require('../../../index');
const sort = algolib.heapSort;

const compare =  require('../../utilities/compare-functions').compareNumbers;
const shuffle = require('../../utilities/utilities').shuffleArray;
const isSorted = require('../../utilities/utilities').isSorted;

let testArray = [];
for (let i = 0; i < 50000; i++) {
    testArray.push(i);
}

describe('#heapSort(array, compare)', function() {
    this.timeout(0);

    it('should be a function', function () {
        sort.should.be.instanceOf(Function);
    });

    it('should return array', function () {
        sort([8, 9, 1, 12], compare).should.be.instanceOf(Array);
        sort([], compare).should.be.instanceOf(Array);
    });

    it('should return empty array if accept empty array', function () {
        sort([], compare).should.be.deepEqual([]);
    });

    it('should return the same array if accept array with length 1', function () {
        sort([1], compare).should.be.deepEqual([1]);
    });

    it('should return array with the same length', function () {
        sort([1, 7, 8, 12], compare).length.should.be.eql(4);
    });

    it('should return sorted array', function () {
        testArray = shuffle(testArray);
        // console.log(testArray, 'input');

        testArray = sort(testArray, compare);
        // console.log(testArray, 'output');

        isSorted(testArray, compare).should.be.true();
    });

});