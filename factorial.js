function factorial(num){
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
// example
// console.log(factorial(7));

console.log(factorial(0) === 1);
console.log(factorial(1) === 1);
console.log(factorial(2) === 2);
console.log(factorial(4) === 24);
console.log(factorial(8) === 40320);
console.log(factorial(18) === 6402373705728000);
console.log(factorial(20) === 2432902008176640000);

