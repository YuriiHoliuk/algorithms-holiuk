'use strict';

function getNextBeautifulYear(y) {
    return getNextDiff(++y);

    function getNextDiff(year) {
        year = '' + year;
        var diff = isDiff(year);
        var base;

        if (diff) {
            return +year;
        } else {
            for (var i = 1; i < year.length; i++) {
                if (!isDiff(year.slice(0, i + 1))) {
                    base = Math.pow(10, year.length - (i + 1));
                    year = +year;
                    year += base - year % base;
                    break;
                }
            }
            return getNextDiff(year)
        }
    }

    function isDiff(year) {
        for (var i = year.length - 1; i > 0; i--) {
            if (year.indexOf(year[i]) < i) {
                return false
            }
        }
        return true;
    }
}

module.exports = getNextBeautifulYear;