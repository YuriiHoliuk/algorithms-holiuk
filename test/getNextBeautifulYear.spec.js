'use strict';

const algolib = require('../index');

describe('#getNextBeautifulYear', function() {

    it('should return 2013 if current is 1987', function() {
        var next = algolib.getNextBeautifulYear(1987);

        next.should.be.eql(2013);
    });

    it('should return 9012 if current is last allowable year', function() {
        var next = algolib.getNextBeautifulYear(9000);

        next.should.be.eql(9012);
    });

    it('should return 9012 if current is penultimate allowable year', function() {
        var next = algolib.getNextBeautifulYear(8999);

        next.should.be.eql(9012);
    });

    it('should return 2014 if current is 2013', function() {
        var next = algolib.getNextBeautifulYear(2013);

        next.should.be.eql(2014);
    });
})