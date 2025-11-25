//1 - masala
function strCompare(str) {
  let firstNum = parseInt(str[0]); 
  let lastNum = parseInt(str[str.length - 1]); 
  let text = str.slice(1, -1); 

  if (firstNum > lastNum) {
    return `++${text}++`;
  } else {
    return `--${text}--`;
  }
}


console.log(strCompare("23javascript12")); 
console.log(strCompare("2javascript12")); 

//2 - masala
function makes10(a, b) {
  return a === 10 || b === 10 || (a + b === 10);
}


console.log(makes10(9, 1));  
console.log(makes10(10, 5)); 
console.log(makes10(3, 4));  

//3 - masala
function doubleChar(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i]; 
  }
  return result;
}


console.log(doubleChar("hello")); 
console.log(doubleChar("abc")); 

//4 - masala
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}


console.log(factorial(5)); 
console.log(factorial(3)); 





