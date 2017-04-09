'use strict';

const algolib = require('../index');

describe.only('#unionFind', function() {

    it('should create proper data structure', function() {
        let uf = new algolib.UnionFind();

        uf.connect.should.be.instanceOf(Function);
        uf.isConnected.should.be.instanceOf(Function);
        uf.count.should.be.instanceOf(Function);
        uf.component.should.be.instanceOf(Function);
    });


    it('should  #isConnected return false if not connected', function() {
        let uf = new algolib.UnionFind();

        let isElementConnected = uf.isConnected(8, 15);
        isElementConnected.should.be.false();
    });


    it('should  #isConnected return true if elements are connected', function() {
        let uf = new algolib.UnionFind();

        uf.connect(2, 10);

        let isElementConnected = uf.isConnected(2, 10);
        isElementConnected.should.be.true();
    });

    it('should  #isConnected return true if elements are connected in chain', function() {
        let uf = new algolib.UnionFind();

        uf.connect(2, 10);
        uf.connect(10, 15);

        let isElementConnected = uf.isConnected(2, 15);
        isElementConnected.should.be.true();
    });


    it('should #count return 0 if no used elements', function() {
        let uf = new algolib.UnionFind();


        let count = uf.count();
        count.should.be.eql(0);
    });

    it('should #count return 1 if we connet 2 elements to 1 component', function() {
        let uf = new algolib.UnionFind();

        uf.connect(9, 19);

        let count = uf.count();
        count.should.be.eql(1);
    });

    it('should #count return 2 if we conneted 2 times and create 2 components', function() {
        let uf = new algolib.UnionFind();

        uf.connect(9, 19);
        uf.connect(8, 1);


        let count = uf.count();
        count.should.be.eql(2);
    });

    it('should #component return "false" if element are not in any component ', function() {
        let uf = new algolib.UnionFind();


        let component = uf.component(5);
        component.should.be.false();
    });

    it('should #component(1) return "5" if element connected to 5', function() {
        let uf = new algolib.UnionFind();

        uf.connect(1, 5);

        let component = uf.component(1);
        component.should.be.eql(5);
    });

    it('should #component(1) return "10" after chain: 1 > 2 > 4 > 7 > 10 (revers)', function() {
        let uf = new algolib.UnionFind();

        uf.connect(7, 10);
        uf.connect(4, 7);
        uf.connect(2, 4);
        uf.connect(1, 2);

        let component = uf.component(1);
        component.should.be.eql(10);
    });

});