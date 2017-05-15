const isSorted = require('./is-sorted');
const compare = require('./compare-functions').compareNumbers;

describe('#isSorted(array, compare)', function () {

    it('should be a function', function () {
        isSorted.should.be.instanceOf(Function);
    });

    it('should return true if array is empty', function () {
        isSorted([], compare).should.be.true();
    });

    it('should return true if array.length is 1', function () {
        isSorted([5], compare).should.be.true();
    });

    it('should return true if array is sorted', function () {
        isSorted([1, 2, 3, 4, 5, 10, 33, 92, 93, 1212], compare).should.be.true();
        isSorted([-38, -20, -11, -1, 2, 3, 4, 5, 10, 33, 92, 93, 1212], compare).should.be.true();
    });

    it('should return false if array is not sorted', function () {
        isSorted([1, 5, 2, 3, 4, 5, 10, 33, 92, 93, 1212], compare).should.be.false();
        isSorted([1, 2, 3, 4, 5, 10, 33, 12, 92, 93, 1212], compare).should.be.false();
        isSorted([-38, -100, -20, -11, -1, 2, 3, 4, 5, 10, 33, 92, 93, 1212], compare).should.be.false();
        isSorted([-38, 1, -20, -11, -1, 2, 3, 4, 5, 10, 33, 92, 93, 1212], compare).should.be.false();
    });
});