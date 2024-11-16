class HashTable {
  data: Array<any> = [];

  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key: string, val: any) {
    let addr = this._hash(key);
    if (!this.data[addr]) {
      this.data[addr] = [];
    }
    this.data[addr].push([key, val]);
    // console.log(this.data);
    return addr;
  }

  get(key: string) {
    let addr = this._hash(key);
    const currentBucket = this.data[addr];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
  }

  keys() {
    return this.data.reduce((p, c) => {
      const key = c[0][0];
      return key ? [...p, key] : p;
    }, []);
  }
}

const myHashTable = new HashTable(50);
const grapeAddr = myHashTable.set("grapes", 10000);
const grapeAddr2 = myHashTable.set("grapes", 20000);
const appleAddr = myHashTable.set("apples", 100);
const grapeVal = myHashTable.get("grapes");

const keys = myHashTable.keys();

console.log({ grapeAddr, appleAddr, grapeVal, keys });
