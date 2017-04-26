'use strict';

const algolib = require('../index');

describe.only('#LinkedList', function() {

    it('should create proper data structure', function() {
        let linkedList = new algolib.LinkedList();

        linkedList.should.be.instanceof(algolib.LinkedList);
        linkedList.should.have.property('_head');
        linkedList.should.have.property('_tail');
        linkedList.push.should.be.instanceof(Function);
    });

    it('#push should add element to list', function() {
        let linkedList = new algolib.LinkedList();

        linkedList.push('some_data');

        linkedList._head._data.should.be.eql('some_data');
        linkedList._tail.should.be.eql(linkedList._head);
    });

    it('#push should add element to list in chain', function() {
        let linkedList = new algolib.LinkedList();

        linkedList.push('some_data');
        linkedList.push('second');
        linkedList.push('third');

        linkedList._head._data.should.be.eql('some_data');
        linkedList._head._next._data.should.be.eql('second');
        linkedList._head._next._next._data.should.be.eql('third');
    });

    it('should _tail be equal last element in list', function() {
        let linkedList = new algolib.LinkedList();

        linkedList.push('some_data');
        linkedList.push('second');
        linkedList.push('third');

        linkedList._tail._data.should.be.eql('third');
    });

    it('#get should return undefined if no element with this index', function() {
        let linkedList = new algolib.LinkedList();

        (linkedList.get(0) === undefined).should.be.true();

        linkedList.push('0');
        linkedList.push('1');
        linkedList.push('2');
        linkedList.push('3');

        (linkedList.get(4) === undefined).should.be.true();
        (linkedList.get(50) === undefined).should.be.true();

    });

    it('#get should return element with this index', function() {
        let linkedList = new algolib.LinkedList();

        linkedList.push('0');
        linkedList.push('1');
        linkedList.push('2');
        linkedList.push('3');

        linkedList.get(0).should.be.eql('0');
        linkedList.get(3).should.be.eql('3');
        linkedList.get(1).should.be.eql('1');
    });

    it('#pop should return undefined if empty list', function() {
        let linkedList = new algolib.LinkedList();

        (linkedList.pop() === undefined).should.be.true();
    });

    it('#pop should return last element in list', function() {
        let linkedList = new algolib.LinkedList();

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