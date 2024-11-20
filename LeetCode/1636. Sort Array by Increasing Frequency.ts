// 1636. Sort Array by Increasing Frequency
// Easy
// Topics
// Companies
// Hint

// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

// Return the sorted array.

// Constraints:

//     1 <= nums.length <= 100
//     -100 <= nums[i] <= 100

function frequencySort(nums: number[]): number[] {
  // * 1st try:
  // * Time Complexity: O(n log n)
  // * Space Complexity: O(n)
  // const freqMap = new Map<number, number>(); // <number, frequency>
  // // Building the frequency map: O(n)
  // for (const num of nums) {
  //   freqMap.set(num, (freqMap.get(num) || 0) + 1);
  // }

  // // position as frequency, value for numbers in this frequency
  // const freqArr: Array<Array<number>> = Array.from(
  //   { length: nums.length + 1 },
  //   () => []
  // );
  // // Filling the frequency array: O(k)
  // for (const [num, freq] of freqMap.entries()) {
  //   freqArr[freq].push(num);
  // }

  // let result: Array<number> = [];

  // // Sorting and building the result array: O(n log n)
  // // i is freq
  // for (let i = 1; i < freqArr.length; i++) {
  //   const nums = freqArr[i].sort((a, b) => b - a); // O(m log m)
  //   for (let j = 0; j < nums.length; j++) {
  //     const newNums = Array.from({ length: i }, () => nums[j]); // O(i)
  //     result.push(...newNums); // O(i)
  //   }
  // }
  // return result;

  // * Copilot's solution
  // * Time Complexity: O(n log n)
  // * Space Complexity: O(n)

  // Step 1: Build the frequency map
  const freqMap = new Map<number, number>();
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Step 2: Sort the array based on frequency and value
  return nums.sort((a, b) => {
    const freqA = freqMap.get(a)!;
    const freqB = freqMap.get(b)!;
    // Sort by value in decreasing order if frequencies are the same
    if (freqA === freqB) return b - a;
    // Sort by frequency in increasing order
    else return freqA - freqB;
  });
}

// Example 1:

// const nums = [1, 1, 2, 2, 2, 3];
// Output: [3,1,1,2,2,2]
// Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.

// Example 2:

// const nums = [2, 3, 1, 3, 2];
// Output: [1,3,3,2,2]
// Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.

// Example 3:

const nums = [-1, 1, -6, 4, 5, -6, 1, 4, 1];
// Output: [5,-1,4,4,-6,-6,1,1,1]

console.log(frequencySort(nums));
