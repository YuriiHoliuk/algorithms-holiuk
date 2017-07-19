const Edge = require('./edge');

class Vertex {
    constructor(id, edges) {
        this.id = id;
        this.edges = edges.map(edge => {
            const newEdge = new Edge(this.id, edge.id, edge.weight);
            return newEdge;
        });
    }
}

module.exports = Vertex;