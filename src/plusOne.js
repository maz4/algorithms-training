/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
The digits are ordered from most significant to least significant in left-to-right order. 
The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.

Constraints:
1 <= digits.length <= 100
0 <= digits[i] <= 9
digits does not contain any leading 0's.

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOneStr = function (digits) {
  let numb = Number(digits.join("")) + 1;
  let strNumb = numb.toString().split("");
  for (let i = 0; i < strNumb.length; i++) {
    strNumb[i] = Number(strNumb[i]);
  }
  return strNumb;
};

console.log(plusOneStr([1, 2, 3]));
console.log(plusOneStr([4, 3, 2, 1]));
console.log(plusOneStr([9]));

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  //O(n)
  let co = true;
  for (let i = digits.length - 1; i >= 0 && co; i--) {
    digits[i]++;
    co = digits[i] >= 10;
    co && (digits[i] = 0);
  }

  co && digits.unshift(1);
  return digits;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([1, 9, 9]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
