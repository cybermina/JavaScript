//1-masala
function getFirstValueAndAddToArray(arr) {
  let first = arr[0];
  arr.shift(); 
  arr.push(first); 
  return arr;
}
console.log(getFirstValueAndAddToArray([1, 2, 3])); 
console.log(getFirstValueAndAddToArray([80, 5, 100]));
console.log(getFirstValueAndAddToArray([-500, 0, 50])); 


//2-masala
function makePair(a, b) {
  return [a, b, a + b];
}
console.log(makePair(1, 2));
console.log(makePair(51, 21)); 
console.log(makePair(5, 215)); 


//3-masala
function incrementItems(arr) {
  return arr.map(x => x + 1);
}
console.log(incrementItems([0, 1, 2, 3])); 
console.log(incrementItems([2, 4, 6, 8])); 
console.log(incrementItems([-1, -2, -3, -4])); 


//5-masala
function sevenBoom(arr) {
  return arr.some(num => String(num).includes('7'))
    ? "Boom!"
    : "there is no 7 in the array";
}
console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])); 
console.log(sevenBoom([8, 6, 33, 100])); 


//6-masala
function compact(arr) {
  return arr.filter(Boolean);
}
console.log(compact([0, 1, false, 2, "", 3])); 


//7-masala
function testJackpot(arr) {
  return arr.every(item => item === arr[0]);
}
console.log(testJackpot(["@", "@", "@", "@"])); 
console.log(testJackpot(["abc", "abc", "abc", "abc"])); 
console.log(testJackpot(["SS", "SS", "SS", "SS"])); 
console.log(testJackpot(["&&", "&", "&&&", "&&&&"])); 
console.log(testJackpot(["SS", "SS", "SS", "Ss"])); 


//8-masala
function getStringLength(arr) {
  return arr.map(str => str.length);
}
console.log(getStringLength(["cat", "dog", "duck"])); 


//9-masala
function filterWords(arr) {
  return arr.filter(word => !/\d/.test(word));
}
console.log(filterWords(["cat", "dog1", "apple", "du3ck", "sun"])); 
