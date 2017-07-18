'use strict';

class Node {

    constructor(data, prev) {
        this._data = data ? data : null;
        this._next = null;
        this._prev = prev ? prev : null;
    }
}

module.exports = Node;