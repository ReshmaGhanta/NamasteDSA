/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let x=0;
    for (let i = 0; i < nums.length; i++) {
           if(nums[i] !== val){    // shift only when value is not equal       
              nums[x]=nums[i]; // shift elements to left, since not equal to val
              x++;
           }
     }
    return x;
};

//Time Complexity	O(n)
//Space Complexity	O(1)