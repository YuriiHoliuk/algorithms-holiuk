'use strict';

const shuffle = require('./utilities').shuffleArray;

describe('#shuffleArray(array)', function () {

    it('should be function', function () {
        shuffle.should.be.instanceOf(Function);
    });

    it('should return empty array if accept empty array', function () {
        let shuffledArray = shuffle([]);

        shuffledArray.should.be.deepEqual([]);
    });

    it('should return array with same length', function () {
        let shuffledArray = shuffle([9, 8, 12, 1, -1]);

        shuffledArray.length.should.be.eql(5);
    });

    it('should return shuffled array', function () {
        let shuffledArray = shuffle([1, 2, 3, 4, 5, 6, 7, 8]);

        shuffledArray.should.be.not.deepEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('two shuffled array should be different(sometimes can)', function () {
        let shuffledArray1 = shuffle([1, 2, 3, 4, 5, 6, 7, 8]);
        // console.log(shuffledArray1);

        let shuffledArray2 = shuffle([1, 2, 3, 4, 5, 6, 7, 8]);
        // console.log(shuffledArray2);

        shuffledArray1.should.be.not.deepEqual(shuffledArray2);
    });
});