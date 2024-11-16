// Create a function that reverses a string

function reverse(str: string) {
  console.log(str);

  // 1st approach
  const reversed: Array<string> = [];
  // O(n)
  for (let i = str.length - 1; i >= 0; i--) {
    reversed.push(str[i]); // O(1)
  }
  return reversed.join("");

  // another approach
  return Array.from(str).reverse().join(""); // O(n)
}

console.log(reverse("Hi my name is Sean."));
