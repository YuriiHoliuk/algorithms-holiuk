'use strict';

var algolib = require('../../index');

describe('#countStones', function() {

    it('should return n-1 if all stones are the same', function() {
        var stones = algolib.countStones(5, 'RRRRR');

        stones.should.be.eql(4);
    });

    it('should return 0 if all neighborn stones are different', function() {
        var stones = algolib.countStones(4, 'BRBG');

        stones.should.be.eql(0);
    });

    it('should return count of stones to take from the table so that any two neighboring stones had different colors', function() {
        var stones = algolib.countStones(16, 'RRGBGBBGRRRGBGGB');

        stones.should.be.eql(5);
    });
});