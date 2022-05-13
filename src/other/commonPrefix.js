// Given a string, split the string into two substrings at every possible point. The rightmost
// substring is a suffix. The beginning of the string is the prefix. Determine the lengths of the
// common prefix between each suffix and the original string. Sum and return the lengths of the
// common prefixes. Return an array where each element /is the sum for string /.

// Example
// Consider the only string in the array inputs = [‘abcabca']. Each suffix is compared to the original
// string.
//

function commonPrefix(input) {
  let length = 0;

  for (let i = 0; i < input.length; i++) {
    const prefix = input.slice(0, i);
    const suffix = input.slice(i, input.length - 1);

    if (prefix === "") {
      length = length + input.length;
    }

    if (suffix.indexOf(prefix) === 0) {
      length = length + prefix.length;
    }
  }

  return length;
}

const str = "abcabcd";
const str2 = "ababaa";

console.log(commonPrefix(str));
console.log(commonPrefix(str2));
