'use strict';

const swap = require('../../utilities/utilities').swap;

class Heap {

    constructor(compare, array) {
        this.compare = compare;
        this.heapCore = array ? this.heapify(array) : [];
    }

    getMax() {
        return this.heapCore[0];
    }

    delMax() {
        if (!this.heapCore.length) return false;

        let temp = this.heapCore[this.heapCore.length - 1];
        this.heapCore[this.heapCore.length - 1] = this.heapCore[0];
        this.heapCore[0] = temp;

        let maxEl = this.heapCore.pop();
        this._siftDown(0);

        return maxEl;
    }

    add(value) {
        this.heapCore.push(value);
        this._siftUp(this.heapCore.length - 1);
    }

    merge(heap1, heap2) {

    }

    heapify(array) {
        let length = array.length,
            from = Math.floor(length / 2);

        for (let i = from; i >= 0; i--) {
            this._siftDown(i, array);
        }

        return array;
    }

    toArray() {
        let sortedArray = JSON.parse(JSON.stringify(this.heapCore)),
            length = sortedArray.length;

        for (let i = length - 1; i >= 0; i--) {
            swap(sortedArray, i, 0);

            this._siftDown(0, sortedArray, i);
        }

        return sortedArray.reverse();
    }

    _siftUp(index, array) {
        array = array ? array : this.heapCore;

        while (index > 0) {
            let parent = Heap._getParent(index);

            if (!parent && parent !== 0) return;

            if (this.compare(array[parent], array[index])) {
                swap(array, index, parent);
                index = parent;
            } else {
                return;
            }
        }
    }

    _siftDown(index, array, to) {
        array = array ? array : this.heapCore;

        let length = to !== undefined ? to : array.length;

        while (index < length) {

            let firstChild = Heap._getFirst(index),
                secondChild = Heap._getSecond(index),
                maxIndex = false;

            if (firstChild > length - 1) return false;

            if (!this.compare(array[firstChild], array[index])) {
                maxIndex = firstChild;
            }

            if (secondChild < length) {
                if (!maxIndex && maxIndex !== 0) {
                    if (!this.compare(array[secondChild], array[index])) {
                        maxIndex = secondChild;
                    }
                } else {
                    if (!this.compare(array[secondChild], array[maxIndex])) {
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

    static siftUp(index, array, compare) {
        while (index > 0) {
            let parent = Heap._getParent(index);

            if (!parent && parent !== 0) return;

            if (!compare(array[parent], array[index])) {
                swap(array, index, parent);
                index = parent;
            } else {
                return;
            }
        }
    }

    static siftDown(index, array, compare, to) {
        let length = to !== undefined ? to : array.length;

        while (index < length) {
            let firstChild = Heap._getFirst(index),
                secondChild = Heap._getSecond(index),
                maxIndex = false;

            if (firstChild > length - 1) return false;

            if (compare(array[firstChild], array[index])) {
                maxIndex = firstChild;
            }

            if (secondChild < length) {
                if (!maxIndex && maxIndex !== 0) {
                    if (compare(array[secondChild], array[index])) {
                        maxIndex = secondChild;
                    }
                } else {
                    if (compare(array[secondChild], array[maxIndex])) {
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