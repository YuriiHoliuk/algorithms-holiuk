class Swap {
    get swaps() {
        return Swap.swaps;
    }

    reset() {
        Swap.swaps = 0;
    }

    swap(array, a, b) {
        Swap.swaps ? Swap.swaps++ : Swap.swaps = 1;

        let temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    }
}

module.exports = Swap;