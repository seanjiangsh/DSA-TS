function memoizedAddTo80() {
  const cache: { [key: number]: number } = {};
  return function addTo80(n: number): number {
    if (n in cache) {
      console.log("Fetching from cache");
      return cache[n];
    } else {
      console.log("Calculating result for a long time...");
      const result = n + 80;
      cache[n] = result;
      return result;
    }
  };
}

const addTo80 = memoizedAddTo80();

console.log(addTo80(10));
console.log(addTo80(5));
console.log(addTo80(5));
