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

        let rootA = this.findRoot(a);
        let rootB = this.findRoot(b);

        this._elements[a] = rootA;
        this._elements[b] = rootB;

        if (rootA === rootB) {
            console.log('these elements ic connected');
            return;
        }

        let weightA = this._weights[rootA];
        let weightB = this._weights[rootB];

        if (weightA <= weightB) {
            this._elements[a] = rootB;
            this._weights[rootB]++;
        } else {
            this._elements[b] = rootA;
            this._weights[rootA]++;
        }
    }

    isConnected(a, b) {
        if (isNaN(this._elements[a]) || isNaN(this._elements[b])) {
            return false;
        } else {
            let rootA = this.findRoot(a);
            let rootB = this.findRoot(b);

            this._elements[a] = rootA;
            this._elements[b] = rootB;

            return rootA === rootB;
        }
    }

    findRoot(e) {
        return e === this._elements[e] ? e : this.findRoot(this._elements[e]);
    }

    count() {
        let uniq = [];
        for (let i = 0; i < this._elements.length; i++) {
            if (this._elements[i] !== undefined && !~uniq.indexOf(this._elements[i])) {
                uniq.push(this._elements[i]);
            }
        }
        return uniq.length;
    }

    component(a) {
        if (isNaN(this._elements[a])) {
            return false;
        } else  {
            return this._elements[a];
        }
    }
}

module.exports = QuickUnion;