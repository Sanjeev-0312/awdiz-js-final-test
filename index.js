
// DSA Questions with Input & Output Examples

// 1. Reverse a String
function reverseString(str) {
  let res = [];
  for (let i = str.length - 1; i >= 0; i--) {
      res += str[i];
  }
  return res;
}

console.log(reverseString("hello")); 
console.log(reverseString("JavaScript"));

// 2. First Non-reapeating character
 
function nonRepeating(str) {
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }
    if (count === 1) {
      return str[i]; 
    }
  }
  return ; 
}

console.log(nonRepeating("aabbccd"));
console.log(nonRepeating("abcabcde"));





//input: "aabbccd" - ouput "d"

//3. two sum problem 

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              return [i, j]; 
          }
      }
  }
  return [ ]; 
}

console.log(twoSum([2, 7, 11, 15],9));
console.log(twoSum([3,2,4],6)); 

// 4. find the Missing Numbers

// function missingNumber(arr) {
//   let n = arr.length;
//   let sum = (n * (n + 1)) / 2; 
//   let arrsum =

// console.log(missingNumber([3, 0, 1])); 

function missingNumber(arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (!arr.includes(i)) return i;
  }
}

console.log(missingNumber([3, 0, 1]));



//5.longest substring without repeating characters

function Repeating (str){
  
}

//input:"abcabcbb" output: 3
//input: "bbbbb"  output: 1


//6.merge two sorted arrays

function mergeSortedArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); 


// input:[1, 3, 5], [2, 4, 6] -output [1,2,3,4,5,6]

// 9. Find the intersection of two arrays
// function Intersection(arr1, arr2) {
//   let map = {};
//   let result = [];

//   for (let num of arr1) {
//     if (map[num]) {
//       map[num]++;
//     } else {
//       map[num] = 1;
//     }
//   }

//   for (let num of arr2) {
//     if (map[num] && map[num] > 0) {
//       result.push(num);
//       map[num]--;
//     }
//   }

//   return result;
// }

// console.log(Intersection([1, 2, 2, 1], [2, 2])); 

// //input:[1,2,2,1],[2,2] -output:[2,2]

function Intersection(arr1, arr2) {
  let map = new Map();
  let result = [];

  for (let num of arr1) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let num of arr2) {
    if (map.get(num)) {
      result.push(num);
      map.set(num, map.get(num) - 1);
    }
  }

  return result;
}

console.log(Intersection([1, 2, 2, 1], [2, 2])); 


//11. draw this pattern using while loop 

let i = 0;
while (i < 4) {
  if (i % 2 === 0) {
    console.log("**");
  } else {
    console.log("*");
  }
  i++;
}
// **
// *
// **
// *     

//flatten 