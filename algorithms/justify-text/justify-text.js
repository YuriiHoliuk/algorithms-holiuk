const Graph = require('../../index');

function justifyText(text, pageWidth, lineBrake) {
    let str = text;

    str = str.trim().replace(/\s+/g, ' ');

    const regexp = /\s/g,
        vertexes = [];

    let result;

    while (result = regexp.exec(str)) {
        vertexes.push(result.index);
    }

    console.log(vertexes);
    return str;
}

module.exports = justifyText;