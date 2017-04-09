'use strict';

const algolib = require('../index');

describe('#shouldSayHello', function() {

    it('should return NO if not attended all the letters', function() {
        var bool = algolib.shouldSayHello('hrtlfloo');

        bool.should.be.eql('NO');
    });


    it('should return YES if word equal hello', function() {
        var bool = algolib.shouldSayHello('hello');

        bool.should.be.eql('YES');
    });


    it('should return NO if the letters in the wrong order', function() {
        var bool = algolib.shouldSayHello('hrllejoho');

        bool.should.be.eql('NO');
    });


    it('should return YES if string contain hello in right order', function() {
        var bool = algolib.shouldSayHello('hfhherllejoho');

        bool.should.be.eql('YES');
    });
});