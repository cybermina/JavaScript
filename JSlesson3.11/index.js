//1-task
function removeDuplicates(nums) {
  let unique = [];

  for (let i = 0; i < nums.length; i++) {
    if (!unique.includes(nums[i])) {
      unique.push(nums[i]);
    }
  }

  return unique.length;
}


//2-task
function findNeedle(haystack, needle) {
  return haystack.indexOf(needle);
}

//3-task
function countWords(s) {
  return s.trim().split(/\s+/).length;
}

//4-task
function removeSpaces(str) {
  return str.replaceAll(" ", "");
}


//5-task
function mySlice(str, start, end) {
  let result = "";

  for (let i = start; i < end; i++) {
    result += str[i];
  }

  return result;
}

//6-task
function mySplice(str, start, deleteCount) {
  let before = str.slice(0, start);
  let after = str.slice(start + deleteCount);

  return before + after;
}


//7-task
function isPositiveDominant(arr) {
  let positive = 0;
  let negative = 0;

  for (let num of arr) {
    if (num > 0) positive++;
    if (num < 0) negative++;
  }

  return positive > negative;
}


//8-task
function pluralize(arr) {
  let result = [];
  let count = {};

  for (let word of arr) {
    count[word] = (count[word] || 0) + 1;
  }

  for (let word in count) {
    if (count[word] > 1) {
      result.push(word + "s");
    } else {
      result.push(word);
    }
  }

  return result;
}


//9-task
function returnUnique(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}


//10-task
function missing(arr1, arr2) {
  for (let item of arr1) {
    if (!arr2.includes(item)) {
      return item;
    }
  }
}

