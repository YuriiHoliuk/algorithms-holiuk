# Implemented sort algorithms and helper functions
## Sort algorithms
- #### **Selection sort**
- #### **Merge sort**
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
- Selecttion sort: ~1400ms | ~1500ms
- Shell sort: ~180ms | ~95ms
- Merge sort: | ~160ms

### TODO
- universal tests for different sorts
- add Insertion, Quick sorts
- add more compares and default compare