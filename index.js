'use strict';

let bubbleSort = require('./algorithms/bubble-sort/bubble-sort');
let coverByTile = require('./algorithms/cover-by-tile/cover-by-tile');
let divideWatermelon = require('./algorithms/divide-watermelon/divide-watermelon');
let countStones = require('./algorithms/count-stones/count-stones');
let shouldSayHello = require('./algorithms/should-say-hello/should-say-hello');
let getNextBeautifulYear = require('./algorithms/get-next-beautiful-year/get-next-beautiful-year');
let UnionFind = require('./algorithms/union-find/union-find');
let QuickUnion = require('./algorithms/union-find/quick-union');
let LinkedList = require('./algorithms/linked-list/linked-list');
let selectionSort = require('./algorithms/sort-algorithms/selection-sort');
let Node = require('./algorithms/linked-list/node');

let algolib = {
    bubbleSort,
    coverByTile,
    divideWatermelon,
    countStones,
    shouldSayHello,
    getNextBeautifulYear,
    UnionFind,
    QuickUnion,
    LinkedList,
    Node,
    selectionSort
};

module.exports = algolib;