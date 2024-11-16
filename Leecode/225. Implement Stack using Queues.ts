// 225. Implement Stack using Queues
// Easy
// Topics
// Companies

// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

//     void push(int x) Pushes element x to the top of the stack.
//     int pop() Removes the element on the top of the stack and returns it.
//     int top() Returns the element on the top of the stack.
//     boolean empty() Returns true if the stack is empty, false otherwise.

// Notes:

//     You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
//     Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.

class MyStack {
  private queue: Array<number> = [];

  constructor() {
    // Do nothing
  }

  push(x: number): void {
    const size = this.queue.length;
    this.queue.push(x);
    for (let i = 0; i < size; i++) {
      this.queue.push(this.queue.shift()!);
    }
  }

  pop(): number | undefined {
    return this.queue.shift();
  }

  top(): number | undefined {
    return this.queue[0];
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

const myQueueStack = new MyStack();
myQueueStack.push(1);
myQueueStack.push(2);
console.log(myQueueStack.top()); // return 2
console.log(myQueueStack.pop()); // return 2, stack is [1]
console.log(myQueueStack.empty()); // return false
console.log(myQueueStack.pop()); // return 1, stack is []
console.log(myQueueStack.empty()); // return true
