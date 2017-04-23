'use strict';

class Node {

    constructor(data) {
        this._data = data ? data : null;
        this._next = null;
    }
}

module.exports = Node;