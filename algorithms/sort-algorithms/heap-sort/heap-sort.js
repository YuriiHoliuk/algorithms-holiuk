'use strict';

const Heap = require('../../data-structures/heap/heap');
const swap = require('../../utilities/utilities').swap;

function heapSort(array, compare) {
        let length = array.length,
            from = Math.floor(length / 2);

        for (let i = from; i >= 0; i--) {
            Heap.siftDown(i, array, compare);
        }

        for (let i = length - 1; i >= 0; i--) {
            swap(array, i, 0);
            Heap.siftDown(0, array, compare, i);
        }

        return array;
}

module.exports = heapSort;