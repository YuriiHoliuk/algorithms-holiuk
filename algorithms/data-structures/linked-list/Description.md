# Implemented LinkedList Class.

## Class Node
Every element in list is instance of Node.
### Fields
* **`_data`**: value
* **`_next`**: link to next Node
* **`_prev`**: link to prev Node

Constructor accept two arguments:
1. value
2. previous Node: optional

## Class LinkedList
Constructor don`t accept any arguments and create empty data structure.
### Fields
* **`_head`**: first element in the list
* **`_tail`**: last element in the list
* **`_length`**: number of LinkedList elements
* **`length`**: only get, return `_length`
### Methods
* **`push(value)`**: insert element to the end of the list, do not return anything
* **`pop()`**: remove last element from list and return it; if list is empty return `undefined`
* **`unshift(value)`**: insert element to the begin of the list, do not return anything
* **`shift()`**: remove first element from list and return it; if list is empty return `undefined`
* **`get(index)`**: return element with `index`; if list is shorter then `index` + 1 or empty return `undefined`
* **`insertAfter(data, index)`**: insert element after element with this `index`; if operation was successful return `true`, if no element with this `index` or list is empty return `undefined`
* **`remove(index)`**: remove element with this `index` and return it; if no element with this index return `undefined`
* **`getArray()`**: return array of list elements
* **`LinkedList.createList(array)`**: **static** method; create `LinkedList` from `Array` and return it