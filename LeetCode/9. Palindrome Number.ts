// Given an integer x, return true if x is a

// , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:

//     -231 <= x <= 231 - 1

// * 1st try
// function isPalindrome(x: number): boolean {
//   const strX = x.toString();
//   console.log(strX);
//   const revertedX = Array.from(strX).reverse().join("");
//   console.log(revertedX);
//   return strX === revertedX;
// }

// * Mathematical approach
// function isPalindrome(x: number): boolean {
//   // Negative numbers and numbers ending with 0 (except 0 itself) are not palindromes
//   if (x < 0 || (x % 10 === 0 && x !== 0)) {
//     return false;
//   }

//   let reversedHalf = 0;
//   while (x > reversedHalf) {
//     reversedHalf = reversedHalf * 10 + (x % 10);
//     x = Math.floor(x / 10);
//   }

//   // For odd digit numbers, we need to remove the middle digit
//   return x === reversedHalf || x === Math.floor(reversedHalf / 10);
// }

// * 2-Pointer string approach
// filepath: d:\Dev-Workspace\Web-workspace\Data Structures + Algorithms\DSA-TS\LeetCode\9. Palindrome Number.ts
function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  const str = x.toString();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

const case1 = isPalindrome(121);
const case2 = isPalindrome(-121);
const case3 = isPalindrome(10);

console.log({ case1, case2, case3 });
