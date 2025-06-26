function factorial(n) {
    if (n == 1) return 1;

    return n * factorial(n - 1);
};


console.log(factorial(5))

// Time Complexity : O(n)
// Space Complexity : O(n) Because each recursive call is added to the call stack, and nothing is tail-optimized in JavaScript.