var balancedStringSplit = function(s) {
    let count=0;
     let LCount=0;
    for(let i=0;i<s.length;i++){
        if(s[i]==='L'){
            LCount++;
        }else{
            LCount--;
        }

        if(LCount==0){
            count++;
        }      
    }
    return count;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
