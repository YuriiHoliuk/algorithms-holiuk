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

    depthFirstSearch() {
        const vertexes = [],
            rootId = Object.keys(this[core])[0],
            // rootId = 6,
            root = this[core][rootId],
            self = this;

        vertexes.push(+rootId);
        dfs(root);

        function dfs(vertex) {
            vertex.neighbors.forEach(vertexName => {
                if (vertexes.indexOf(vertexName) === -1) {
                    vertexes.push(vertexName);
                    dfs(self[core][vertexName]);
                }
            });
        }

        return vertexes;
    }
}

module.exports = Graph;