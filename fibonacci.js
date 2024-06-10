function fibonacci(num) {
  
  if (num === 0) return 0;
  if (num === 1) return 1;

  let result= new Array(num + 1);
  result[0] = 0;
  result[1] = 1;

  for( let i = 2; i <= num; i++) {
    result[i] = result[i-1] + result[i-2];
  }
  return result[num];
}

console.log(fibonacci(8));
// module.exports = fibonacci;
