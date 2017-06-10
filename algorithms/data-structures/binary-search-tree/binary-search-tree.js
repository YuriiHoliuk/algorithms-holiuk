'use strict';

const Node = require('./binary-tree-node');

class BinarySearchTree {
    constructor(compare) {
        this._root = null;
        this.compare = compare;
    }

    add(key) {
        if (!this._root) {
            this._root = new  Node(key);
        } else {
            this._addTo(key, this._root);
        }
    }

    _addTo(key, node) {
        if (this.compare(node.key, key)) {
            if (node.left) {
                this._addTo(key, node.left);
             } else {
                node.left = new Node(key);
            }
        } else {
            if (node.right) {
                this._addTo(key, node.right);
            } else {
                node.right = new Node(key);
            }
        }
    }

    remove() {

    }
}

module.exports = BinarySearchTree;