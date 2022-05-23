/*
Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.

Constraints:
1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const str = s.trim().split(" ");
  return str[str.length - 1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("luffy is still joyboy"));
