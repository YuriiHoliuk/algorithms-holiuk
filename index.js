'use strict';

let bubbleSort = require('./bubble-sort');
let coverByTile = require('./entry-test/coverByTile');
let divideWatermelon = require('./divideWatermelon');
let countStones = require('./countStones');
let shouldSayHello = require('./shouldSayHello');
let getNextBeautifulYear = require('./getNextBeautifulYear');
let UnionFind = require('./unionFind');
let QuickUnion = require('./quickUnion');

let algolib = {
    bubbleSort,
    coverByTile,
    divideWatermelon,
    countStones,
    shouldSayHello,
    getNextBeautifulYear,
    UnionFind,
    QuickUnion
}

module.exports = algolib;