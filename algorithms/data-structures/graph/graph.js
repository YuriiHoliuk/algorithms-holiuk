const Vertex = require('./vertex');

const core = Symbol('graph-core');

class Graph {
    constructor() {
        this[core] = {};
    }

    addVertex(name, neighbors) {
        const vertex = new Vertex(name, neighbors);
        this[core][name] = vertex;
    }

    getList() {
        return this[core];
    }
}

module.exports = Graph;