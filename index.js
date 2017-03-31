'use strict';

let bubbleSort = require('./bubble-sort');
let coverByTile = require('./entry-test/coverByTile');
let divideWatermelon = require('./divideWatermelon');
let countStones = require('./countStones');
let shouldSayHello = require('./shouldSayHello');

let algolib = {
    bubbleSort,
    coverByTile,
    divideWatermelon,
    countStones,
    shouldSayHello
}

module.exports = algolib;