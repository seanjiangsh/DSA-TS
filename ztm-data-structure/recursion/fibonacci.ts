// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

// O(n)
function fibonacciIterative(n: number) {
  let prev = 0;
  let current = 1;
  let tmp = prev;

  for (let i = 1; i < n; i++) {
    console.log({ prev, current, tmp });
    tmp = current;
    current = prev + current;
    prev = tmp;
  }

  return current;
}

// O(2^n)
function fibonacciRecursive(n: number) {
  if (n < 2) return n;
  return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
}

console.log(fibonacciIterative(6));
console.log(fibonacciRecursive(6));
