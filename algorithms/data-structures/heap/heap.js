'use strict';

const swap = require('../../utilities/utilities').swap;

class Heap {

    constructor(compare, array) {
        this.compare = compare;
        if (array) {
            this.heapCore = array;
            Heap.heapify(this.heapCore, this.compare);
        } else {
            this.heapCore = [];
        }
    }

    get size() {
        return this.heapCore.length;
    }

    getMax() {
        return this.heapCore[0];
    }

    delMax() {
        if (!this.size) return false;

        swap(this.heapCore, this.size - 1, 0);

        let maxEl = this.heapCore.pop();
        this._siftDown(0);
        return maxEl;
    }

    add(value) {
        this.heapCore.push(value);
        this._siftUp(this.size - 1);
    }

    merge(heap1, heap2) {

    }

    static heapify(array, compare, reverse) {
        let length = array.length,
            from = Math.floor(length / 2);

        for (let i = from; i >= 0; i--) {
            Heap.siftDown(i, array, compare, reverse);
        }

        return array;
    }

    toArray() {
        let sortedArray = JSON.parse(JSON.stringify(this.heapCore)),
            length = sortedArray.length;
            sortedArray = Heap.heapify(sortedArray, this.compare, true);

        for (let i = length - 1; i >= 0; i--) {
            swap(sortedArray, i, 0);
            Heap.siftDown(0, sortedArray, this.compare, true, i);
        }
        return sortedArray;
    }

    _siftUp(index, reverse) {
        Heap.siftUp(index, this.heapCore, this.compare, reverse);
    }

    _siftDown(index, reverse, to) {
        Heap.siftDown(index, this.heapCore, this.compare, reverse, to);
    }

    static siftUp(index, array, compare, reverse) {
        while (index > 0) {
            let parent = Heap._getParent(index);

            if (!parent && parent !== 0) return;

            if (reverse
                    ? compare(array[index], array[parent])
                    : compare(array[parent], array[index])) {
                swap(array, index, parent);
                index = parent;
            } else {
                return;
            }
        }
    }

    static siftDown(index, array, compare, reverse, to) {
        let length = to !== undefined ? to : array.length;

        while (index < length) {
            let firstChild = Heap._getFirst(index),
                secondChild = Heap._getSecond(index),
                maxIndex = false;

            if (firstChild > length - 1) return false;

            if (reverse
                    ? compare(array[firstChild], array[index])
                    : compare(array[index], array[firstChild])) {
                maxIndex = firstChild;
            }

            if (secondChild < length) {
                if (!maxIndex && maxIndex !== 0) {
                    if (reverse
                            ? compare(array[secondChild], array[index])
                            : compare(array[index], array[secondChild])) {
                        maxIndex = secondChild;
                    }
                } else {
                    if (reverse
                            ? compare(array[secondChild], array[maxIndex])
                            : compare(array[maxIndex], array[secondChild])) {
                        maxIndex = secondChild;
                    }
                }
            }

            if (maxIndex) {
                swap(array, index, maxIndex);
                index = maxIndex;
            } else {
                return false;
            }
        }
    }

    static _getFirst(n) {
        return 2 * n + 1;
    }

    static _getSecond(n) {
        return 2 * n + 2;
    }

    static _getParent(n) {
        let parent = Math.floor((n - 1) / 2);

        return parent >= 0 ? parent : false;
    }
}

module.exports = Heap;