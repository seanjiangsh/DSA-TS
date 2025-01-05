const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array: Array<number>) {
  for (let i = 0; i < array.length; i++) {
    // Note the largest number will be the end of each round of j
    // So we can skip the last (length - i) item because it's already largest
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        const tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
        // console.log({ i, j, array });
      }
    }
    // console.log({ i, array });
  }
  return array;
}

bubbleSort(numbers);
console.log(numbers);
