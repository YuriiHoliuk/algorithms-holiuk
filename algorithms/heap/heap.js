'use strict';

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

    merge(heap) {

    }

    heapify(array) {
        let length = array.length,
            from = Math.floor(length / 2);

        for (let i = from; i >= 0; i--) {
            this._siftDown(i, array);
        }

        return array;
    }

    _siftUp(index, array) {
        array = array ? array : this.heapCore;

        while (index > 0) {
            let parent = this._getParent(index);

            if (!parent && parent !== 0) return;

            if (this.compare(array[parent], array[index])) {
                let temp = array[index];
                array[index] = array[parent];
                array[parent] = temp;

                index = parent;
            } else {
                return;
            }
        }
    }

    _siftDown(index, array) {
        array = array ? array : this.heapCore;

        let length = array.length;

        while (index < length) {

            let firstChild = this._getFirst(index),
                secondChild = this._getSecond(index),
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
                let temp = array[index];
                array[index] = array[maxIndex];
                array[maxIndex] = temp;

                index = maxIndex;
            } else {
                return false;
            }
        }
    }

    _getFirst(n) {
        return 2 * n + 1;
    }

    _getSecond(n) {
        return 2 * n + 2;
    }

    _getParent(n) {
        let parent = Math.floor((n - 1) / 2);

        return parent >= 0 ? parent : false;
    }
}

module.exports = Heap;