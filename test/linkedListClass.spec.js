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
});