'use strict';

const Heap = require('../heap/heap');

function heapSort(array, compare) {
    let heap = new Heap(compare, array);
    return heap.toArray();
}

module.exports = heapSort;