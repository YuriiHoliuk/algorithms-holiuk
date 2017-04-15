'use strict';

const algolib = require('../index');

describe.only('#QuickUnion', function() {

    it('should create proper data structure', function() {
        let qu = new algolib.QuickUnion();

        qu.connect.should.be.instanceOf(Function);
        qu.isConnected.should.be.instanceOf(Function);
        qu.count.should.be.instanceOf(Function);
        qu.component.should.be.instanceOf(Function);
    });


    it('should  #isConnected return false if not connected', function() {
        let qu = new algolib.QuickUnion();

        let isElementConnected = qu.isConnected(8, 15);
        isElementConnected.should.be.false();
    });


    it('should  #isConnected return true if elements are connected', function() {
        let qu = new algolib.QuickUnion();

        qu.connect(2, 10);

        let isElementConnected = qu.isConnected(2, 10);
        isElementConnected.should.be.true();
    });

    it('should  #isConnected return true if elements are connected in chain', function() {
        let qu = new algolib.QuickUnion();

        qu.connect(2, 10);
        qu.connect(10, 15);

        let isElementConnected = qu.isConnected(2, 15);
        isElementConnected.should.be.true();
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


    it('should somesing', function() {
        let qu = new algolib.QuickUnion();

        qu.connect(7, 10);
        console.log(qu._elements);

        qu.connect(4, 7);
        console.log(qu._elements);

        qu.connect(2, 4);
        console.log(qu._elements);

        qu.connect(1, 2);
        console.log(qu._elements);



        qu.connect(19, 26);
        console.log(qu._elements);

        qu.connect(13, 20);
        console.log(qu._elements);

        qu.connect(13, 22);
        console.log(qu._elements);

        qu.connect(22, 26);
        console.log(qu._elements);
        console.log(qu._elements[19]);

        qu.connect(19, 4);
        console.log(qu._elements);


        console.log(qu.isConnected(19, 26));
        console.log(qu.isConnected(19, 1));
        console.log(qu.isConnected(26, 1));

        let t = true;
        t.should.be.true();
    });

});