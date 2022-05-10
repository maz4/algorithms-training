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

function fibonacciMemoized() {
  let cache = {};

  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        cache[n] = n;
        return n;
      }

      cache[n] = fib(n - 1) + fib(n - 2);

      return cache[n];
    }
  };
}

console.log(fibonacciIterative(3));
console.log(fibonacciRecursive(8));
const fibMemo = fibonacciMemoized();
console.log(fibMemo(10));
