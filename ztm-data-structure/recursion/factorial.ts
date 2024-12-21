// * Recursive
/**
 * 1. Identify the base case
 * 2. Identify the recursive case
 * 3. Get closer and closer and return when needed. Usually you have 2 returns
 */

// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop
// 5! = 5*4*3*2*1

function findFactorialIterative(num: number) {
  let answer = num;
  while (num > 1) {
    answer *= num - 1;
    num--;
  }
  return answer;
}

function findFactorialRecursive(num: number) {
  if (num > 1) {
    const result = num * findFactorialRecursive(num - 1);
    return result;
  } else {
    return num;
  }
}

// console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
