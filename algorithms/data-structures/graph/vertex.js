const Edge = require('./edge');

class Vertex {
    constructor(id, edges) {
        this.id = id;
        this.edges = edges.map(edge => {
            const newEdge = new Edge(this.id, edge.id, edge.weight);
            return newEdge;
        });
    }

    addEdge(edge) {
        if (edge.from() !== this.id) return false;
        this.edges.push(edge);
        return true;
    }
}

module.exports = Vertex;