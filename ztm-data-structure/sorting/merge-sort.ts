const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array: Array<number>) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  const halfIdx = Math.floor(array.length / 2);
  const left = array.slice(0, halfIdx);
  const right = array.slice(halfIdx);
  const merged = merge(mergeSort(left), mergeSort(right));
  // console.log("->", merged);
  return merged;
}

function merge(left: Array<number>, right: Array<number>) {
  let result: Array<number> = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  const leftRemain = left.slice(leftIndex);
  const rightRemain = right.slice(rightIndex);
  // console.log({ left, right, result, leftRemain, rightRemain });
  return result.concat(leftRemain).concat(rightRemain);
}

console.log("result: ", mergeSort(numbers));
