// We can use dynamic Programming when:
// Overlapping SubProblems:
// A program is said to have overlapping subproblems if it can be 
// broken down into subproblems which are reused several times 

// eg. Fibonacci Sequence


// Optimal SubStructure 
// A problem is said to be optimal substructure if an optimal solution
// can be constructed from optimal solutions of its subproblems

function fibonacci(n) {
    if (n === 1 || n === 2) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);

}


// 1 1 2 3 5 8 13

// Big O (2^n) (1.6^n)

// Improve the code 

// Memoization

function fib(n, memo = []) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    let res = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = res;
    return res;
}

// console.log(fib(41))
// console.log(fib(41))


function fib1(n, memo = []) { // undefined,1,1
    if (memo[n] !== undefined) return memo[n]
    if (n <= 2) return 1;

    let res = fib1(n - 1, memo) + fib1(n - 2, memo);
    memo[n] = res;
    return res;
}

console.log(fib1(11));

// Time complexity of memoized solution
// O (N)


