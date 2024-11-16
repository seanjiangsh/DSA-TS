// 229. Majority Element II
// Medium
// Topics
// Companies
// Hint

// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Constraints:

//     1 <= nums.length <= 5 * 104
//     -109 <= nums[i] <= 109

// Follow up: Could you solve the problem in linear time and in O(1) space?

function majorityElement(nums: number[]): number[] {
  // * 1st try: time O(n), space O(n)
  // const n = nums.length;
  // const numsMap = new Map<number, number>(); // <num, count>
  // for (const num of nums) {
  //   numsMap.set(num, (numsMap.get(num) || 0) + 1);
  // }
  // return Array.from(numsMap.entries()).reduce((p, [num, freq]) => {
  //   return freq > n / 3 ? [...p, num] : p;
  // }, [] as Array<number>);

  // * Copliot's solution
  // * Boyer-Moore voting algorithm with 2 passes
  // * time: O(n), space: O(1)

  let candidate1: number | null = null;
  let candidate2: number | null = null;
  let count1 = 0;
  let count2 = 0;

  // First pass: find potential candidates
  for (const num of nums) {
    if (candidate1 !== null && num === candidate1) {
      count1++;
    } else if (candidate2 !== null && num === candidate2) {
      count2++;
    } else if (count1 === 0) {
      candidate1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  // Second pass: verify the candidates
  count1 = 0;
  count2 = 0;
  for (const num of nums) {
    if (num === candidate1) {
      count1++;
    } else if (num === candidate2) {
      count2++;
    }
  }

  const result: Array<number> = [];
  const n = nums.length;
  if (count1 > Math.floor(n / 3)) result.push(candidate1!);
  if (count2 > Math.floor(n / 3)) result.push(candidate2!);

  return result;
}

// Example 1:

// const nums = [3, 2, 3];
// Output: [3]

// Example 2:

// const nums = [1];
// Output: [1]

// Example 3:

const nums = [1, 2, 3, 3];
// Output: [1,2]

console.log(majorityElement(nums));
