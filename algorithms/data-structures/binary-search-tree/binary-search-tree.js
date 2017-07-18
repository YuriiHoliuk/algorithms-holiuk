'use strict';

const Node = require('./binary-tree-node');

class BinarySearchTree {
    constructor(compare) {
        this._root = null;
        this.compare = compare;
    }

    add(key, value) {
        if (!this._root) {
            this._root = new Node(key, value);
        } else {
            this._addTo(this._root, key, value);
        }
    }

    _addTo(node, key, value) {
        if (this.compare(node.key, key)) {
            if (node._left) {
                this._addTo(node._left, key, value);
            } else {
                node._left = new Node(key, value);
            }
        } else {
            if (node._right) {
                this._addTo(node._right, key, value);
            } else {
                node._right = new Node(key, value);
            }
        }
    }

    find(key) {
        if (!this._root) return null;

        return this._findFrom(this._root, key);
    }

    _findFrom(node, key) {
        if (node.key === key) return node;
        if (!node._left && !node._right) return null;

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

    findWithParent(key) {
        const node = this._root,
            parent = null;

        if (!node) return null;
        if (node.key === key) return {parent, node};

        return this._findWithParentFrom(parent, node, key);
    }

    _findWithParentFrom(parent, node, key) {
        if (node.key === key) return {parent, node};

        if (this.compare(node.key, key)) {
            if (node._left) {
                return this._findWithParentFrom(node, node._left, key);
            } else {
                return null;
            }
        } else {
            if (node._right) {
                return this._findWithParentFrom(node, node._right, key);
            } else {
                return null;
            }
        }
    }

    getMax() {
        if (!this._root) return null;

        return this._getMaxFrom(this._root);
    }

    _getMaxFrom(node) {
        return node._right ? this._getMaxFrom(node._right) : node;
    }

    getMin() {
        if (!this._root) return null;

        return this._getMinFrom(this._root);
    }

    _getMinFrom(node) {
        return node._left ? this._getMinFrom(node._left) : node;
    }

    remove(key) {
        const result = this.findWithParent(key);
        if (result === null) return false;

        const {node, parent} = result;

        const branch = parent ? parent._left === node ? '_left' : '_right' : null;

        if (!node._left && !node._right) {
            parent ? parent[branch] = null : this._root = null;
            return true;

        } else if (!node._right) {
            parent ? parent[branch] = node._left : this._root = node._left;
            return true;

        } else if (!node._left) {
            parent ? parent[branch] = node._right : this._root = node._right;
            return true;

        } else if (!node._right._left) {
            parent ? parent[branch] = node._right : this._root = node._right;
            node._right._left = node._left;
            return true;

        } else if (!node._left._right) {
            parent ? parent[branch] = node._left : this._root = node._left;
            node._left._right = node._right;
            return true;

        } else if (Math.random() > 0.5) {
            const minRightResult = this.findWithParent(this._getMinFrom(node._right).key),
                minRight = minRightResult.node,
                minRightParent = minRightResult.parent;

            minRightParent._left = null;
            parent ? parent[branch] = minRight : this._root = minRight;
            minRight._left = node._left;
            minRight._right = node._right;
        } else {
            const maxLeftResult = this.findWithParent(this._getMaxFrom(node._left).key),
                maxLeft = maxLeftResult.node,
                maxLeftParent = maxLeftResult.parent;

            maxLeftParent._right = null;
            parent ? parent[branch] = maxLeft : this._root = maxLeft;
            maxLeft._left = node._left;
            maxLeft._right = node._right;
        }
    }

}

module.exports = BinarySearchTree;