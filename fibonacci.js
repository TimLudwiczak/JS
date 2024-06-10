function fibonacci(num) {
  let result = new Array(n + 1);
  for( let i = 2; i <= num, i++;) {
    result[i] = result[i-1] + result[i-2];
  }
  return 0;
}

console.log(fibonacci(7));
// module.exports = fibonacci;
