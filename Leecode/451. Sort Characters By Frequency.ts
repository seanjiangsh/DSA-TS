// 451. Sort Characters By Frequency
// Medium
// Topics
// Companies

// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

// Constraints:

//     1 <= s.length <= 5 * 105
//     s consists of uppercase and lowercase English letters and digits.

function frequencySort(s: string): string {
  // * 1st try
  // * time: O(n), space: O(n)
  const freqMap = new Map<string, number>();
  for (const char of s) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }
  const freqArr = Array.from({ length: s.length + 1 }, () => "");
  for (const [char, freq] of freqMap) {
    freqArr[freq] += Array.from({ length: freq }).fill(char).join("");
  }
  let result = "";
  for (let i = freqArr.length - 1; i > 0; i--) {
    const chars = freqArr[i];
    result += chars;
  }
  console.log({ freqMap, freqArr, result });
  return result;
}

// Example 1:

const s = "tree";
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

// Example 2:

// const s = "cccaaa";
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.

// Example 3:

// const s = "Aabb";
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

console.log(frequencySort(s));
