function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  if (!number || number === 0) {
    return 0;
  }

  let result = number;

  for (let i = number - 1; i > 0; i--) {
    result = result * i;
  }

  return result;
}

const number = 5;

console.log(findFactorialRecursive(number));
console.log(findFactorialIterative(number));
