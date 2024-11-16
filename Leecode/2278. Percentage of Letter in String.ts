// 2278. Percentage of Letter in String
// Easy
// Topics
// Companies
// Hint

// Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.

// Constraints:

//     1 <= s.length <= 100
//     s consists of lowercase English letters.
//     letter is a lowercase English letter.

function percentageLetter(s: string, letter: string): number {
  // * 1st try:
  let count = 0;
  for (const char of s) {
    if (char === letter) count++;
  }
  return Math.floor((count / s.length) * 100);
}

// Example 1:

const s = "foobar";
const letter = "o";
// Output: 33
// Explanation:
// The percentage of characters in s that equal the letter 'o' is 2 / 6 * 100% = 33% when rounded down, so we return 33.

// Example 2:

// const s = "jjjj";
// const letter = "k";
// Output: 0
// Explanation:
// The percentage of characters in s that equal the letter 'k' is 0%, so we return 0.

console.log(percentageLetter(s, letter));
