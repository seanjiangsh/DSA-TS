// 387. First Unique Character in a String
// Easy
// Topics
// Companies

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Constraints:

//     1 <= s.length <= 105
//     s consists of only lowercase English letters.

function firstUniqChar(s: string): number {
  // * 1st try:
  // * time: O(n)
  // * space: O(n)
  // const uniqueMap = new Map<string, number>(); // <char, index>

  // // Building the frequency map: O(n)
  // for (let i = 0; i < s.length; i++) {
  //   const char = s[i];
  //   if (uniqueMap.has(char)) {
  //     uniqueMap.delete(char); // O(1) amortized
  //   } else {
  //     uniqueMap.set(char, i); // O(1) amortized
  //   }
  // }

  // // Extracting unique indices: O(k)
  // const uniqueIndices = Array.from(uniqueMap.values());

  // // Checking the first unique index: O(1)
  // if (uniqueIndices.length) return uniqueIndices[0];
  // else return -1;

  // * Copilot's solution:
  // * time: O(n)
  // * space: O(n)
  // Step 1: Build the frequency map
  const freqMap = new Map<string, number>();
  for (const char of s) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  // Step 2: Find the first unique character
  for (let i = 0; i < s.length; i++) {
    if (freqMap.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}

// Example 1:

const s = "leetcode";

// Output: 0

// Explanation:

// The character 'l' at index 0 is the first character that does not occur at any other index.

// Example 2:

// const s = "loveleetcode";

// Output: 2

// Example 3:

// const s = "aabb";

// Output: -1

console.log(firstUniqChar(s));
