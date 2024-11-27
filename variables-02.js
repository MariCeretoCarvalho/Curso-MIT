//const currentYear = 2024;
//console.log('current year result: ', currentYear);
//module.exports = { currentYear };

function fibonacci_slow(n) {
    // Base case: If n is 0 or 1, return n itself.
    if (n === 0 || n === 1)
        return n;
 
    // Recursive case: Calculate fibonacci(n-1) and fibonacci(n-2) and add them.
    else {
        let result = fibonacci_slow(n - 1) + fibonacci_slow(n - 2);
        return result;
    }
}


let memo = {};
function fibonacci(n) {
    if (n in memo) {
        return memo[n];
    }
    // Base case: If n is 0 or 1, return n itself.
    if (n === 0 || n === 1)
        return n;
 
    // Recursive case: Calculate fibonacci(n-1) and fibonacci(n-2) and add them.
    else {
        let result = fibonacci(n - 1) + fibonacci(n - 2);
        memo[n] = result;
        return result;
    }
}
 
const n = 6;
const result = fibonacci(6);
console.log(`The ${n}-th fibonacci number is ${result}`);
// The 6-th fibonacci number is 8

