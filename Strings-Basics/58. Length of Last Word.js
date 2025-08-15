/* 
Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.
*/

// Using default JS functions (not recommended for interviews)
var lengthOfLastWord = function(s) {
    s=s.trim().split(" ")
    return s[s.length-1].length;
};
// Time Complexity: O(n)
// Space Complexity: O(n)

/* 
1. Start from end of string
2. Ignore any spaces at end.
3. Start counting when you see a character and stop when you see space again.
4. Return count
*/

var lengthOfLastWord = function(s) {
    let count=0;
    let i=s.length-1;
      
      // Step 1: Skip trailing spaces
      while(i>=0){
            if(s[i]===" "){
                i--;
            }else{
                break;
            }   
        }
  // Step 2: Count characters in the last word till you reach space.
     while(i>=0 ){
        if(s[i]!==" "){
            i--;
            count++;
        }else{
            break;
        }
    }
    return count;
  };

  // Time Complexity: O(n)
  // Space Complexity: O(1)

  // Approach 3: Using single loop
  /* 
1. Start from end of string
3. Start counting when you see a character.
4. Break the loop if s[n]==" " meaning you found a space and count>0 means last word is already counted.
4. Return count
  */
  var lengthOfLastWord = function(s) {
    let count=0;
    let n=s.length-1;
       
       while(n>=0){
             if(s[n]!==" "){   
                 count++;
             }
           if(s[n]===" "&& count>0){
               break;
           }
           n--;
       }
 
     return count;
 };

 // Time Complexity: O(n)
  // Space Complexity: O(1)