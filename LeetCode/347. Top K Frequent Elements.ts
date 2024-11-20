// 347. Top K Frequent Elements
// Medium
// Topics
// Companies

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Constraints:

//  1 <= nums.length <= 105
//  -104 <= nums[i] <= 104
//  k is in the range [1, the number of unique elements in the array].
//  It is guaranteed that the answer is unique.

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

function topKFrequent(nums: number[], k: number): number[] {
  // * O(n + k)
  // Step 1: Count the frequency of each element
  const freqMap = new Map<number, number>(); // O(1)
  for (const num of nums) {
    // O(n)
    const count = freqMap.has(num) ? freqMap.get(num)! + 1 : 1; // O(1)
    freqMap.set(num, count); // O(1) amortized
  }

  // Step 2: Create a bucket array where index represents frequency
  const bucket = Array.from(
    { length: nums.length + 1 },
    () => [] as Array<number>
  );
  // O(n)
  for (const [num, freq] of freqMap) {
    // O(n)
    bucket[freq].push(num); // O(1)
  }

  // Step 3: Gather the top k frequent elements
  const result: Array<number> = []; // O(1)

  // O(n)
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (result.length >= k) break;
    // O(m), where m is the number of elements in bucket[i]
    result.push(...bucket[i]);
  }

  return result.slice(0, k); // O(k)
}

// Example 1:
const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
// Output: [1,2]

// Example 2:
// const nums = [1]
// const k = 1
// Output: [1]

console.log(topKFrequent(nums, k));
