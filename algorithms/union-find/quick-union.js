'use strict';

class QuickUnion {
    constructor() {
        this._elements = [];
        this._weights = [];
    }

    connect(a, b) {

        if (isNaN(this._elements[a])) {
            this._elements[a] = a;
            this._weights[a] = 1;
        }

        if (isNaN(this._elements[b])) {
            this._elements[b] = b;
            this._weights[b] = 1;
        }

        let tmp = this.isConnected(a, b, true);
        // let isConnected = tmp[0];
        // let rootA = tmp[1];
        // let rootB = tmp[2];
        let [isConnected, rootA, rootB] = this.isConnected(a, b, true);

        if (isConnected) {
            console.log('these elements is connected');
            return;
        }

        let weightA = this._weights[rootA];
        let weightB = this._weights[rootB];

        if (weightA <= weightB) {
            this._elements[rootA] = rootB;
            this._weights[rootB] += this._weights[rootA];
        } else {
            this._elements[rootB] = rootA;
            this._weights[rootA] += this._weights[rootB];
        }
    }

    isConnected(a, b, service) {
        if (isNaN(this._elements[a]) || isNaN(this._elements[b])) {
            return false;
        } else {
            let rootA = this._findRoot(a);
            let rootB = this._findRoot(b);

            this._elements[a] = rootA;
            this._elements[b] = rootB;

            return service ? [rootA === rootB, rootA, rootB] : rootA === rootB;
        }
    }

    _findRoot(e) {
        return e === this._elements[e] ? e : this._findRoot(this._elements[e]);
    }

    count() {
        let count = 0;
        for (let i = 0; i < this._elements.length; i++) {
            if (this._elements[i] === i) {
                count++;
            }
        }
        return count;
    }

    component(a) {
        if (isNaN(this._elements[a])) {
            return false;
        } else  {
            return this._findRoot(a);
        }
    }
}

module.exports = QuickUnion;