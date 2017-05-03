'use strict';

const algolib = require('../../index');

describe('#watermelon', function() {

    it('should return NO when weight equal 1', function() {
        let shouldEqual = algolib.divideWatermelon(1);

        shouldEqual.should.be.eql('NO');

    });

    it('should return YES when weight is even', function() {
        let shouldEqual = algolib.divideWatermelon(28);

        shouldEqual.should.be.eql('YES');

    });

    it('should return NO when weight is odd', function() {
        let shouldEqual = algolib.divideWatermelon(99);

        shouldEqual.should.be.eql('NO');

    });


});