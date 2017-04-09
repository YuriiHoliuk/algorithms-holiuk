'use strict';

class UnionFind {
    constructor() {
        this._elements = [];
        this._count = 0;
    }

    connect(a, b) {

        if (this.isConnected(a, b)) {
            return;
        }

        if (isNaN(this._elements[a])) {
            this._elements[a] = a;
            this._count += 1;
        }

        if (isNaN(this._elements[b])) {
            this._elements[b] = b;
            this._count += 1;
        }

        let componenetA = this._elements[a];
        let componenetB = this._elements[b];


        this._elements = this._elements.map((value) => {
            if (value === componenetA) {
                return componenetB;
            } else {
                return value;
            }
        });
    }

    isConnected(a, b) {
        if (isNaN(this._elements[a]) && isNaN(this._elements[b])) {
            return false;
        } else {
            return this._elements[a] === this._elements[b];
        }
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

module.exports = UnionFind;