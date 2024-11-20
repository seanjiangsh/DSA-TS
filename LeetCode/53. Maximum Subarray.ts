// 53. Maximum Subarray
// Medium
// Topics
// Companies

// Given an integer array nums, find the
// subarray
// with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// Constraints:

//     1 <= nums.length <= 105
//     -104 <= nums[i] <= 104

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

function maxSubArray(nums: number[]): number {
  let max = nums[0];
  if (nums.length === 1) return max;

  // * brute force: O(n^2)
  // let subArray: Array<number> = [];
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     const subArr = nums.slice(i, j + 1); // O(n)
  //     const sum = subArr.reduce((p, c) => p + c, 0); // O(n)
  //     if (sum > max) {
  //       max = sum;
  //       subArray = subArr;
  //     }
  //   }
  // }
  // console.log(subArray);
  // return max;

  // * divide and conquer: O(n log n):
  /**
  Use a divide-and-conquer approach to split the array into two halves.
  Recursively find the maximum subarray sum in the left half, the right half,
  and the subarray that crosses the midpoint.
  Combine the results to get the overall maximum subarray sum.
  */
  // return maxSubArrayHelper(nums, 0, nums.length - 1);

  // * Kadane's Algorithm:
  /**
  Use a dynamic programming approach to solve the problem in linear time (O(n)).
  Maintain two variables: currentSum (the maximum sum of the subarray ending at the current position) and maxSum (the maximum sum encountered so far).
  Iterate through the array, updating currentSum and maxSum based on the current element.
  */
  let currentSum = nums[0];
  let maxSum = nums[0];
  let subArray: Array<number> = [nums[0]]; // Initialize with the first element
  let tempArray: Array<number> = [nums[0]]; // Temporary array to track the current subarray

  console.log({ currentSum, maxSum });

  for (let i = 1; i < nums.length; i++) {
    const currentNum = nums[i];
    const addedNumSum = currentNum + currentSum;

    if (addedNumSum > currentNum) {
      currentSum = addedNumSum;
      tempArray.push(currentNum); // Add to the current subarray
    } else {
      currentSum = currentNum;
      tempArray = [currentNum]; // Start a new subarray
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      subArray = [...tempArray]; // Update the subArray to the current subarray
    }
    console.log({ currentNum, addedNumSum, currentSum, maxSum });
  }
  console.log({ currentSum, maxSum });
  console.log(subArray);
  return maxSum;
}

function maxSubArrayHelper(
  nums: number[],
  left: number,
  right: number
): number {
  if (left === right) {
    console.log({ left, right });
    return nums[left]; // O(1)
  }

  const mid = Math.floor((left + right) / 2); // O(1)

  /*
  maxSubArrayHelper: The recursive division results in O(log n) levels of recursion.
  maxCrossingSum: The merging process at each level takes linear time, O(n).
  Therefore, the overall time complexity is O(log n) * O(n) = O(n log n).
  */
  const leftMax = maxSubArrayHelper(nums, left, mid); // O(log n) levels of recursion
  const rightMax = maxSubArrayHelper(nums, mid + 1, right); // O(log n) levels of recursion
  const crossMax = maxCrossingSum(nums, left, mid, right); // O(n) for combining results

  // Combine results: O(1)
  return Math.max(leftMax, rightMax, crossMax); // O(1)
}

function maxCrossingSum(
  nums: number[],
  left: number,
  mid: number,
  right: number
): number {
  let leftSum = -Infinity;
  let rightSum = -Infinity;
  let sum = 0;

  // Calculate leftSum: O(n)
  for (let i = mid; i >= left; i--) {
    sum += nums[i];
    if (sum > leftSum) {
      leftSum = sum;
    }
  }

  sum = 0;
  // Calculate rightSum: O(n)
  for (let i = mid + 1; i <= right; i++) {
    sum += nums[i];
    if (sum > rightSum) {
      rightSum = sum;
    }
  }

  return leftSum + rightSum; // O(1)
}

// The subarray [4,-1,2,1] has the largest sum 6.
// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// 1
// const nums = [1];

// The subarray [5,4,-1,7,8] has the largest sum 23.
const nums = [5, 4, -1, 7, 8];

console.log(maxSubArray(nums));
