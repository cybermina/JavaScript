//1-masala
// function normalizeNumbers(numbers) {
// return numbers.map(num => {                                                 
//  return Math.round(Math.abs(num));
//  });
// }

// let nums = [3.02, -3.65, 5, -9];
// console.log(normalizeNumbers(nums)); 

//2-masala
// function kubniQaytar(num) {
// return num ** 3;
// }

// console.log(kubniQaytar(3));

//3-masala
// function yigindiAjratish(n) {
// let toq = 0;
// let juft = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     juft += i; 
//   } else {
//      toq += i; 
//    }
//  }
// return { toq, juft };
// }

// console.log(yigindiAjratish(10)); 

//4-masala
// function oneTwo(str) {
//  let clean = str.trim();
//  return clean.substring(1) + clean.charAt(0);
// }

// console.log(oneTwo("     JavaScrip     "));

//5-masala
// function ikkiSon(a, b) {
//  if (a === b) {
//    return (a + b) * 2;
//   } else {
//    return a + b;
//  }
// }

// console.log(ikkiSon(3, 3)); 
// console.log(ikkiSon(2, 5)); 

//6-masala
// function yigindiniHisobla(arr) {
//  let sum = 0;
//  for (let num of arr) {
//    sum += num;
//  }
//  return sum;
// }

// const raqamlar = [2, 5, 7, 10];
// console.log(yigindiniHisobla(raqamlar)); 

//7-masala
// function numberFunc(str) {
//  return Math.round(Number(str));
// }

// console.log(numberFunc("34.000")); 

//8-masala
// function sortFunc(arr) {
//  return Math.max(...arr);
// }

// console.log(sortFunc([111, 4, 6, 2, 99, 44, 11])); 

//9-masala
// function minFunc(arr) {
//  return Math.min(...arr);
// }

// console.log(minFunc([111, 4, 6, 2, 99, 44, 11])); 

//10-masala
 function twoArrayMax(arr1, arr2) {
  let max1 = Math.max(...arr1);
  let max2 = Math.max(...arr2);
  return Math.max(max1, max2);
 }

 console.log(twoArrayMax([2, 9, 4], [8, 3, 10])); 
