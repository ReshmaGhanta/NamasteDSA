// Approach 1: 
var findMaxConsecutiveOnes = function(nums) {
    let countArr = [];
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
        } else {
            countArr.push(count);
            count = 0;
        }
    }
    countArr.push(count);
    return Math.max(...countArr);
};

// Time Complexity: O(n) — You traverse the array once and use Math.max(...countArr) which is also O(n) in worst-case.
// Space Complexity: O(n) — Worst case, all are 1s so every element results in a count being stored in countArr.

// Approach 2: Optimized
var findMaxConsecutiveOnes = function(nums) {
    let count = 0, maxCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
            maxCount = Math.max(maxCount, count);
        } else {
            count = 0;
        }
    }
    return maxCount;
};

//Time Complexity: O(n)

//Space Complexity: O(1) — No extra space except two variables.