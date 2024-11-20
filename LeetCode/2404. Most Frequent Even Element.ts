// 2404. Most Frequent Even Element
// Easy
// Topics
// Companies
// Hint

// Given an integer array nums, return the most frequent even element.

// If there is a tie, return the smallest one. If there is no such element, return -1.

// Constraints:

//  1 <= nums.length <= 2000
//  0 <= nums[i] <= 105

function mostFrequentEven(nums: number[]): number {
  // * 1st try: O(n)
  const freqMap = new Map<number, number>(); // <num, freq>

  // O(n)
  for (const num of nums) {
    if (num % 2 !== 0) continue;
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // O(k) where k is length of freqMap
  let result = -1;
  let maxFreq = 0;
  for (const [num, freq] of freqMap.entries()) {
    if (freq > maxFreq || (freq === maxFreq && num < result)) {
      result = num;
      maxFreq = freq;
    }
  }

  return result;
}

// Example 1:

const nums = [0, 1, 2, 2, 4, 4, 1];
// Output: 2
// Explanation:
// The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
// We return the smallest one, which is 2.

// Example 2:

// const nums = [4, 4, 4, 9, 2, 4];
// Output: 4
// Explanation: 4 is the even element appears the most.

// Example 3:

// const nums = [29, 47, 21, 41, 13, 37, 25, 7];
// Output: -1
// Explanation: There is no even element.

console.log(mostFrequentEven(nums));
