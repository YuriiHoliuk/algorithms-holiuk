'use strict';

function shouldSayHello(s) {
    var word = 'hello',
        index,
        prevIndex = -1;

    for (let i = 0; i < word.length; i++) {
        index = s.indexOf(word[i], prevIndex + 1);
        if (index === -1) {
            return 'NO';
        } else {
            prevIndex = index;
        }
    }
    return 'YES';
}

module.exports = shouldSayHello;