// 169. Majority Element
// Easy
// Topics
// Companies

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Constraints:

//     n == nums.length
//     1 <= n <= 5 * 104
//     -109 <= nums[i] <= 109

// Follow-up: Could you solve the problem in linear time and in O(1) space?

function majorityElement(nums: number[]): number {
  // * 1st try: time O(n), space O(n)
  // const numsMap = new Map<number, number>(); // <num, count>
  // // O(n)
  // for (const num of nums) {
  //   numsMap.set(num, (numsMap.get(num) || 0) + 1);
  // }

  // let result = nums[0];
  // const numsMapEntry = numsMap.entries();
  // let maxFreq = Array.from(numsMapEntry)[0][0];
  // // O(k) where k is length of freqMap
  // for (const [num, freq] of numsMapEntry) {
  //   if (freq > maxFreq) result = num;
  // }

  // return result;

  // * Copliot's solution
  // * Boyer-Moore voting algorithm
  // * time: O(n), space: O(1)
  let count = 0;
  let candidate: number | null = null;

  for (const num of nums) {
    if (count === 0) candidate = num;
    count += num === candidate ? 1 : -1;
  }
  return candidate!;
}

// Example 1:

// const nums = [3, 2, 3];
// Output: 3

// Example 2:

const nums = [2, 2, 1, 1, 1, 2, 2];
// Output: 2

console.log(majorityElement(nums));
