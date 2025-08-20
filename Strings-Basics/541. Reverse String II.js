var reverseStr = function(s, k) {
    s=s.split(""); // Strings are immutable in js, so you should first convert it to array.
    
    for(let i=0; i<s.length; i= i + (2*k)){
          // reverse first k elements starting from i
          let mid=Math.floor(k/2);
          for(let j=0; j<mid;j++){
             //swap values
             [s[i+j],s[i+k-1-j]]=[s[i+k-1-j],s[i+j]] // maintaining pointers is very important
          }
    }
    
   return s.join("");
};

// Time Complexity : O(n)
// Space Complexity : O(n) -- because creating an array