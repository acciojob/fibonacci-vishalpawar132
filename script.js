function fibonacci(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;

  // Use memoization to store previously computed Fibonacci numbers
  const memo = new Map();
  memo.set(0, 0);
  memo.set(1, 1);

  // Helper function to calculate the Fibonacci number
  function fib(n) {
    if (memo.has(n)) {
      return memo.get(n);
    } else {
      const fibN = fib(n - 1) + fib(n - 2);
      memo.set(n, fibN);
      return fibN;
    }
  }

  return fib(num);
   
}

module.exports = fibonacci;

