'use strict';

function countStones(n, row) {
    var lastColor = '';
    return row.split('').reduce((count, currentColor) => {
        if (currentColor === lastColor) {
            return ++count;
        } else {
            lastColor = currentColor;
            return count;
        }
    }, 0)
}

module.exports = countStones;