'use strict';

const Heap = require('../../data-structures/heap/heap');
const swap = require('../../utilities/utilities').swap;

function heapSort(array, compare) {
    let length = array.length;

    Heap.heapify(array, compare, true);

    for (let i = length - 1; i >= 0; i--) {
        swap(array, i, 0);
        Heap.siftDown(0, array, compare, true, i);
    }
    return array;
}

module.exports = heapSort;