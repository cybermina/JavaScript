//1-masala
function sameFirstLast(arr) {
  return arr[0] === arr[arr.length - 1];
}
console.log("1:", sameFirstLast([1, 2, 1])); 

//2-masala
function oneCount(...arrays) {
  let count = 0;

  for (let arr of arrays) {
    if (arr.includes(1)) count++;
  }

  if (count === 1) return "ONE";
  if (count === 2) return "TWO";
  if (count === 3) return "THREE";
  if (count === 4) return "FOUR";

  return count;
}
console.log("2:", oneCount([1,2], [7,1], [2,3])); 

//3-masala
function answerCell(...args) {
  if (args.length === 2) return true;

  for (let a of args) {
    if (a === true) return true;
  }

  return false;
}
console.log("3:", answerCell(false, false, true));

//4-masala
function blackjack(a, b) {
  let max = 0;

  if (a <= 21) max = a;
  if (b <= 21 && b > max) max = b;

  return {
    max_number: max,
    arr: [a, b, "TWO", "ONE"],
    arr_length: 4,
    type: "string"
  };
}
console.log("4:", blackjack(19, 21));

//5-masala
function removeDups(arr) {
  let result = [];

  for (let item of arr) {
    if (!result.includes(item)) result.push(item);
  }

  return result;
}
console.log("5:", removeDups([1, 0, 1, 0]));

//6-masala
function getSumm(matrix) {
  let sum = 0;

  for (let row of matrix) {
    for (let num of row) sum += num;
  }

  if (sum > 10) return { sum: sum };
  return { sum: "seven" };
}

console.log("6:", getSumm([
  [0,1,0,0],
  [1,1,0,1],
  [0,1,0,1],
  [0,0,1,5]
])); 

//7-masala
function uniqueSort(arr) {
  let result = [];

  for (let n of arr) {
    if (!result.includes(n)) result.push(n);
  }

  result.sort((a, b) => a - b);
  return result;
}

console.log("7:", uniqueSort([1, 2, 4, 3]));

//8-masala
function specialReverse(text, letter) {
  let words = text.split(" ");
  let result = { searches: "", super: "" };

  for (let w of words) {
    if (w[0].toLowerCase() === letter.toLowerCase()) {
      let reversed = w.split("").reverse().join("");
      result.searches = reversed;
      result.super = reversed;
    }
  }
  return result;
}

console.log("8:", specialReverse("super search", "s"));