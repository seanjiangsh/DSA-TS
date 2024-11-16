class MyArray {
  length: number;
  data: { [key: number]: any };

  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index: number) {
    return this.data[index];
  }

  push(item: any) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shiftItems(index: number) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  delete(index: number) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  getArray() {
    return Object.values(this.data);
  }
}

const newArray = new MyArray();
console.log(newArray.get(0));

console.log(newArray.push("hi"));
console.log(newArray.push("you"));
console.log(newArray.push("!"));
console.log(newArray.push("are"));
console.log(newArray.push("nice"));

console.log(newArray.get(0));
console.log(newArray.length);

console.log(newArray.delete(2));
console.log(newArray.getArray());

console.log(newArray.pop());
console.log(newArray.push("great"));

console.log(newArray.getArray());
