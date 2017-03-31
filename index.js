'use strict';

let bubbleSort = require('./bubble-sort');
let coverByTile = require('./entry-test/coverByTile');
let divideWatermelon = require('./divideWatermelon');
let countStones = require('./countStones');
let shouldSayHello = require('./shouldSayHello');
let getNextBeautifulYear = require('./getNextBeautifulYear');

let algolib = {
    bubbleSort,
    coverByTile,
    divideWatermelon,
    countStones,
    shouldSayHello,
    getNextBeautifulYear
}

module.exports = algolib;