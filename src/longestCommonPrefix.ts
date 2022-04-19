//Horizontal scanning
export function longestCommonPrefix(strs: string[]): string {
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
export function longestCommonPrefixVertical(strs: string[]): string {
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
