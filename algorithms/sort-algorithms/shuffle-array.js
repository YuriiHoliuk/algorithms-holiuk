'use strict';

function shuffleArray(array) {

    let shuffledArray = [],
        length = array.length;

    for (let i = length - 1; i >= 0; i--) {
        shuffledArray.push(array.splice(random(0, i), 1)[0]);
    }

    return shuffledArray;


}

module.exports = shuffleArray;