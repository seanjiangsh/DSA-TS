// 2607. Make K-Subarray Sums Equal
// Medium
// Topics
// Companies
// Hint

// You are given a 0-indexed integer array arr and an integer k. The array arr is circular.
// In other words, the first element of the array is the next element of the last element,
// and the last element of the array is the previous element of the first element.

// You can do the following operation any number of times:

// Pick any element from arr and increase or decrease it by 1.

// Return the minimum number of operations such that
// the sum of each subarray of length k is equal.

// A subarray is a contiguous part of the array.

function makeSubKSumEqual(arr: number[], k: number): number {
  // // * 1st try
  // const subArrs = arr.map((_, i) => [...arr, ...arr].slice(i, i + k));
  // const sumsOfSubArrs = subArrs.map((arr) => arr.reduce((p, c) => p + c), 0);
  // const sumOfSubArrs = sumsOfSubArrs.reduce((p, c) => p + c, 0);
  // const avgOfSubArrs = Math.floor(sumOfSubArrs / arr.length);

  // console.log({ subArrs, sumsOfSubArrs, sumOfSubArrs, avgOfSubArrs });

  // // Adjust elements to make the sum of each subarray equal to the target sum
  // let operations = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   const currentSum = sumsOfSubArrs[i];
  //   const difference = currentSum - avgOfSubArrs;
  //   if (difference !== 0) {
  //     arr[i] -= difference;
  //     operations += Math.abs(difference);
  //   }
  // }
  // console.log(arr);
  // return operations;

  // * can's solve it, ref from others solution O(k * k log k)
  /**
   * Calculate the Greatest Common Divisor (GCD) of two numbers using the Euclidean algorithm.
   * @param a - The first number.
   * @param b - The second number.
   * @returns The GCD of the two numbers.
   */
  function gcd(a: number, b: number): number {
    // O(log(min(a, b)))
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  const n = arr.length;
  const bucketCount = gcd(k, n); // O(log(min(k, n)))
  const buckets: Array<Array<number>> = []; // O(1)

  // O(n)
  for (let i = 0; i < n; i++) {
    const currentNum = arr[i];
    const bucketIdx = i % bucketCount;
    const bucket = buckets[bucketIdx] || [];
    bucket.push(currentNum);
    buckets[bucketIdx] = bucket;
  }

  let operations = 0;
  const resultArr: Array<number> = [];

  // O(k)
  for (let i = 0; i < buckets.length; i++) {
    // O(k log k)
    const bucket = buckets[i];
    const sortedBucket = bucket.sort((a, b) => a - b);
    const bucketLen = sortedBucket.length;
    const median = sortedBucket[Math.floor(bucketLen / 2)];

    // O(k)
    for (let j = 0; j < sortedBucket.length; j++) {
      const num = sortedBucket[j];
      const diff = Math.abs(median - num);
      operations += diff;
      const realIdx = bucketCount * j + i;
      resultArr[realIdx] = median;
      console.log({ median, num, i, j, realIdx });
    }
  }
  console.log({ bucketCount, buckets, resultArr });
  return operations;
}

function makeSubKSumEqual2(arr: number[], k: number): number {
  const getGCD = (a: number, b: number) => {
    while (b !== 0) {
      const tmp = b;
      b = a % b;
      a = tmp;
    }
    return a;
  };

  const n = arr.length;
  const bucketCount = getGCD(n, k);
  const buckets: Array<Array<number>> = [];
  for (let i = 0; i < n; i++) {
    const bucketIdx = i % bucketCount;
    const bucket = buckets[bucketIdx] || [];
    bucket.push(arr[i]);
    buckets[bucketIdx] = bucket;
  }

  let operations = 0;
  for (const bucket of buckets) {
    const sortedBucket = bucket.sort((a, b) => a - b);
    const midIdx = Math.floor(sortedBucket.length / 2);
    const median = sortedBucket[midIdx];
    console.log({ sortedBucket, midIdx, median });
    for (const num of sortedBucket) {
      const diff = Math.abs(median - num);
      operations += diff;
      console.log({ diff, operations });
    }
  }
  console.log({ bucketCount, buckets });
  return operations;
}

// Example 1:

const arr = [1, 4, 1, 3];
const k = 2;
// Output: 1
// Explanation: we can do one operation on index 1 to make its value equal to 3.
// The array after the operation is [1,3,1,3]
// - Subarray starts at index 0 is [1, 3], and its sum is 4
// - Subarray starts at index 1 is [3, 1], and its sum is 4
// - Subarray starts at index 2 is [1, 3], and its sum is 4
// - Subarray starts at index 3 is [3, 1], and its sum is 4

// Example 2:

// const arr = [2, 5, 5, 7];
// const k = 3;
// Output: 5
// Explanation:
// we can do three operations on index 0 to make its value equal to 5
// and two operations on index 3 to make its value equal to 5.
// The array after the operations is [5,5,5,5]
// - Subarray starts at index 0 is [5, 5, 5], and its sum is 15
// - Subarray starts at index 1 is [5, 5, 5], and its sum is 15
// - Subarray starts at index 2 is [5, 5, 5], and its sum is 15
// - Subarray starts at index 3 is [5, 5, 5], and its sum is 15

const result = makeSubKSumEqual(arr, k);
console.log(result);
