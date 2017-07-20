const Graph = require('../../index').Graph;

function justifyText(text, pageWidth, lineBreak = '\n') {
    let str = text;

    str = str.trim().replace(/\s+/g, ' ');

    const regexp = /\s/g,
        vertexes = [];

    let result;

    while (result = regexp.exec(str)) {
        vertexes.push(result.index);
    }
    vertexes.unshift(0);

    const graph = new Graph();
    calculateUgliness = calculateUgliness.bind(null, pageWidth);

    for (let i = 0; i < vertexes.length - 1; i++) {

        for (let j = i + 1; j < vertexes.length; j++) {
            const lineWidth = vertexes[j] - vertexes[i];
            if (lineWidth <= pageWidth + 1) {
                const ugliness = calculateUgliness(lineWidth);
                graph.addEdge(vertexes[i], vertexes[j], ugliness);
            } else {
                break;
            }
        }
    }

    const shortestPath = graph.shortestPath(0).edgeTo;
    let lineBreaks = [];

    lineBreaks.push(vertexes.pop());

    while (shortestPath[lineBreaks[lineBreaks.length - 1]]) {
        lineBreaks.push(shortestPath[lineBreaks[lineBreaks.length - 1]].from());
    }

    lineBreaks.pop();
    lineBreaks = lineBreaks.reverse();

    lineBreaks.forEach(lineBreakIndex => {
        str = str.substr(0, lineBreakIndex) + lineBreak + str.substr(++lineBreakIndex);
    });

    return str;

    function calculateUgliness(pageWidth, lineWidth) {
        return Math.pow(pageWidth - lineWidth, 3);
    }
}

module.exports = justifyText;