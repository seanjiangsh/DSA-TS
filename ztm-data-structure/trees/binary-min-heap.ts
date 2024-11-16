/**
 * Binary Heap Complexity:

    In a Min-Heap, the smallest element is always at the root, and accessing it is O(1)O(1).

    Inserting a new element or extracting the minimum (removing it) both require O(log⁡n)O(logn) due to the heap’s balancing operations.
 */

class BinaryMinHeap {
  private heap: number[];

  constructor() {
    this.heap = [];
  }

  // Helper function to get the index of the parent
  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  // Helper function to get the index of the left child
  private getLeftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  // Helper function to get the index of the right child
  private getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  // Insert a new element into the heap
  insert(value: number): void {
    this.heap.push(value);
    this.bubbleUp();
  }

  // Bubble up the last element to maintain heap property
  private bubbleUp(): void {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[index] >= this.heap[parentIndex]) break;

      // Swap with parent if child is smaller
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  // Extract the minimum element (root) from the heap
  extractMin(): number | null {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop()!;

    const min = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.bubbleDown();
    return min;
  }

  // Bubble down the root element to maintain heap property
  private bubbleDown(): void {
    let index = 0;
    const length = this.heap.length;

    while (this.getLeftChildIndex(index) < length) {
      let leftIndex = this.getLeftChildIndex(index);
      let rightIndex = this.getRightChildIndex(index);
      let smallerChildIndex = leftIndex;

      if (rightIndex < length && this.heap[rightIndex] < this.heap[leftIndex]) {
        smallerChildIndex = rightIndex;
      }

      if (this.heap[index] <= this.heap[smallerChildIndex]) break;

      // Swap with the smaller child
      [this.heap[index], this.heap[smallerChildIndex]] = [
        this.heap[smallerChildIndex],
        this.heap[index],
      ];
      index = smallerChildIndex;
    }
  }

  // Helper function to peek at the minimum element without removing it
  peek(): number | null {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
}

// Usage Example
const minHeap = new BinaryMinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(15);
minHeap.insert(1);

console.log(minHeap.peek()); // Output: 1
console.log(minHeap.extractMin()); // Output: 1
console.log(minHeap.peek()); // Output: 5
