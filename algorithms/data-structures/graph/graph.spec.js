const Graph = require('../../../').Graph;
const Vertex = require('./vertex');

// TODO: write normal tests

describe.only('#Graph', () => {
    describe('#Data structure', () => {
        it('should be a constructor', () => {
            const graph = new Graph();
            graph.should.be.instanceOf(Graph);
        });
    });

    describe('#addVertex', () => {
        it('should be a Function', () => {
            const graph = new Graph();
            graph.addVertex.should.be.instanceOf(Function);
        });

        it('should add vertex to graph', () => {
            const graph = new Graph();
            graph.addVertex(0, [{id: 1, weight: 0}, {id: 5, weight: 0}]);
            graph.addVertex(1, [{id: 5, weight: 0}]);
            graph.addVertex(5, [{id: 7, weight: 0}]);
            graph.addVertex(7, [{id: 0, weight: 0}, {id: 10, weight: 0}]);
            graph.addVertex(10, []);

            const list = graph.vertexes();
            list[0].should.be.instanceOf(Vertex);
        });

        it('graph vertexes should have correct id', () => {
            const graph = new Graph();
            graph.addVertex(0, [{id: 1, weight: 0}, {id: 5, weight: 0}]);
            graph.addVertex(1, [{id: 5, weight: 0}]);
            graph.addVertex(5, [{id: 7, weight: 0}]);
            graph.addVertex(7, [{id: 0, weight: 0}, {id: 10, weight: 0}]);
            graph.addVertex(10, []);

            const list = graph.vertexes();
            list[10].id.should.be.eql(10);
        });

        it('graph vertexes should have correct edges', () => {
            const graph = new Graph();
            graph.addVertex(0, [{id: 1, weight: 0}, {id: 5, weight: 0}]);
            graph.addVertex(1, [{id: 5, weight: 0}]);
            graph.addVertex(5, [{id: 7, weight: 0}]);
            graph.addVertex(7, [{id: 0, weight: 0}, {id: 10, weight: 0}]);
            graph.addVertex(10, []);

            const list = graph.vertexes();
            list[7].edges[0].to().should.be.eql(0);
        });
    });

    describe('#depthFirstSearch', () => {
        it('should return Array', () => {
            const graph = new Graph();
            graph.addVertex(0, [{id: 2, weight: 0}, {id: 4, weight: 0}]);
            graph.addVertex(1, [{id: 3, weight: 0}]);
            graph.addVertex(2, [{id: 7, weight: 0}]);
            graph.addVertex(3, [{id: 6, weight: 0}]);
            graph.addVertex(4, [{id: 5, weight: 0}, {id: 7, weight: 0}]);
            graph.addVertex(5, [{id: 4, weight: 0}, {id: 7, weight: 0}, {id: 1, weight: 0}]);
            graph.addVertex(6, [{id: 2, weight: 0}, {id: 0, weight: 0}, {id: 4, weight: 0}]);
            graph.addVertex(7, [{id: 5, weight: 0}, {id: 3, weight: 0}]);

            const v = graph.depthFirstSearch();
            v.should.be.instanceOf(Array);
        });
    });

    describe('#sortTopological', () => {
        it('should return Array', () => {
            const graph = new Graph();
            graph.addVertex(0, [{id: 2, weight: 0}, {id: 4, weight: 0}]);
            graph.addVertex(1, [{id: 3, weight: 0}]);
            graph.addVertex(2, [{id: 7, weight: 0}]);
            graph.addVertex(3, [{id: 6, weight: 0}]);
            graph.addVertex(4, [{id: 5, weight: 0}, {id: 7, weight: 0}]);
            graph.addVertex(5, [{id: 4, weight: 0}, {id: 7, weight: 0}, {id: 1, weight: 0}]);
            graph.addVertex(6, [{id: 2, weight: 0}, {id: 0, weight: 0}, {id: 4, weight: 0}]);
            graph.addVertex(7, [{id: 5, weight: 0}, {id: 3, weight: 0}]);

            const v = graph.sortTopological();
            v.should.be.instanceOf(Array);
        });
    });

    describe('#shortestPath', () => {
        it('should return Array', () => {
            const graph = new Graph();
            graph.addVertex(0, [
                {id: 1, weight: 5},
                {id: 4, weight: 9},
                {id: 7, weight: 8}
            ]);
            graph.addVertex(1, [
                {id: 2, weight: 12},
                {id: 3, weight: 15},
                {id: 7, weight: 4}
            ]);
            graph.addVertex(2, [
                {id: 6, weight: 4},
                {id: 3, weight: 3}
            ]);
            graph.addVertex(3, [
                {id: 6, weight: 9}
            ]);
            graph.addVertex(4, [
                {id: 5, weight: 4},
                {id: 6, weight: 20},
                {id: 7, weight: 5}
            ]);
            graph.addVertex(5, [
                {id: 2, weight: 1},
                {id: 6, weight: 13}
            ]);
            graph.addVertex(6, []);
            graph.addVertex(7, [
                {id: 2, weight: 7},
                {id: 5, weight: 6}
            ]);

            const v = graph.shortestPath(1);
            // console.log(v);
            v.should.be.instanceOf(Object);
        });
    });
});