function isValid(s) {
  if (s.length % 2 !== 0) {
    return false;
  }

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "[" || s[i] === "{" || s[i] === "(") {
      stack.push(s[i]);
    } else if (stack.length === 0) {
      return false;
    } else {
      const lastParentheses = stack.pop();
      if (
        (s[i] === ")" && lastParentheses !== "(") ||
        (s[i] === "]" && lastParentheses !== "[") ||
        (s[i] === "}" && lastParentheses !== "{")
      ) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

module.exports = { isValid };
