// Create a function that merges two sorted arrays
const mergeTwoSortedArrays = (arr1: number[], arr2: number[]): number[] => {
  let mergedArray: number[] = [];
  let i = 0,
    j = 0;

  // Merge the arrays while maintaining order
  // O(n)
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements from arr1
  // O(n)
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // Add remaining elements from arr2
  // O(n)
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
};

// Create a function that merges multiple sorted arrays
const mergeSortedArrays = (...arrays: Array<Array<number>>): number[] => {
  if (arrays.length === 0) return [];
  if (arrays.length === 1) return arrays[0];

  let result = arrays[0];

  // O(n)
  for (let i = 1; i < arrays.length; i++) {
    result = mergeTwoSortedArrays(result, arrays[i]);
  }

  return result;
};

const result = mergeSortedArrays(
  [0, 3, 4, 31],
  [3, 4, 6, 30],
  [2, 19, 27, 167]
);
console.log(result);
