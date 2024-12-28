// 1684. Count the Number of Consistent Strings
// Easy
// Topics
// Companies
// Hint

// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

// Constraints:

//     1 <= words.length <= 104
//     1 <= allowed.length <= 26
//     1 <= words[i].length <= 10
//     The characters in allowed are distinct.
//     words[i] and allowed contain only lowercase English letters.
const printBitMask = (n: number, prefix?: string) => {
  // Convert the bitmask to a binary string and pad with leading zeros
  const maskStr = n.toString(2).padStart(26, "0");
  const str = prefix ? `${prefix}: ${maskStr}` : maskStr;
  console.log(str);
};

function countConsistentStrings(allowed: string, words: string[]): number {
  // // * 1st try:
  // // * time: O(n * m)
  // // * space: O(k)
  // const allowedSet = new Set(allowed.split(""));
  // let result = 0;
  // for (const word of words) {
  //   let consistent = true;
  //   for (const char of word) {
  //     if (!allowedSet.has(char)) consistent = false;
  //   }
  //   if (consistent) result++;
  // }
  // return result;

  // * Copilot's solution: bitmask
  // * time: O(n * m)
  // * space: O(1)
  let allowedMask = 0;
  for (const char of allowed) {
    allowedMask |= 1 << (char.charCodeAt(0) - 97); // 'a' is 97 in ASCII
  }

  printBitMask(allowedMask, "Allowed bitmask:");

  let result = 0;
  for (const word of words) {
    let wordMask = 0;
    for (const char of word) {
      wordMask |= 1 << (char.charCodeAt(0) - 97);
    }
    const bitwiseAnd = wordMask & allowedMask;
    printBitMask(wordMask, "Word bitmask:");
    printBitMask(bitwiseAnd, "Bitwise AND");

    if (bitwiseAnd === wordMask) {
      result++;
    }
  }

  return result;
}

// Example 1:

// const allowed = "ab";
// const words = ["ad", "bd", "aaab", "baa", "badab"];
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

// Example 2:

// const allowed = "abc";
// const words = ["a", "b", "c", "ab", "ac", "bc", "abc"];
// Output: 7
// Explanation: All strings are consistent.

// Example 3:

const allowed = "cad";
const words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"];
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.

console.log(countConsistentStrings(allowed, words));
