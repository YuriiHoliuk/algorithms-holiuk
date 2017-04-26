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

    get(index) {
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
        return currentNode._data;
    }

}

module.exports = LinkedList;