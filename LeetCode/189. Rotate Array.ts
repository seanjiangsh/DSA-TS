// 189. Rotate Array
// Medium
// Topics
// Companies
// Hint

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Follow up:

//  Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
//  Could you do it in-place with O(1) extra space?

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  k = k % nums.length; // Handle cases where k is greater than the length of the array

  // * 1st try: Time O(n+k), space O(n)
  // const copiedNums = Array.from(nums); // O(n)
  // // O(k)
  // for (let i = 0; i <= k; i++) {
  //   const rotateIdx = nums.length - k + i; // O(1)
  //   const numNewIdx = i + k; // O(1)
  //   const rotateNum = copiedNums[rotateIdx]; // O(1)
  //   const tmpNum = copiedNums[i]; // O(1)

  //   if (rotateNum) nums[i] = rotateNum; // O(1)
  //   if (numNewIdx < copiedNums.length) nums[numNewIdx] = tmpNum; // O(1)
  //   // console.log({ i, rotateIdx, numNewIdx, tmpNum, rotateNum, nums });
  // }

  // * 2nd try: Time O(n), space O(n)
  // const firstPart = nums.slice(nums.length - k, nums.length); // O(k)
  // const secondPart = nums.slice(0, nums.length - k); // O(n - k)
  // [...firstPart, ...secondPart].forEach((num, i) => (nums[i] = num)); // O(n)

  // * optimal: Time O(n), space O(1)
  // Helper function to reverse a portion of the array
  function reverse(arr: Array<number>, start: number, end: number) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  // reverse the array
  reverse(nums, 0, nums.length - 1);

  // reverse the first k elements
  reverse(nums, 0, k - 1);

  // reverse the remaining elements
  reverse(nums, k, nums.length - 1);
}

/**
 *  Output: [5,6,7,1,2,3,4]
    Explanation:
    rotate 1 steps to the right: [7,1,2,3,4,5,6]
    rotate 2 steps to the right: [6,7,1,2,3,4,5]
    rotate 3 steps to the right: [5,6,7,1,2,3,4]
 */
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

/**
 *  Output: [3,99,-1,-100]
    Explanation: 
    rotate 1 steps to the right: [99,-1,-100,3]
    rotate 2 steps to the right: [3,99,-1,-100]
 */
// const nums = [-1, -100, 3, 99];
// const k = 2;

rotate(nums, k);
console.log(nums);
