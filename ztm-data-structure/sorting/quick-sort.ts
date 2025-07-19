const numbers = [8, 4, 3, 1, 6, 11, 9, 2, 10, 5];

function quickSort(
  array: Array<number>,
  prevLeft?: number,
  prevRight?: number
) {
  const left = prevLeft ?? 0;
  const right = prevRight ?? numbers.length - 1;

  if (right > left) {
    const pivot = right;
    const partitionIdx = partition(array, pivot, left, right);
    quickSort(array, left, partitionIdx - 1);
    quickSort(array, partitionIdx + 1, right);
  }

  return array;
}

function partition(
  array: Array<number>,
  pivot: number,
  left: number,
  right: number
) {
  const pivotVal = array[pivot];
  let partitionIdx = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotVal) {
      swap(array, i, partitionIdx);
      partitionIdx++;
    }
  }

  // swap the pivot with currant partitionIdx
  swap(array, partitionIdx, right);

  console.log(array);
  return partitionIdx;
}

function swap(array: Array<number>, firstIndex: number, secondIndex: number) {
  const tmp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = tmp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers);
console.log(numbers);
