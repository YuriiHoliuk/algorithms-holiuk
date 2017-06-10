'use strict';

let bubbleSort = require('./algorithms/sort-algorithms/bubble-sort/bubble-sort');
let coverByTile = require('./algorithms/codeforces/cover-by-tile/cover-by-tile');
let divideWatermelon = require('./algorithms/codeforces/divide-watermelon/divide-watermelon');
let countStones = require('./algorithms/codeforces/count-stones/count-stones');
let shouldSayHello = require('./algorithms/codeforces/should-say-hello/should-say-hello');
let getNextBeautifulYear = require('./algorithms/codeforces/get-next-beautiful-year/get-next-beautiful-year');
let utilities = require('./algorithms/utilities/utilities');
let compareFunctions = require('./algorithms/utilities/compare-functions');
let UnionFind = require('./algorithms/union-find/union-find');
let QuickUnion = require('./algorithms/union-find/quick-union');
let LinkedList = require('./algorithms/data-structures/linked-list/linked-list');
let Heap = require('./algorithms/data-structures/heap/heap');
let selectionSort = require('./algorithms/sort-algorithms/selection-sort/selection-sort');
let shellSort = require('./algorithms/sort-algorithms/shell-sort/shell-sort');
let mergeSort = require('./algorithms/sort-algorithms/merge-sort/merge-sort');
let insertionSort = require('./algorithms/sort-algorithms/insertion-sort/insertion-sort');
let quickSort = require('./algorithms/sort-algorithms/quick-sort/quick-sort');
let heapSort = require('./algorithms/sort-algorithms/heap-sort/heap-sort');
let BinarySearchTree = require('./algorithms/data-structures/binary-search-tree/binary-search-tree');

let algolib = {
    bubbleSort,
    coverByTile,
    divideWatermelon,
    countStones,
    shouldSayHello,
    getNextBeautifulYear,
    utilities,
    compareFunctions,
    UnionFind,
    QuickUnion,
    LinkedList,
    Heap,
    selectionSort,
    shellSort,
    mergeSort,
    insertionSort,
    quickSort,
    heapSort,
    BinarySearchTree
};

module.exports = algolib;