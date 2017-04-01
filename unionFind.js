'use strict';

class UnionFind {
    constructor() {
        this._elements = [];
    }

    connect(a, b) {

        if (this.isConnected(a, b)) {
            return;
        }

        this._elements[a] = isNaN(this._elements[a]) ? a : this._elements[a];
        this._elements[b] = isNaN(this._elements[b]) ? b : this._elements[b];


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
}

module.exports = UnionFind;