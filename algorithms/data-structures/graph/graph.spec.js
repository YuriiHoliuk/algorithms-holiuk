const Graph = require('../../../').Graph;
const Vertex = require('./vertex');

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
            graph.addVertex(0, [1, 5]);
            graph.addVertex(1, [5]);
            graph.addVertex(5, [7]);
            graph.addVertex(7, [0, 10]);
            graph.addVertex(10, []);

            const list = graph.getList();
            list[0].should.be.instanceOf(Vertex);
        });

        it('graph vertexes should have correct names', () => {
            const graph = new Graph();
            graph.addVertex(0, [1, 5]);
            graph.addVertex(1, [5]);
            graph.addVertex(5, [7]);
            graph.addVertex(7, [0, 10]);
            graph.addVertex(10, []);

            const list = graph.getList();
            list[10].name.should.be.eql(10);
        });

        it('graph vertexes should have correct neighbors', () => {
            const graph = new Graph();
            graph.addVertex(0, [1, 5]);
            graph.addVertex(1, [5]);
            graph.addVertex(5, [7]);
            graph.addVertex(7, [0, 10]);
            graph.addVertex(10, []);

            const list = graph.getList();
            list[7].neighbors.indexOf(10).should.be.greaterThan(-1);
        });
    });

    describe('#depthFirstSearch', () => {
        it('should return Array', () => {
            const graph = new Graph();
            graph.addVertex(0, [2, 4]);
            graph.addVertex(1, [3]);
            graph.addVertex(2, [7]);
            graph.addVertex(3, [6]);
            graph.addVertex(4, [5, 7]);
            graph.addVertex(5, [4, 7, 1]);
            graph.addVertex(6, [2, 0, 4]);
            graph.addVertex(7, [5, 3]);

            const v = graph.depthFirstSearch();
            console.log(v);
            v.should.be.instanceOf(Array);
        });
    });
});