/* 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and 
removing all non-alphanumeric characters, it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/
var isPalindrome = function(s) {
    s= s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
   
    // built-in functions
    // let rev=s.split("").reverse().join(""); 

    let left=0;
    let right=s.length-1;
  
   while(left<right){
         if(s[left]===s[right]){
             left++;
             right--;
         }else{
            return false;
         }
    }

  // return s===rev;
  return true;
};

// Time Complexity : O(n)
// Space Complexity : O(n) Regex + lowercase create new strings 

// Approach 2: Optimized

var isPalindrome = function(s) {
    s=s.toLowerCase();

    let left=0;
    let right=s.length-1;
  
   while(left<right){  
       if(!s[left].match(/[a-z0-9]/i)){
           left++;
       }else if(!s[right].match(/[a-z0-9]/i)){
            right--;
       }else if(s[left]===s[right]){
             left++;
             right--;
        }else{
            return false;
         } 
       
    }

  return true;
};

// Time Complexity : O(n)
// Space Complexity : O(1) 
