class Vertex {
    constructor(name, neighbors) {
        this.name = name;
        Array.isArray(neighbors)
            ? this.neighbors = neighbors
            : this.neighbors = [];
    }
}

module.exports = Vertex;