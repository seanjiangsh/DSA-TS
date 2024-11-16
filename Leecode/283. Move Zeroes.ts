// 283. Move Zeroes
// Easy
// Topics
// Companies
// Hint

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

//     1 <= nums.length <= 104
//     -231 <= nums[i] <= 231 - 1

// Follow up: Could you minimize the total number of operations done?

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  // * 1st try: O(n)
  // let zeroCount = 0;
  // let newNums: Array<number> = [];

  // for (let i = 0; i < nums.length; i++) {
  //   const currentNum = nums[i];
  //   if (currentNum === 0) {
  //     zeroCount++;
  //   } else {
  //     newNums.push(currentNum);
  //   }
  // }

  // for (let i = 0; i < zeroCount; i++) {
  //   newNums.push(0);
  // }

  // for (let i = 0; i < nums.length; i++) {
  //   nums[i] = newNums[i];
  // }

  // * 2 pointers: O(n)
  /**
   * Let's keep track of current index "i" and non zero index "lastNonZeroFoundAt"
   * if current number non zero:
   * increase lastNonZeroFoundAt and swap the number with num[lastNonZeroFoundAt] and num[i]
   * the lastNonZeroFoundAt will keep track on the last swapped zero position
   */
  let lastNonZeroFoundAt = 0;
  console.log({ lastNonZeroFoundAt, nums });

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    if (currentNum !== 0) {
      nums[i] = nums[lastNonZeroFoundAt];
      nums[lastNonZeroFoundAt] = currentNum;
      lastNonZeroFoundAt++;
    }
    console.log({ i, lastNonZeroFoundAt, nums });
  }
}

// Output: [1,3,12,0,0]
const nums = [0, 1, 0, 3, 12];

// Output: [0]
// const nums = [0]

moveZeroes(nums);
console.log(nums);
