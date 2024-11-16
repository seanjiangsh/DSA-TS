// 232. Implement Queue using Stacks
// Easy
// Topics
// Companies

// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

// Implement the MyQueue class:

//     void push(int x) Pushes element x to the back of the queue.
//     int pop() Removes the element from the front of the queue and returns it.
//     int peek() Returns the element at the front of the queue.
//     boolean empty() Returns true if the queue is empty, false otherwise.

// Notes:

//     You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
//     Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

class MyQueue {
  // stack with normal (pushed) sequence
  private stack1: Array<number> = [];
  // stack with reverted sequence
  private stack2: Array<number> = [];

  constructor() {
    // Do nothing
  }

  private transferToStack2() {
    if (this.stack2.length !== 0) return;

    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop()!);
    }
  }

  push(x: number): void {
    this.stack1.push(x);
  }

  pop(): number | undefined {
    this.transferToStack2();
    return this.stack2.pop();
  }

  peek(): number | undefined {
    this.transferToStack2();
    return this.stack2[this.stack2.length - 1];
  }

  empty(): boolean {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// Example 1:

// Input
// ["MyQueue", "push", "push", "peek", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 1, 1, false]

// Explanation
const myStackQueue = new MyQueue();
myStackQueue.push(1); // queue is: [1]
myStackQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
console.log(myStackQueue.peek()); // return 1
console.log(myStackQueue.pop()); // return 1, queue is [2]
console.log(myStackQueue.empty()); // return false
console.log(myStackQueue.pop()); // return 2, queue is []
console.log(myStackQueue.empty()); // return true
