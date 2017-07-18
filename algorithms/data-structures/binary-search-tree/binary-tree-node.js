'use strict';

class BinaryTreeNode {
    constructor(key, value) {
        this.key = key;
        this.value = value ? value : null;
        this._left = null;
        this._right = null;
    }
}

module.exports = BinaryTreeNode;