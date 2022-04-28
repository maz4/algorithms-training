//Horizontal scanning
function longestCommonPrefix(strs) {
  // Time complexity : O(S), where S is the sum of all characters in all strings.
  // Space complexity : O(1)O(1). We only used constant extra space.
  const inputArrLength = strs.length;
  if (inputArrLength === 0 && inputArrLength > 200) {
    return "";
  }

  let prefix = strs[0];

  for (let i = 1; i < inputArrLength; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") {
        return "";
      }
    }
  }

  return prefix;
}

// Vertical scanning
function longestCommonPrefixVertical(strs) {
  const inputArrLength = strs.length;
  if (inputArrLength === 0 && inputArrLength > 200) {
    return "";
  }

  for (let i = 0; i < strs[0].length; i++) {
    const character = strs[0].charAt(i);

    for (let j = 1; j < inputArrLength; j++) {
      if (i === strs[j].length || strs[j].charAt(i) !== character) {
        return strs[0].substring(0, i);
      }
    }
  }

  return strs[0];
}

// Divide and conquer
// This solution exceeds node stack call,
// one of the solutions is to set set max variable to setTimeout with max to let node clear the queue
function commonPrefix(stringLeft, stringRight) {
  const min = Math.min(stringLeft.length, stringRight.length);

  for (let i = 0; i < min; i++) {
    if (stringLeft.charAt(i) !== stringRight.charAt(i)) {
      return stringLeft.substring(0, i);
    }
  }

  return stringLeft.substring(0, min);
}
function findLongestCommonPrefixDaC(strs, left, right) {
  if (left === right) {
    return strs[left];
  }
  const middle = (left + right) / 2;
  const lcpLeft = findLongestCommonPrefixDaC(strs, left, middle);
  const lcpRight = findLongestCommonPrefixDaC(strs, middle + 1, right);

  return commonPrefix(lcpLeft, lcpRight);
}

function longestCommonPrefixDaC(strs) {
  const inputArrLength = strs.length;
  if (inputArrLength === 0 && inputArrLength > 200) {
    return "";
  }

  return findLongestCommonPrefixDaC(strs, 0, strs.length - 1);
}

// Binary tree solution
// not quite right has a problem with ["cir", "car"]
function isCommonPrefix(strs, length) {
  const str = strs[0].substring(0, length);
  for (let i = 1; i < strs.length; i++) {
    if (!strs[i].startsWith(str)) {
      return false;
    }
  }
  return true;
}

function longestCommonPrefixBinaryTree(strs) {
  const inputArrLength = strs.length;
  if (inputArrLength === 0 && inputArrLength > 200) {
    return "";
  }

  let minLength = 9999;
  for (let i = 0; i < inputArrLength; i++) {
    minLength = Math.min(minLength, strs[i].length);
  }

  let low = 0;
  let hight = minLength;

  while (low <= hight) {
    const middle = (low + hight) / 2;
    if (isCommonPrefix(strs, middle)) {
      low = middle + 1;
    } else {
      hight = middle - 1;
    }
  }

  return strs[0].substring(0, (low + hight) / 2);
}

module.exports = {
  longestCommonPrefix,
  longestCommonPrefixBinaryTree,
  longestCommonPrefixDaC,
  longestCommonPrefixVertical,
  findLongestCommonPrefixDaC,
};
