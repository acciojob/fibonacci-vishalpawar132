function fibonacci(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    let fib = [0, 1];
    for (let i = 2; i <= num; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib[num];
  }
}

module.exports = fibonacci;

