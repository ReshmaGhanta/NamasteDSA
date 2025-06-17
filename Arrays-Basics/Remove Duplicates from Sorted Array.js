/*
 * Things to consider
   Non-decrreasing order --> always have duplicates
   Have a loop to iterate through array.
   Have a pointer to hold the position of unique element.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let x=0; // pointer to hold unique element position
  for(let i=0;i<nums.length;i++){
      if(nums[i]>nums[x]){ 
// since its a non-decreasing array, while iterating check if nums[i] is greater than current unique element nums[x]
          x=x+1;
        nums[x]=nums[i];
      }
  }
  return (x+1);
};


