//Approach 1: Using XOR operations
var missingNumber = function(nums) {
    let distinct=0;
    for(let i=0;i<nums.length;i++){
        distinct^=nums[i];  // XOR all values in array
    }
    for(let i=0;i<=nums.length;i++){
        distinct^=i;    // XOR all indices including n
    }
    return distinct;
};

//Time Complexity: O(n) — one pass through the array
//Space Complexity: O(1) — constant space, no extra data structures

//Approach 2: Using Math calculations
var missingNumber = function(nums) {
    let totalLen=nums.length;
    let sum= (totalLen*(totalLen+1))/2;
    let arrSum=0;
    for(let i=0;i<nums.length;i++){
          arrSum=arrSum+nums[i]
    }
   return sum-arrSum;
};
//Time Complexity: O(n) — one pass through the array
//Space Complexity: O(1) — constant space, no extra data structures

/*
Sum Formula Approach 
Pros:
    ** Simple and readable
    ** Easy to debug and understand for most people
    ** Great for interviews if the focus is on clarity

Cons:
    **  Can suffer from integer overflow in languages with fixed integer sizes (e.g., Java, C++)
    ** Not an issue in JavaScript, since numbers are 64-bit floating-point

✅ XOR Approach
Pros:
    ** Immune to integer overflow — works regardless of number size
    ** Elegant bitwise trick — shows deeper understanding of bitwise operations

Cons:
    ** Slightly less readable for beginners
    ** Harder to explain during an interview unless you're comfortable with XOR properties

Final Notes:
    ** Use sum formula if you want clarity, XOR if asked to do it without arithmetic.
    ** In performance-critical systems: XOR is safer due to no overflow risk.
*/