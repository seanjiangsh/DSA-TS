class MinHeap<T> {
  private heap: T[];
  private comparator: (a: T, b: T) => number;

  // Constructor: O(1)
  constructor(comparator: (a: T, b: T) => number) {
    this.heap = [];
    this.comparator = comparator;
  }

  // size Function: O(1)
  size(): number {
    return this.heap.length;
  }

  // peek Function: O(1)
  peek(): T | undefined {
    return this.heap[0];
  }

  // push Function: O(log n)
  push(value: T): void {
    this.heap.push(value);
    this.bubbleUp();
  }

  // pop Function: O(log n)
  pop(): T | undefined {
    if (this.size() === 0) return undefined;
    const top = this.heap[0];
    const bottom = this.heap.pop();
    if (this.size() > 0 && bottom !== undefined) {
      this.heap[0] = bottom;
      this.bubbleDown();
    }
    return top;
  }

  // bubbleUp Function: O(log n)
  private bubbleUp(): void {
    let index = this.size() - 1;
    const element = this.heap[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];
      if (this.comparator(element, parent) >= 0) break;
      this.heap[index] = parent;
      index = parentIndex;
    }
    this.heap[index] = element;
  }

  // bubbleDown Function: O(log n)
  private bubbleDown(): void {
    let index = 0;
    const length = this.size();
    const element = this.heap[index];
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let leftChild: T | undefined, rightChild: T | undefined;
      let swapIndex = -1;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (this.comparator(leftChild, element) < 0) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swapIndex === -1 && this.comparator(rightChild, element) < 0) ||
          (swapIndex !== -1 && this.comparator(rightChild, leftChild!) < 0)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === -1) break;
      this.heap[index] = this.heap[swapIndex];
      index = swapIndex;
    }
    this.heap[index] = element;
  }

  // getAllElements Function: O(n)
  getAllElements(): T[] {
    return [...this.heap];
  }

  // getAllElementsSorted Function: O(n log n)
  getAllElementsSorted(): T[] {
    // Make a shallow copy of the heap's internal array
    const heapCopy = [...this.heap];
    const sortedElements: T[] = [];
    const tempHeap = new MinHeap<T>(this.comparator);
    tempHeap.heap = heapCopy;

    while (tempHeap.size() > 0) {
      sortedElements.push(tempHeap.pop()!);
    }

    return sortedElements;
  }
}

// Example usage
const minHeap = new MinHeap<number>((a, b) => a - b);
minHeap.push(3);
minHeap.push(1);
minHeap.push(2);
console.log(minHeap.getAllElementsSorted()); // Output: [1, 2, 3]
console.log(minHeap.getAllElements()); // Output: [1, 3, 2] (original heap remains unchanged)
