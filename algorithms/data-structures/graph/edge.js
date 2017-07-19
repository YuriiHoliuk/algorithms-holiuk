const from = Symbol('from'),
    to = Symbol('to'),
    weight = Symbol('weight');

class Edge {
    constructor(v, w, edgeWeight) {
        this[from] = v;
        this[to] = w;
        this[weight] = edgeWeight;
    }

    from() {
        return this[from];
    }

    to() {
        return this[to];
    }

    weight() {
        return this[weight];
    }
}

module.exports = Edge;