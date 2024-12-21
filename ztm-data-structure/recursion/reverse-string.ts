function reverseString(str: string) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

console.log(reverseString("yoyo master"));

function reverseStringRecursive(str: string) {
  const n = str.length;
  if (n > 1) {
    const current = str[n - 1];
    const next = str.slice(0, n - 1);
    return current + reverseStringRecursive(next);
  } else {
    return str[0];
  }
}

console.log(reverseStringRecursive("yoyo master"));
