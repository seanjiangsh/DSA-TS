// 2506. Count Pairs Of Similar Strings
// Easy
// Topics
// Companies
// Hint

// You are given a 0-indexed string array words.

// Two strings are similar if they consist of the same characters.

//     For example, "abca" and "cba" are similar since both consist of characters 'a', 'b', and 'c'.
//     However, "abacba" and "bcfd" are not similar since they do not consist of the same characters.

// Return the number of pairs (i, j) such that 0 <= i < j <= word.length - 1 and the two strings words[i] and words[j] are similar.

// Constraints:

//     1 <= words.length <= 100
//     1 <= words[i].length <= 100
//     words[i] consist of only lowercase English letters.

function similarPairs(words: string[]): number {
  // * 1st try:
  // * time: O(n * m \log m)
  // * space: O(n * m)
  // const freqMap = new Map<string, number>();
  // for (const word of words) {
  //   // turn chars into char code, e.g., "ab" => 97, 98, then put it into a set
  //   const codeSet = new Set<number>();
  //   for (const char of word) {
  //     codeSet.add(char.charCodeAt(0));
  //   }
  //   const key = Array.from(codeSet.keys())
  //     .sort((a, b) => a - b)
  //     .join(",");
  //   freqMap.set(key, (freqMap.get(key) || 0) + 1);
  // }
  // let result = 0;
  // for (const freq of freqMap.values()) {
  //   if (freq > 1) {
  //     result += (freq * (freq - 1)) / 2;
  //   }
  // }
  // return result;

  // * Copilot's solution
  // * time: O(n * m), where n is the number of words and m is the maximum length of a word.
  // * space: O(n)

  // Bitmask Representation:
  // Each character in the word is represented by a bit in a 32-bit integer.
  // For example, the word "abc" would be represented as 00000000000000000000000111 (binary), where the last three bits are set.
  const freqMap = new Map<number, number>();

  for (const word of words) {
    let bitmask = 0;
    for (const char of word) {
      bitmask |= 1 << (char.charCodeAt(0) - 97); // 'a' is 97 in ASCII
    }
    freqMap.set(bitmask, (freqMap.get(bitmask) || 0) + 1);
  }

  let result = 0;
  for (const freq of freqMap.values()) {
    if (freq > 1) {
      result += (freq * (freq - 1)) / 2;
    }
  }
  return result;
}

// Example 1:

const words = ["aba", "aabb", "abcd", "bac", "aabc"];
// Output: 2
// Explanation: There are 2 pairs that satisfy the conditions:
// - i = 0 and j = 1 : both words[0] and words[1] only consist of characters 'a' and 'b'.
// - i = 3 and j = 4 : both words[3] and words[4] only consist of characters 'a', 'b', and 'c'.

// Example 2:

// const words = ["aabb", "ab", "ba"];
// Output: 3
// Explanation: There are 3 pairs that satisfy the conditions:
// - i = 0 and j = 1 : both words[0] and words[1] only consist of characters 'a' and 'b'.
// - i = 0 and j = 2 : both words[0] and words[2] only consist of characters 'a' and 'b'.
// - i = 1 and j = 2 : both words[1] and words[2] only consist of characters 'a' and 'b'.

// Example 3:

// const words = ["nba", "cba", "dba"];
// Output: 0
// Explanation: Since there does not exist any pair that satisfies the conditions, we return 0.

console.log(similarPairs(words));
