'use strict';

const bubbleSort = require('./algorithms/sort-algorithms/bubble-sort/bubble-sort');
const coverByTile = require('./algorithms/codeforces/cover-by-tile/cover-by-tile');
const divideWatermelon = require('./algorithms/codeforces/divide-watermelon/divide-watermelon');
const countStones = require('./algorithms/codeforces/count-stones/count-stones');
const shouldSayHello = require('./algorithms/codeforces/should-say-hello/should-say-hello');
const getNextBeautifulYear = require('./algorithms/codeforces/get-next-beautiful-year/get-next-beautiful-year');
const utilities = require('./algorithms/utilities/utilities');
const compareFunctions = require('./algorithms/utilities/compare-functions');
const UnionFind = require('./algorithms/union-find/union-find');
const QuickUnion = require('./algorithms/union-find/quick-union');
const LinkedList = require('./algorithms/data-structures/linked-list/linked-list');
const Heap = require('./algorithms/data-structures/heap/heap');
const selectionSort = require('./algorithms/sort-algorithms/selection-sort/selection-sort');
const shellSort = require('./algorithms/sort-algorithms/shell-sort/shell-sort');
const mergeSort = require('./algorithms/sort-algorithms/merge-sort/merge-sort');
const insertionSort = require('./algorithms/sort-algorithms/insertion-sort/insertion-sort');
const quickSort = require('./algorithms/sort-algorithms/quick-sort/quick-sort');
const heapSort = require('./algorithms/sort-algorithms/heap-sort/heap-sort');
const BinarySearchTree = require('./algorithms/data-structures/binary-search-tree/binary-search-tree');
const Graph = require('./algorithms/data-structures/graph/graph');
// const justifyText = require('./algorithms/justify-text/justify-text');

const algolib = {
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
    BinarySearchTree,
    Graph,
    // justifyText
};

module.exports = algolib;