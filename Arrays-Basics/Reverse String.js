/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let right=s.length-1;
    for(let left=0;left<Math.floor(s.length/2);left++){ // Can only check through half way
            [s[left], s[right]] = [s[right], s[left]]; //Js destructuring assignment
            right--;
    }
};

//Time Complexity	O(n)
//Space Complexity	O(1)