//Approach 1: XOR operations

/* 
    a ^ a = 0 (any number XORed with itself is 0)
    a ^ 0 = a (any number XORed with 0 is itself)
    XOR is commutative and associative, so order doesn't matter
*/
var singleNumber = function(nums) {
    let single=0;
    for(let i=0;i<nums.length;i++){
         single=single^nums[i]
    }
    return single;
};

//Time Complexity: O(n)
//Space Complexity: O(1)



//Approach 1: Using hash
var singleNumber = function(nums) {
    let hash={};
    for(let i=0;i<nums.length;i++){
        if(!hash[nums[i]]){
            hash[nums[i]]=1;
        }else{
            hash[nums[i]]++;
        }
    }
    for(let i=0;i<nums.length;i++){
        if(hash[nums[i]]==1){
            return nums[i];
        }
   }
};

//Time Complexity: O(n)
//Space Complexity: O(n)