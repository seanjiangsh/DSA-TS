class ArrayStack<T> {
  private stack: Array<T> = [];

  constructor() {
    // Do nothing
  }

  push(value: T): void {
    this.stack.push(value);
  }

  peek(): T | null {
    if (this.stack.length === 0) {
      return null;
    } else {
      return this.stack[this.stack.length - 1];
    }
  }

  pop(): T | null {
    if (this.stack.length === 0) {
      return null;
    } else {
      return this.stack.pop() || null;
    }
  }

  getList(): Array<T> {
    return [...this.stack]; // Return a shallow copy of the stack
  }

  size(): number {
    return this.stack.length;
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }
}

// Example usage
const myArrayStack = new ArrayStack<number>();
console.log(myArrayStack.peek()); // Output: null
console.log(myArrayStack.pop()); // Output: null

myArrayStack.push(2);
myArrayStack.push(3);
console.log(myArrayStack.peek()); // Output: 3
console.log(myArrayStack.getList()); // Output: [2, 3]
console.log(myArrayStack.pop()); // Output: 3
console.log(myArrayStack.getList()); // Output: [2]
console.log(myArrayStack.pop()); // Output: 2
console.log(myArrayStack.getList()); // Output: []
console.log(myArrayStack.isEmpty()); // Output: true
console.log(myArrayStack.size()); // Output: 0
