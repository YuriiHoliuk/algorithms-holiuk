"use strict";

const algolib = require('../../index');

describe('#QuickUnion', function() {

    it('should create proper data structure', function() {
        let qu = new algolib.QuickUnion();

        qu.connect.should.be.instanceOf(Function);
        qu.isConnected.should.be.instanceOf(Function);
        qu.count.should.be.instanceOf(Function);
        qu.component.should.be.instanceOf(Function);
    });


    it('should #isConnected return false if not connected', function() {
        let qu = new algolib.QuickUnion();

        let isElementConnected = qu.isConnected(8, 15);
        isElementConnected.should.be.false();
    });


    it('should #isConnected return true if elements are connected', function() {
        let qu = new algolib.QuickUnion();

        qu.connect(2, 10);

        let isElementConnected = qu.isConnected(2, 10);
        isElementConnected.should.be.true();
    });

    it('should #isConnected return true if elements are connected in chain', function() {
        let qu = new algolib.QuickUnion();

        qu.connect(2, 10);
        qu.connect(10, 15);

        let isElementConnected = qu.isConnected(2, 15);
        isElementConnected.should.be.true();
    });

    it('should #isConnected change weights[a] to 1 & weights[b] to 2 if a & b was never connected', function() {
        let qu = new algolib.QuickUnion();

        qu.connect(2, 10);

        qu._weights[2].should.be.eql(1);
        qu._weights[10].should.be.eql(2);
    });

    it('should #isConnected change weights[a] to 3 if connect chain c > b > a ', function() {
        let qu = new algolib.QuickUnion();

        qu.connect(1, 2);
        qu.connect(3, 1);

        qu._weights[2].should.be.eql(3);
    });

    it('should #isConnected(a, c) return true if connect chain c > b > a ', function() {
        let qu = new algolib.QuickUnion();

        qu.connect(1, 2);
        qu.connect(3, 1);

        qu.isConnected(2, 3).should.be.true();
    });

    it('should weights[5] be equal 5 after chain connection: 7 > 5; 8 > 7; 6 > 4; 7 > 6', function() {
        let qu = new algolib.QuickUnion();

        qu.connect(7, 5);
        qu.connect(8, 7);
        qu.connect(6, 4);
        qu.connect(7, 6);

        qu._weights[5].should.be.eql(5);
    });

    it('should findRoot(6) be equal 5 after chain connection: 7 > 5; 8 > 7; 6 > 4; 7 > 6', function() {
        let qu = new algolib.QuickUnion();

        qu.connect(7, 5);
        qu.connect(8, 7);
        qu.connect(6, 4);
        qu.connect(7, 6);

        qu._findRoot(6).should.be.eql(5);
    });

    it('should isConnected(6, 5) change elements[6] to 5 after chain connection: 7 > 5; 8 > 7; 6 > 4; 7 > 6', function() {
        let qu = new algolib.QuickUnion();

        qu.connect(7, 5);
        qu.connect(8, 7);
        qu.connect(6, 4);
        qu.connect(7, 6);

        qu.isConnected(6, 5);

        qu._elements[6].should.be.eql(5);
    });


    it('should #count return 0 if no used elements', function() {
        let qu = new algolib.QuickUnion();


        let count = qu.count();
        count.should.be.eql(0);
    });

    it('should #count return 1 if we connet 2 elements to 1 component', function() {
        let qu = new algolib.QuickUnion();

        qu.connect(9, 19);

        let count = qu.count();
        count.should.be.eql(1);
    });

    it('should #count return 2 if we conneted 2 times and create 2 components', function() {
        let qu = new algolib.QuickUnion();

        qu.connect(9, 19);
        qu.connect(8, 1);


        let count = qu.count();
        count.should.be.eql(2);
    });

    it('should #component return "false" if element are not in any component ', function() {
        let qu = new algolib.QuickUnion();

        let component = qu.component(5);
        component.should.be.false();
    });

    it('should #component(1) return "5" if element connected to 5', function() {
        let qu = new algolib.QuickUnion();

        qu.connect(1, 5);

        let component = qu.component(1);
        component.should.be.eql(5);
    });

    it('should #component(1) return "10" after chain: 1 > 2 > 4 > 7 > 10 (revers)', function() {
        let qu = new algolib.QuickUnion();

        qu.connect(7, 10);
        qu.connect(4, 7);
        qu.connect(2, 4);
        qu.connect(1, 2);

        let component = qu.component(1);
        component.should.be.eql(10);
    });

});