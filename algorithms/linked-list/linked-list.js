'use strict';

var Node = require('./node');

class LinkedList {

    constructor() {
        this._head = null;
        this._tail = null;
        this._length = 0;
    }

    get length() {
        return this._length;
    }

    static createList(arr) {
        let list = new LinkedList();

        arr.forEach(function(value) {
            list.push(value);
        }, this);

        return list;
    }

    push(data) {
        if (!this._head) {
            this._head = new Node(data);
            this._tail = this._head;
        } else {
            this._tail._next = new Node(data, this._tail);
            this._tail = this._tail._next;
        }

        this._length++;
    }

    pop() {
        if (!this._head) {
            return;
        }

        let last = this._tail._data;

        if (!this._tail._prev) {
            this._head = null;
            this._tail = this._head;
            this._length--;
            return last;
        }

        this._tail._prev._next = null;
        this._tail = this._tail._prev;

        this._length--;
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

        this._length++;
    }

    shift() {
        if (!this._head) {
            return;
        }

        let first = this._head._data;

        if (!this._head._next) {
            this._head = null;
            this._tail = this._head;
            this._length--;
            return first;
        }

        this._head = this._head._next;
        this._head._prev = null;

        this._length--;
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

        this._length++;
        return true;
    }

    remove(index) {
        if (index === this.length - 1) {
            return this.pop();
        }

        if (index === 0) {
            return this.shift();
        }

        let currentNode = this._getNodeByIndex(index);

        if (currentNode === undefined) {
            return;
        }

        let prevNode = currentNode._prev,
            nextNode = currentNode._next;

        prevNode._next = nextNode;
        nextNode._prev = prevNode;

        this._length--;
        return currentNode._data;
    }

    getArray() {
        let arr = [];
        let currentNode = this._head;

        for (let i = 0; i < this.length; i++) {
            arr.push(currentNode._data);
            currentNode = currentNode._next;
        }

        return arr;
    }

    _getNodeByIndex(index) {
        if (!this._head || index > (this.length - 1)) {
            return;
        }

        let getFromHead = (index) => {
            let currentNode = this._head;

            for (let i = 0; i < index; i++) {
                if (currentNode._next === null) {
                    return;
                }
                currentNode = currentNode._next;
            }

            return currentNode;
        }

        let getFromTail = (index) => {
            index = this.length - (index + 1);
            let currentNode = this._tail;

            for (let i = 0; i < index; i++) {
                if (currentNode._prev === null) {
                    return;
                }
                currentNode = currentNode._prev;
            }

            return currentNode;
        }

        return index <= this.length / 2 ? getFromHead(index) : getFromTail(index);
    }
}

module.exports = LinkedList;