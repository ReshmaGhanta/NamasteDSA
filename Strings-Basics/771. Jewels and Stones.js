/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. 
Each character in stones is a type of stone you have.
You want to know how many of the stones you have are also jewels.
Letters are case sensitive, so "a" is considered a different type of stone from "A".
 */

var numJewelsInStones = function(jewels, stones) {
    let count=0;
       for(let i=0;i<stones.length;i++){
            for(let j=0;j<jewels.length;j++){
                 if(stones[i]===jewels[j]){
                    count++;
                    break;
                 }
            }
       }
    return count;
};

// Time complexity O(S × J). S = number of stones , J = number of jewels
// Space Complexity O(1)

// Approach 2:  (Using built-in method)
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    
    for (let i=0;i<stones.length;i++) {
        if (jewels.includes(stones[i])) count++;
    }
    return count;
};
// Time Complexity: O(S * J) 
// Space Complexity: O(1) 




// Approach 2: Optimized approach (Using Set) 
var numJewelsInStones = function(jewels, stones) {
    let jewelSet = new Set(jewels);
    let count = 0;

    for (let i=0;i<stones.length;i++) {
        if(jewelSet.has(stones[i])) count++;
    }
    return count;
};
// Time Complexity: O(S) 
// Space Complexity: O(1) 