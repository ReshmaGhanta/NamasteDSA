/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n==1) return 1;
    if(n==0) return 0;
    return fib(n-1)+fib(n-2);
};


//Time Complexity: O(2^n) — because each call branches into two more.
//Space Complexity: O(n) — due to call stack depth.