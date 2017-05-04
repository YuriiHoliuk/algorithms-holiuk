# Implemented sort algorithms and helper functions
## Sort algorithms
- #### **Selection sort**
- #### **Shell sort**
   Has helper function **`generatePratt(array.length):`** return array of intervals for shell sort

All sort algorithms have similar interface:
**`someSort(array, compare):`** return sorted array

## Helper functions
- **`shuffle(array):`** return shuffled array
- **`isSorted(array, compare):`** return boolean
- compare functions - **`compare(a, b):`** return boolean - true if a > b
   + compareNumbers
   + compareNumbersReverse

### Sort algorithms performance (20000 elements)
- Selecttion sort: ~1400ms
- Shell sort: ~180ms 

### TODO
- optimize Pratt generation
- universal tests for different sorts
- add Insertion, Merge, Quick sorts
- add swap function
- add more compares and default compare