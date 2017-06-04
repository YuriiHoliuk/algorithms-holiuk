'use strict';

const algolib = require('../../../index');
const LinkedList = algolib.LinkedList;

describe('#LinkedList', function() {

    describe('#Data structure', function() {

        it('should create proper data structure', function() {
            let linkedList = new LinkedList();

            linkedList.should.be.instanceof(LinkedList);

            linkedList.push.should.be.instanceof(Function);
            linkedList.pop.should.be.instanceof(Function);
            linkedList.unshift.should.be.instanceof(Function);
            linkedList.shift.should.be.instanceof(Function);
            linkedList.get.should.be.instanceof(Function);
            linkedList.insertAfter.should.be.instanceof(Function);
            linkedList.remove.should.be.instanceof(Function);
            linkedList.getArray.should.be.instanceof(Function);
            LinkedList.createList.should.be.instanceof(Function);
        });
    });

    describe('#push(value)', function() {

        it('#push(value) should add element to list', function() {
            let linkedList = new LinkedList();

            linkedList.push('some_data');

            linkedList._head._data.should.be.eql('some_data');
            linkedList._tail.should.be.eql(linkedList._head);
        });

        it('#push(value) should add elements to end of the list in correct order', function() {
            let linkedList = new LinkedList();

            linkedList.push('some_data');
            linkedList.push('second');
            linkedList.push('third');

            linkedList._head._data.should.be.eql('some_data');
            linkedList._head._next._data.should.be.eql('second');
            linkedList._head._next._next._data.should.be.eql('third');
        });
    });

    describe('#pop()', function() {

        it('#pop() should return undefined if list is empty', function() {
            let linkedList = new LinkedList();

            (linkedList.pop() === undefined).should.be.true();
        });

        it('#pop() should return last element in list and remove it', function() {
            let linkedList = new LinkedList();

            linkedList.push('0');

            linkedList.pop().should.be.eql('0');

            linkedList.push('0');
            linkedList.push('1');
            linkedList.push('2');
            linkedList.push('3');

            linkedList.pop().should.be.eql('3');
            linkedList.pop().should.be.eql('2');
            linkedList.pop().should.be.eql('1');
            linkedList.pop().should.be.eql('0');
        });
    });

    describe('#unshift(value)', function() {

        it('#unshift(value) should add element to list head in correct order', function() {
            let linkedList = new LinkedList();

            linkedList.unshift('0');

            linkedList.pop().should.be.eql('0');

            linkedList.unshift('0');
            linkedList.unshift('1');
            linkedList.unshift('2');
            linkedList.unshift('3');

            linkedList.pop().should.be.eql('0');
            linkedList.pop().should.be.eql('1');
            linkedList.pop().should.be.eql('2');
            linkedList.pop().should.be.eql('3');
        });
    });

    describe('#shift()', function() {

        it('#shift() should return undefined if list is empty', function() {
            let linkedList = new LinkedList();

            (linkedList.shift() === undefined).should.be.true();
        });

        it('#shift() should return first element in list and remove it', function() {
            let linkedList = new LinkedList();

            linkedList.unshift('0');

            linkedList.shift().should.be.eql('0');

            linkedList.push('0');
            linkedList.push('1');
            linkedList.push('2');
            linkedList.unshift('-1');

            linkedList.shift().should.be.eql('-1');
            linkedList.shift().should.be.eql('0');
            linkedList.shift().should.be.eql('1');
            linkedList.shift().should.be.eql('2');
        });
    });

    describe('#get(n)', function() {

        it('#get(n) should return undefined if index - 1 > number of elements in the list', function() {
            let linkedList = new LinkedList();

            (linkedList.get(0) === undefined).should.be.true();

            linkedList.push('0');
            linkedList.push('1');
            linkedList.push('2');
            linkedList.push('3');

            (linkedList.get(4) === undefined).should.be.true();
            (linkedList.get(50) === undefined).should.be.true();
        });

        it('#get(index) should return element of the list with this index', function() {
            let linkedList = new LinkedList();

            linkedList.push('0');
            linkedList.push('1');
            linkedList.push('2');
            linkedList.push('3');

            linkedList.get(0).should.be.eql('0');
            linkedList.get(3).should.be.eql('3');
            linkedList.get(1).should.be.eql('1');
        });
    });

    describe('#insertAfter(value, index)', function() {

        it('#insertAfter(value, index) should return undefined if no element with this index', function() {
            let linkedList = new LinkedList();

            (linkedList.insertAfter('', 0) === undefined).should.be.true();

            linkedList.push('0');
            linkedList.push('1');
            linkedList.push('2');

            (linkedList.insertAfter('', 3) === undefined).should.be.true();
            (linkedList.insertAfter('', 20) === undefined).should.be.true();
        });

        it('#insertAfter(value, index) should insert element into list after with index', function() {
            let linkedList = new LinkedList();

            linkedList.push('0');
            linkedList.push('2');
            linkedList.push('3');

            linkedList.insertAfter('1', 0);

            linkedList.get(1).should.be.eql('1');

            linkedList.insertAfter('4', 3);
            linkedList.insertAfter('5', 4);

            linkedList.get(4).should.be.eql('4');
            linkedList.pop().should.be.eql('5');
        });
    });

    describe('#remove(index)', function() {

        it('#remove(index) should return undefined if no element with this index', function() {
            let linkedList = new LinkedList();

            (linkedList.remove(0) === undefined).should.be.true();

            linkedList.push('0');
            linkedList.push('1');

            (linkedList.remove(2) === undefined).should.be.true();
        });

        it('#remove(index) should remove element with index from list and return it', function() {
            let linkedList = new LinkedList();

            linkedList.push('0');
            linkedList.push('1');
            linkedList.push('2');
            linkedList.push('3');
            linkedList.push('4');

            linkedList.remove(1).should.be.eql('1');
            linkedList.remove(1).should.be.eql('2');
            linkedList.remove(2).should.be.eql('4');
        });

        it('#remove(index) should return first element if index = 0', function() {
            let linkedList = new LinkedList();

            linkedList.push('0');
            linkedList.push('1');
            linkedList.push('2');
            linkedList.push('3');
            linkedList.push('4');

            linkedList.remove(0).should.be.eql('0');
            linkedList.remove(0).should.be.eql('1');
            linkedList.remove(0).should.be.eql('2');
        });

        it('#remove(index) should return last element if index = list length - 1', function() {
            let linkedList = new LinkedList();

            linkedList.push('0');
            linkedList.push('1');
            linkedList.push('2');
            linkedList.push('3');
            linkedList.push('4');

            linkedList.remove(4).should.be.eql('4');
            linkedList.remove(3).should.be.eql('3');
            linkedList.remove(2).should.be.eql('2');
        });
    });

    describe('#length', function() {

        it('#length should be 0 if list is empty', function() {
            let linkedList = new LinkedList();

            linkedList.length.should.be.eql(0);

            linkedList.push('0');
            linkedList.pop();

            linkedList.length.should.be.eql(0);

            linkedList.unshift('0');
            linkedList.shift();

            linkedList.length.should.be.eql(0);

            linkedList.push('0');
            linkedList.push('1');
            linkedList.push('2');
            linkedList.remove(1);
            linkedList.shift();
            linkedList.pop();

            linkedList.length.should.be.eql(0);
        });

        it('#length should be equal number of elements in the list', function() {
            let linkedList = new LinkedList();

            linkedList.length.should.be.eql(0);

            linkedList.push('0');
            linkedList.length.should.be.eql(1);

            linkedList.unshift('-1');
            linkedList.length.should.be.eql(2);

            linkedList.insertAfter('between', 0);
            linkedList.length.should.be.eql(3);

            linkedList.remove(1);
            linkedList.length.should.be.eql(2);

            linkedList.shift();
            linkedList.length.should.be.eql(1);

            linkedList.pop();
            linkedList.length.should.be.eql(0);
        });
    });

    describe('#getArray()', function() {

        it('#getArray() should return empty Array if list is empty', function() {
            let linkedList = new LinkedList();

            const arr = linkedList.getArray();

            arr.should.be.instanceof(Array);
            arr.should.be.eql([]);
        });

        it('#getArray() should return array of elements of the list', function() {
            let linkedList = new LinkedList();

            linkedList.push('0');

            let arr = linkedList.getArray()
            arr.should.be.deepEqual(['0']);

            linkedList.push('1');
            linkedList.push('2');
            linkedList.push('3');

            arr = linkedList.getArray();
            arr.should.be.deepEqual(['0', '1', '2', '3']);
        });
    });

    describe('#createList(array)', function() {

        it('#creteList(array) should return LinkedList', function() {
            let linkedList = LinkedList.createList([]);

            linkedList.should.be.instanceof(LinkedList);
        });

        it('#creteList(array) should return LinkedList of elements of this array', function() {
            let linkedList = LinkedList.createList(['10', { deep: 90 }, 12, [1, '12']]);

            linkedList.pop().should.be.deepEqual([1, '12']);
            linkedList.pop().should.be.deepEqual(12);
            linkedList.pop().should.be.deepEqual({ deep: 90 });
            linkedList.pop().should.be.deepEqual('10');
        });
    });
});