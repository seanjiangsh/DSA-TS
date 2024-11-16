// 1. Two Sum
// Easy
// Topics
// Companies
// Hint

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

function twoSum(nums: number[], target: number): number[] {
  // * brute force: O(n^2)
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     const sum = nums[i] + nums[j];
  //     if (sum === target) return [i, j];
  //   }
  // }

  // * still O(n^2)
  // // O(n)
  // for (let i = 0; i < nums.length; i++) {
  //   const currentNum = nums[i];
  //   const complement = target - currentNum;
  //   // O(n)
  //   const complementIdx = nums.findIndex((num) => num === complement);
  //   if (complementIdx !== -1 && complementIdx !== i) return [i, complementIdx];
  // }

  // * hash map (object in JS): O(n)
  const numObj: { [num: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complement = target - currentNum;
    if (complement in numObj) return [numObj[complement], i];
    numObj[currentNum] = i;
  }

  return [];
}

const result = twoSum([3, 2, 4], 6);
console.log(result);
