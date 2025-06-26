/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 0) return false;       // base case: negative or zero
    if (n === 1) return true;       // base case: 2^0 = 1
    if (n % 2 !== 0) return false;  // odd numbers can't be power of 2

    return isPowerOfTwo(n / 2);     // recursive step 
};

//Time Complexity: O(log n) — because you're dividing n by 2 each time.
//Space Complexity: O(log n) — due to call stack depth.