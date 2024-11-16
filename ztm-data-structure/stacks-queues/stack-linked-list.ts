class StackListNode<T> {
  value: T;
  prev: StackListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.prev = null;
  }
}

class LinkedListStack<T> {
  private top: StackListNode<T> | null = null;
  private length: number = 0;

  constructor() {
    // Do nothing
  }

  push(value: T): void {
    const newNode = new StackListNode(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.prev = this.top;
      this.top = newNode;
    }

    this.length++;
  }

  peek(): T | null {
    if (this.top) {
      return this.top.value;
    } else {
      return null;
    }
  }

  pop(): T | null {
    if (!this.top) return null;

    const value = this.top.value;
    this.top = this.top.prev;

    this.length--;
    return value;
  }

  getList(): Array<T> {
    const array: Array<T> = [];
    let currentNode: StackListNode<T> | null = this.top;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.prev;
    }

    return array.reverse();
  }

  size(): number {
    return this.length;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }
}

// Example usage
const myLinkedListStack = new LinkedListStack<number>();
console.log(myLinkedListStack.peek()); // Output: null
console.log(myLinkedListStack.pop()); // Output: null

myLinkedListStack.push(2);
myLinkedListStack.push(3);
console.log(myLinkedListStack.peek()); // Output: 3
console.log(myLinkedListStack.getList()); // Output: [2, 3]
console.log(myLinkedListStack.pop()); // Output: 3
console.log(myLinkedListStack.getList()); // Output: [2]
console.log(myLinkedListStack.pop()); // Output: 2
console.log(myLinkedListStack.getList()); // Output: []
console.log(myLinkedListStack.isEmpty()); // Output: true
console.log(myLinkedListStack.size()); // Output: 0
