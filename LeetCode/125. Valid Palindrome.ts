// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

//     1 <= s.length <= 2 * 105
//     s consists only of printable ASCII characters.

// * better
function isPalindrome(str: string): boolean {
  const s = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
  const r = Array.from(s).reverse().join("");
  return s === r;
}

// * basic
// function isPalindrome(str: string): boolean {
//   const s = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
//   const len = s.length;
//   if (len === 0) return true;
//   const mid = Math.floor(len / 2);
//   const head = s.slice(0, mid);
//   const tail = s.slice(s.length - mid, s.length + 1);
//   const reversedTail = Array.from(tail).reverse().join("");
//   // console.log(s, len, mid, head, tail, reversedTail);
//   return head === reversedTail;
// }

const test1 = isPalindrome("A man, a plan, a canal: Panama");
console.log(test1);
const test2 = isPalindrome("A man, a plan, a anal: Panama");
console.log(test2);
const test3 = isPalindrome("race a car");
console.log(test3);
const test4 = isPalindrome(" ");
console.log(test4);
const test5 = isPalindrome("  ");
console.log(test5);
