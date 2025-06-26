
function sum(n){
    if(n==1) return 1;
    return n+sum(n-1);
}

console.log(sum(5));

// Time Complexity : O(n)
// Space Complexity : O(n) Because each recursive call is added to the call stack, and nothing is tail-optimized in JavaScript.