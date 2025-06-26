let arr=[5,3,2,8,9,0]

function sum(n){
    if(n==0) return arr[0];
    return arr[n]+sum(n-1);
}

console.log(sum(arr.length-1));
// Time Complexity : O(n)
// Space Complexity : O(n) Because each recursive call is added to the call stack, and nothing is tail-optimized in JavaScript.