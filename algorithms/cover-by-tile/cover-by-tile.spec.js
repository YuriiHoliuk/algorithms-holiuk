'use strict';

const algolib = require('../../index.js');

describe('#coverByTile', function() {

  it('should count amount of tiles to cower area (integer)', function() {
    let tilesAmount = algolib.coverByTile(5, 3, 2);

    tilesAmount.should.be.eql(6);
  });

  it('should count amount of tiles to cower area (float)', function() {
    let tilesAmount = algolib.coverByTile(0.5, 1.3, 0.2);

    tilesAmount.should.be.eql(21);
  });

})