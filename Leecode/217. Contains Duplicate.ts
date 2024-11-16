// Easy
// Topics
// Companies

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true

function containsDuplicate(nums: number[]): boolean {
  // * 1st try: O(n)
  const numSet = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    if (numSet.has(currentNum)) return true;
    numSet.add(currentNum);
  }
  return false;
}

// Output: true
// const nums = [1, 2, 3, 1];

// Output: false
// const nums = [1, 2, 3, 4];

// Output: true
const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

console.log(containsDuplicate(nums));
