'use strict';

var Node = require('./NodeClass');

class LinkedList {

    constructor() {
        this._head = null;
        this._tail = null;
    }

    // push(data) {
    //     if (!this._head) {
    //         this._head = new Node(data);
    //         this._tail = this._head;
    //     } else {
    //         let currentNode = this._head;
    //         while (currentNode._next !== null) {
    //             currentNode = currentNode._next;
    //         }

    //         currentNode._next = new Node(data);
    //         this._tail = currentNode._next;
    //     }
    // }

    push(data) {
        if (!this._head) {
            this._head = new Node(data);
            this._tail = this._head;
        } else {
            this._tail._next = new Node(data);
            this._tail = this._tail._next;
        }
    }

    get(index) {
        if (!this._head) {
            return;
        }

        let i = 0;
        let currentNode = this._head;

        while (currentNode._next !== 0 && i < index) {
            console.log(i);
            if (i === index) {
                return currentNode._data;
            } else {
                currentNode = currentNode._next;
                i++;
            }
        }
    }

}

module.exports = LinkedList;