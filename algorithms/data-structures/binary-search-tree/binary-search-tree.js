'use strict';

const Node = require('./binary-tree-node');

class BinarySearchTree {
    constructor(compare) {
        this._root = null;
        this.compare = compare;
    }

    add(key, value) {
        if (!this._root) {
            this._root = new  Node(key, value);
        } else {
            this._addTo(key, value, this._root);
        }
    }

    _addTo(key, value, node) {
        if (this.compare(node.key, key)) {
            if (node._left) {
                this._addTo(key, value, node._left);
            } else {
                node._left = new Node(key, value);
            }
        } else {
            if (node._right) {
                this._addTo(key, value, node._right);
            } else {
                node._right = new Node(key, value);
            }
        }
    }

    find(key) {
        if (!this._root) {
            return null;
        }

        return this._findFrom(this._root, key);
    }

    _findFrom(node, key) {
        if (node.key === key) {
            return node;
        }

        if (!node._left && !node._right) {
            return null;
        }

        if (this.compare(node.key, key)) {
            if (node._left) {
                return this._findFrom(node._left, key);
            } else {
                return null;
            }
        } else {
            if (node._right) {
                return this._findFrom(node._right, key);
            } else {
                return null;
            }
        }
    }

    remove() {

    }
}

module.exports = BinarySearchTree;