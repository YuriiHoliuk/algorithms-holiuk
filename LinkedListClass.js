'use strict';

var Node = require('./NodeClass');

class LinkedList {

    constructor() {
        this._head = null;
        this._tail = null;
    }

    push(data) {
        if (!this._head) {
            this._head = new Node(data);
            this._tail = this._head;
        } else {
            this._tail._next = new Node(data, this._tail);
            this._tail = this._tail._next;
        }
    }

    pop() {
        if (!this._head) {
            return;
        }
        let last = this._tail._data;

        if (!this._tail._prev) {
            this._head = null;
            this._tail = this._head;
            return last;
        }

        this._tail._prev._next = null;
        this._tail = this._tail._prev;
        return last;
    }

    unshift(data) {
        if (!this._head) {
            this._head = new Node(data);
            this._tail = this._head;
        } else {
            let newNode = new Node(data);
            newNode._next = this._head;
            this._head = newNode;
            newNode._next._prev = newNode;
        }
    }

    shift() {
        if (!this._head) {
            return;
        }

        let first = this._head._data;

        if (!this._head._next) {
            this._head = null;
            this._tail = this._head;
            return first;
        }

        this._head = this._head._next;
        this._head._prev = null;
        return first;
    }

    get(index) {
        let node = this._getNodeByIndex(index);
        return node === undefined ? undefined : node._data;
    }

    insertAfter(data, index) {
        let prevNode = this._getNodeByIndex(index);

        if (prevNode === undefined) {
            return;
        }
        let nextNode = prevNode._next;

        let newNode = new Node(data, prevNode);
        prevNode._next = newNode;

        if (nextNode) {
            newNode._next = nextNode;
            nextNode._prev = newNode;
        } else {
            this._tail = newNode;
        }
        return true;
    }

    remove(index) {
        let currentNode = this._getNodeByIndex(index);

        if (currentNode === undefined) {
            return;
        }

        if (currentNode._next === null) {
            return this.pop(index);
        }

        if (currentNode._prev === null) {
            return this.shift();
        }

        let prevNode = currentNode._prev,
            nextNode = currentNode._next;

        prevNode._next = nextNode;
        nextNode._prev = prevNode;

        return currentNode._data;
    }

    _getNodeByIndex(index) {
        if (!this._head) {
            return;
        }

        let i = 0;
        let currentNode = this._head;

        for (let i = 0; i < index; i++) {
            if (currentNode._next === null) {
                return;
            }
            currentNode = currentNode._next;
        }

        return currentNode;
    }

}

module.exports = LinkedList;