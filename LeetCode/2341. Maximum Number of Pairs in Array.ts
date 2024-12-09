// 2341. Maximum Number of Pairs in Array
// Easy
// Topics
// Companies
// Hint

// You are given a 0-indexed integer array nums. In one operation, you may do the following:

//     Choose two integers in nums that are equal.
//     Remove both integers from nums, forming a pair.

// The operation is done on nums as many times as possible.

// Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.

// Constraints:

//     1 <= nums.length <= 100
//     0 <= nums[i] <= 100

function numberOfPairs(nums: number[]): number[] {
  // * 1st try: Time O(n), space O(n)
  // let pairs = 0;
  // const positionMap = new Map<number, Array<number>>(); // num, locations
  // for (let i = 0; i < nums.length; i++) {
  //   const num = nums[i];
  //   positionMap.set(num, [...(positionMap.get(num) || []), i]);
  // }

  // const leftovers: Array<number> = [];
  // for (const [num, pos] of positionMap.entries()) {
  //   const posLen = pos.length;

  //   const pairCount = Math.floor(posLen / 2);
  //   pairs += pairCount;

  //   const hasLeftover = posLen % 2 !== 0;
  //   if (hasLeftover) {
  //     leftovers.push(num);
  //   }
  // }

  // return [pairs, leftovers.length];

  // * Copilot's simplier solution: Time O(n), space O(n)
  let pairs = 0;
  let leftovers = 0;
  const freqMap = new Map<number, number>(); // num, frequency
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for (const freq of freqMap.values()) {
    pairs += Math.floor(freq / 2);
    leftovers += freq % 2;
  }
  return [pairs, leftovers];
}

// Example 1:

const nums = [1, 3, 2, 1, 3, 2, 2];
// Output: [3,1]
// Explanation:
// Form a pair with nums[0] and nums[3] and remove them from nums. Now, nums = [3,2,3,2,2].
// Form a pair with nums[0] and nums[2] and remove them from nums. Now, nums = [2,2,2].
// Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [2].
// No more pairs can be formed. A total of 3 pairs have been formed, and there is 1 number leftover in nums.

// Example 2:

// const nums = [1, 1];
// Output: [1,0]
// Explanation: Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [].
// No more pairs can be formed. A total of 1 pair has been formed, and there are 0 numbers leftover in nums.

// Example 3:

// const nums = [0];
// Output: [0,1]
// Explanation: No pairs can be formed, and there is 1 number leftover in nums.

console.log(numberOfPairs(nums));
