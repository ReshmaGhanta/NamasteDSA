var moveZeroes = function(nums) {
    let x=0;
 // Step 1: Move non-zero elements forward
  for(let i=0;i<nums.length;i++){
         if(nums[i]!==0){
           nums[x]=nums[i];
           x++;
         }
  }
   // Step 2: Fill remaining elements with 0
  for(let i=x;i<nums.length;i++){
           nums[i]=0;
         }
  
};

//Time Complexity: O(n)
//Space Complexity: O(1)