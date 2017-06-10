'use strict';
const algolib = require('../../../index');
const BinaryTreeNode = require('./binary-tree-node');
const BinarySearchTree = algolib.BinarySearchTree;
const compare = algolib.compareFunctions.compareNumbers;

describe.only('#BinarySearchTree', function () {
    it('should create proper data structure', function () {
        let bst = new BinarySearchTree(compare);

        bst.should.be.instanceOf(Object);
        bst.add.should.be.instanceOf(Function);
        bst.remove.should.be.instanceOf(Function);
    });

    describe('#add(key)', function () {
        it('should create root Node if tree is empty', function () {
            let bst = new BinarySearchTree(compare);
            bst.add(5);
            bst._root.should.be.instanceOf(BinaryTreeNode);
        });

        it('should add elements in correct order', function () {
            let bst = new BinarySearchTree(compare);
            bst.add(5);
            bst.add(2);
            bst._root.left.key.should.be.eql(2);
            bst.add(8);
            console.log(bst);
            bst._root.right.key.should.be.eql(8);
        });
    });
});