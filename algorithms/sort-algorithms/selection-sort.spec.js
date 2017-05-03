'use strict';

const algolib = require('../../index');
const sort = algolib.selectionSort;

describe('#sort', function() {
    it('should', function() {
        let sort = algolib.sort;
        let arr = [9, 1, 6, 15, 3];

        let sortedArr = sort(arr, (a, b) => a - b >= 0);

        sortedArr.should.be.eql([1, 3, 6, 9, 15]);
    });

});