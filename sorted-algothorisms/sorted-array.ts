class SortedArray {
  private array: number[];

  // Constructor: O(1)
  constructor() {
    this.array = [];
  }

  // insert Function: O(n)
  insert(value: number): void {
    let index = this.binarySearch(value); // O(log n)
    this.array.splice(index, 0, value); // O(n)
  }

  // binarySearch Function: O(log n)
  binarySearch(value: number): number {
    let low = 0;
    let high = this.array.length;

    while (low < high) {
      // O(log n)
      let mid = Math.floor((low + high) / 2); // O(1)
      if (this.array[mid] < value) {
        low = mid + 1; // O(1)
      } else {
        high = mid; // O(1)
      }
    }

    return low; // O(1)
  }

  // getAllElements Function: O(n)
  getAllElements(): number[] {
    return [...this.array]; // O(n)
  }
}

// Example usage
const sortedArray = new SortedArray();
sortedArray.insert(3);
sortedArray.insert(1);
sortedArray.insert(2);
console.log(sortedArray.getAllElements()); // Output: [1, 2, 3]
