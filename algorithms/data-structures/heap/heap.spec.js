'use strict';

const Heap = require('../../../index').Heap;
const compare =  require('../../utilities/compare-functions').compareNumbers;
const shuffle = require('../../utilities/utilities').shuffleArray;

describe('#Heap', function () {
    this.timeout(0);

    describe('#Data structure', function () {
        it('should create proper data structure', function () {
            let heap = new Heap(compare);

            heap.heapCore.should.be.instanceOf(Array);
            heap.compare.should.be.instanceOf(Function);
            heap.compare.should.be.instanceOf(Function);
            heap.compare.should.be.instanceOf(Function);
            heap.add.should.be.instanceOf(Function);
            heap.getMax.should.be.instanceOf(Function);
            heap.delMax.should.be.instanceOf(Function);
            heap.merge.should.be.instanceOf(Function);
            heap.heapify.should.be.instanceOf(Function);
        });
    });

    describe('#add', function () {
        it('should add elements to heapCore', function () {
            let heap = new Heap(compare);

            heap.add(1);
            heap.heapCore.length.should.be.eql(1);
            heap.add(10);
            heap.heapCore.length.should.be.eql(2);
            heap.add(21);
            heap.heapCore.length.should.be.eql(3);
        });

        it('should add elements in correct order', function () {
            let heap = new Heap(compare);

            heap.add(10);
            heap.add(1);
            heap.heapCore[0].should.be.eql(1);

            heap.add(5);
            heap.heapCore[2].should.be.eql(5);

            heap.add(0);
            heap.heapCore[0].should.be.eql(0);

            heap.add(11);
            heap.add(12);
            heap.add(13);
            heap.add(14);
            heap.add(15);

            heap.add(1.5);
            heap.add(2);
            heap.heapCore.should.be.deepEqual([0, 1, 5, 10, 1.5, 12, 13, 14, 15, 11, 2]);
        });
    });

    describe('#getMax', function() {
        it('should return min added element', function () {
            let heap = new Heap(compare);

            heap.add(9);
            heap.getMax().should.be.eql(9);

            heap.add(1);
            heap.getMax().should.be.eql(1);

            heap.add(2);
            heap.getMax().should.be.eql(1);

            heap.add(0.999);
            heap.getMax().should.be.eql(0.999);
        });
    });

    describe('#delMax', function () {
        it('should delete element from Heap', function () {
            let heap = new Heap(compare);

            heap.add(3);
            heap.heapCore.length.should.be.eql(1);
            heap.delMax();
            heap.heapCore.length.should.be.eql(0);

            heap.add(0);
            heap.add(5);
            heap.add(7);
            heap.add(12);
            heap.add(10);
            heap.add(15);
            heap.add(8);
            heap.add(13);
            heap.add(17);
            heap.add(11);
            heap.add(14);
            heap.add(16);
            heap.add(20);
            heap.add(21);
            heap.add(9);
            heap.heapCore.length.should.be.eql(15);


            heap.delMax();
            heap.delMax();
            heap.delMax();
            heap.heapCore.length.should.be.eql(12);

            heap.delMax();
            heap.delMax();
            heap.delMax();
            heap.delMax();
            heap.heapCore.length.should.be.eql(8);

            heap.delMax();
            heap.delMax();
            heap.delMax();
            heap.delMax();
            heap.heapCore.length.should.be.eql(4);

            heap.delMax();
            heap.heapCore.length.should.be.eql(3);

            heap.delMax();
            heap.delMax();
            heap.delMax();
            heap.heapCore.length.should.be.eql(0);
        });

        it('should return min added element', function () {
            let heap = new Heap(compare);

            heap.add(0);
            heap.add(5);
            heap.add(7);
            heap.add(12);
            heap.add(10);
            heap.add(15);
            heap.add(8);
            heap.add(13);
            heap.add(17);
            heap.add(11);
            heap.add(14);
            heap.add(16);
            heap.add(20);
            heap.add(21);
            heap.add(9);

            heap.delMax().should.be.eql(0);
            heap.delMax().should.be.eql(5);
            heap.delMax().should.be.eql(7);
            heap.delMax().should.be.eql(8);
            heap.delMax().should.be.eql(9);
            heap.delMax().should.be.eql(10);
            heap.delMax().should.be.eql(11);
            heap.delMax().should.be.eql(12);
            heap.delMax().should.be.eql(13);
            heap.delMax().should.be.eql(14);
            heap.delMax().should.be.eql(15);
            heap.delMax().should.be.eql(16);
            heap.delMax().should.be.eql(17);
            heap.delMax().should.be.eql(20);
            heap.delMax().should.be.eql(21);
            heap.heapCore.length.should.be.eql(0);
        });
    });

    describe('#heapify', function () {
        it ('should return array', function () {
            let heap = new Heap(compare);

            heap.heapify([]).should.be.instanceOf(Array);
            heap.heapify([6, 7, 9, 1, 2]).should.be.instanceOf(Array);
        });

        it('should return array with same length', function () {
            let heap = new Heap(compare);

            heap.heapify([]).length.should.be.eql(0);
            heap.heapify([0]).length.should.be.eql(1);
            heap.heapify([6, 7, 9, 1, 2]).length.should.be.eql(5);
        });

        it('should return heapifyed array', function () {
            let heap = new Heap(compare);

            heap.heapify([1, 0]).should.be.deepEqual([0, 1]);

            let heapifyed = new Heap(compare, shuffle([0, 5, 7, 12, 10, 15, 8, 13, 17, 11, 14, 16, 20, 21, 9]));
            let prev,
                current = -999;

            for (let i = 15; i > 0; i--) {
                prev = current;
                current = heapifyed.delMax();
                current.should.be.aboveOrEqual(prev);
            }
        });
    });

    describe('#toArray', function () {
        it('should return sorted array', function () {
            let heap = new Heap(compare, shuffle([0, 5, 7, 12, 10, 15, 8, 13, 17, 11, 14, 16, 20, 21, 9]));

            heap.toArray().should.be.deepEqual([0, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 21]);
        });
    })
});