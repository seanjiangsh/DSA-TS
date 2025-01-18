const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// O(n^2)
function selectionSort(nums: Array<number>) {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    let smallestIdx = i;
    const tmp = nums[smallestIdx];

    for (let j = i + 1; j < n; j++) {
      const current = nums[j];
      if (current < nums[smallestIdx]) smallestIdx = j;
    }

    nums[i] = nums[smallestIdx];
    nums[smallestIdx] = tmp;
  }

  return nums;
}

console.log(selectionSort(numbers));
