'use strict';

const algolib = require('../../index');
const sort = algolib.selectionSort;
const compare = require('./compare-functions').compareNumbers;
const shuffle = require('./shuffle-array');
const isSorted = require('./is-sorted');

let testArray = [];
for (let i = 0; i < 100; i++) {
    testArray.push(i);
}

describe('#selectionSort(array, compare)', function() {

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
        testArray = sort(testArray, compare);

        isSorted(testArray, compare).should.be.true();
    });

});