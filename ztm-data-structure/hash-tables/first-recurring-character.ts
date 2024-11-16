//Google Question
// const nums = [2, 5, 1, 2, 3, 5, 1, 2, 4];
//It should return 2

// const nums = [2, 1, 1, 2, 3, 5, 1, 2, 4];
//It should return 1

// const nums = [2, 3, 4, 5];
//It should return undefined

function firstRecurringCharacter(input: Array<number>) {
  const numSet = new Set<number>();
  for (let i = 0; i < input.length; i++) {
    const num = input[i];
    if (numSet.has(num)) return num;
    numSet.add(num);
  }
}

//Bonus... What if we had this:
const nums = [2, 5, 5, 2, 3, 5, 1, 2, 4];
console.log(firstRecurringCharacter(nums));
// return 5 because the pairs are before 2,2
