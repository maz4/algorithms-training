function fibonacciRecursive(n) {
  // O(2^n)
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function fibonacciIterative(n) {
  // O(n)
  if (n === 0) {
    return 0;
  }

  let previous = 0;
  let current = 1;
  for (let i = 1; i < n; i++) {
    const temp = current;
    current = temp + previous;
    previous = temp;
  }

  return current;
}

console.log(fibonacciIterative(3));
console.log(fibonacciRecursive(8));
