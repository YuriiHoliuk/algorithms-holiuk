'use strict';

const algolib = require('../index');

describe.only('#unionFind', function() {

    it('should create proper data structure', function() {
        let uf = new algolib.UnionFind();

        uf.connect.should.be.instanceOf(Function);
        uf.isConnected.should.be.instanceOf(Function);
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


});