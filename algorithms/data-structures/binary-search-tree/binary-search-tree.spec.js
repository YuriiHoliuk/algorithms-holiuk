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
        bst.find.should.be.instanceOf(Function);
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
            bst._root._left.key.should.be.eql(2);
            bst.add(8);
            bst._root._right.key.should.be.eql(8);
            bst.add(3);
            bst._root._left._right.key.should.be.eql(3);
        });
    });

    describe('#find(key)', function () {
        it('should return null if tree is empty', function () {
            let bst = new BinarySearchTree(compare);
            (bst.find(10) === null).should.be.true();
        });

        it('should return null if Node with this key not exist', function () {
            let bst = new BinarySearchTree(compare);
            bst.add(5);
            bst.add(2);
            (bst.find(10) === null).should.be.true();
        });

        it('should return Node if Node with this key exist', function () {
            let bst = new BinarySearchTree(compare);
            bst.add(5);
            bst.add(2, 30);
            bst.find(5).should.be.instanceOf(BinaryTreeNode);
            bst.find(2).should.be.instanceOf(BinaryTreeNode);
            bst.add(50);
            bst.add(20);
            bst.find(20).should.be.instanceOf(BinaryTreeNode);
            bst.find(2).value.should.be.eql(30);
        });

        it('should return Node with same key and value', function () {
            let bst = new BinarySearchTree(compare);
            bst.add(5);
            bst.add(2, 30);
            bst.find(2).value.should.be.eql(30);
            bst.add(50);
            bst.add(20);
            (bst.find(50).value === null).should.be.true();
            bst.find(2).key.should.be.eql(2);
            bst.find(20).key.should.be.eql(20);
            bst.find(50).key.should.be.eql(50);
        });
    });

    describe('#getMax(key)', function() {
        it('should be a Function', function () {
            const bst = new BinarySearchTree(compare);
            bst.getMax.should.be.instanceOf(Function);
        });

        it('should return null if BST is Empty', function () {
            const bst = new BinarySearchTree(compare);
            (bst.getMax() === null).should.be.true();
        });

        it('should return Node', function () {
            const bst = new BinarySearchTree(compare);
            bst.add(20, 3);
            bst.add(11, 5);
            bst.getMax().should.be.instanceOf(BinaryTreeNode);
        });

        it('should return Node with maximal key', function () {
            const bst = new BinarySearchTree(compare);
            bst.add(20, 3);
            bst.add(11, 5);
            bst.add(1, 50);
            bst.add(111, 5);
            bst.getMax().key.should.be.eql(111);
            bst.getMax().value.should.be.eql(5);
        })
    });

    describe('#getMin(key)', function() {
        it('should be a Function', function () {
            const bst = new BinarySearchTree(compare);
            bst.getMin.should.be.instanceOf(Function);
        });

        it('should return null if BST is Empty', function () {
            const bst = new BinarySearchTree(compare);
            (bst.getMin() === null).should.be.true();
        });

        it('should return Node', function () {
            const bst = new BinarySearchTree(compare);
            bst.add(20, 3);
            bst.add(11, 5);
            bst.getMin().should.be.instanceOf(BinaryTreeNode);
        });

        it('should return Node with minimal key', function () {
            const bst = new BinarySearchTree(compare);
            bst.add(20, 3);
            bst.add(11, 5);
            bst.add(1, 50);
            bst.add(111, 5);
            bst.getMin().key.should.be.eql(1);
            bst.getMin().value.should.be.eql(50);
        });
    });

    describe('#findWithParent(key)', function () {
        it('should return null as parent if node === root', function () {
            const bst = new BinarySearchTree(compare);
            bst.add(20, 3);
            bst.add(11, 5);
            bst.add(1, 50);
            bst.add(111, 5);

            (bst.findWithParent(20).parent === null).should.be.true();
        });

        it('should return correct node and parent', function () {
            const bst = new BinarySearchTree(compare);
            bst.add(20, 3);
            bst.add(11, 5);
            bst.add(1, 50);
            bst.add(111, 5);

            let result = bst.findWithParent(11);
            result.node.key.should.be.eql(11);
            result.node.value.should.be.eql(5);
            result.parent.key.should.be.eql(20);
            result.parent.value.should.be.eql(3);
        });
    });

    describe('#remove(key)', function () {
        it('should be a Function', function () {
            const bst = new BinarySearchTree(compare);
            bst.remove.should.be.instanceOf(Function);
        });

        it('should return false if no Node with this key', function () {
            const bst = new BinarySearchTree(compare);
            bst.add(20, 3);
            bst.add(11, 5);
            bst.add(1, 50);
            bst.add(111, 5);
            bst.remove(15).should.be.false();
        });

        it('should correct remove leaves', function () {
            const bst = new BinarySearchTree(compare);
            bst.add(20, 3);
            bst.add(11, 5);
            bst.add(1, 50);
            bst.add(111, 5);
            bst.remove(1);
            (bst.find(1) === null).should.be.true();
            bst.remove(111);
            (bst.find(111) === null).should.be.true();
        });

        it('should correct remove nodes', function () {
            const bst = new BinarySearchTree(compare);
            bst.add(20, 3);
            bst.add(11, 5);
            bst.add(1, 50);
            bst.add(111, 5);
            bst.remove(20);
            (bst.find(20) === null).should.be.true();
            bst.remove(111);
            (bst.find(111) === null).should.be.true();
        });

        it('should return true if removed success', function () {
            const bst = new BinarySearchTree(compare);
            bst.add(20, 3);
            bst.add(11, 5);
            bst.add(1, 50);
            bst.add(111, 5);
            bst.remove(11).should.be.true();
            bst.remove(111).should.be.true();
            bst.remove(1).should.be.true();
        });
    });
});