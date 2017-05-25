'use strict';

class Heap {

    constructor(array, compare) {
        this.heapCore = array ? this.heapify(array) : [];
        this.compare = compare;
    }

    getMax() {
        return this.heapCore[0];
    }

    delMax() {
        let temp = this.heapCore[this.heapCore.length - 1];
        this.heapCore[this.heapCore.length - 1] = this.heapCore[0];
        this.heapCore[0] = temp;

        this.heapCore.pop();
        this._siftDown(0);
    }

    add(value) {
        this.heapCore.push(value);
        this._siftUp(this.heapCore[this.heapCore.length - 1]);
    }

    merge(heap) {

    }

    heapify(array) {

    }

    _siftUp(index) {
        while (index > 0) {
            let parent = this._getParent(index);

            if (!parent) return;

            if (this.compare(this.heapCore[index], this.heapCore[parent])) {
                let temp = this.heapCore[index];
                this.heapCore[index] = this.heapCore[parent];
                this.heapCore[parent] = temp;

                index = parent;
            } else {
                return;
            }
        }
    }

    _siftDown(index) {
        let length = this.heapCore.length;

        while (index < length) {

            let firstChild = this._getFirst(index),
                secondChild = this._getSecond(index),
                maxIndex = false;

            if (firstChild > length - 1) return;

            if (!this.compare(this.heapCore[firstChild], this.heapCore[index])) {
                maxIndex = firstChild;
            }

            if (!maxIndex) {
                if (!this.compare(this.heapCore[secondChild], this.heapCore[index])) {
                    maxIndex = secondChild;
                }
            } else {
                if (!this.compare(this.heapCore[secondChild], this.heapCore[maxIndex])) {
                    maxIndex = secondChild;
                }
            }

            if (maxIndex) {
                let temp = this.heapCore[index];
                this.heapCore[index] = this.heapCore[maxIndex];
                this.heapCore[maxIndex] = temp;

                index = maxIndex;
            } else {
                return;
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