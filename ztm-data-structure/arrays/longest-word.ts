// Longest Word
// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string.
// If there are two or more words that are the same length,
// return the first word from the string with that length.
// Ignore punctuation and assume sen will not be empty.
// Words may also contain numbers, for example "Hello world123 567"

// Examples

// Input: "fun&!! time"
// Output: time

// Input: "I love dogs"
// Output: love

function LongestWord(sen: string) {
  // * 1st try: O(n)
  // // O(n)
  // const cleanedSen = sen.replace(/[^a-zA-Z0-9\s]/g, "");
  // // O(n)
  // const words = cleanedSen.split(" ");
  // // O(n)
  // sen = words.reduce((p, c) => (p.length >= c.length ? p : c), words[0]);
  // // O(1)
  // return sen;

  // * 2nd try: O(n)
  const cleanedSen = sen.replace(/[^a-zA-Z0-9\s]/g, ""); // O(n)

  let currentWord = "";
  let longestWord = "";

  // O(n)
  for (let i = 0; i < cleanedSen.length; i++) {
    const currentChar = cleanedSen[i];
    if (currentChar === " ") {
      currentWord = "";
    } else {
      currentWord += currentChar;
    }
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
    // console.log({ i, currentChar, currentWord, longestWord });
  }

  return longestWord; // O(1)
}

// Output: time
// const sen = "fun&!! time";

// Output: love
const sen = "I love dogs";

// keep this function call here
console.log(LongestWord(sen));
