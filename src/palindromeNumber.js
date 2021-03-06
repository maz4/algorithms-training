function isPalindrome(x) {
  let inputNumber = x;
  if (inputNumber < 0 || (inputNumber % 10 === 0 && inputNumber != 0)) {
    return false;
  }

  let revertedNumber = 0;

  while (inputNumber > revertedNumber) {
    revertedNumber = revertedNumber * 10 + (inputNumber % 10);
    inputNumber = Math.floor(inputNumber / 10);
  }

  return (
    inputNumber === revertedNumber ||
    inputNumber === Math.floor(revertedNumber / 10)
  );
}

function isPalindromeStr(x) {
  if (x < 0 || (x % 10 === 0 && x != 0)) {
    return false;
  }
  const xString = x.toString().split("").reverse().join("");
  return x === parseInt(xString, 10);
}

module.exports = {
  isPalindrome,
  isPalindromeStr,
};
