/*
You are given a 0-indexed array of strings words and a character x.
Return an array of indices representing the words that contain the character x.
Note that the returned array may be in any order.
*/

var findWordsContaining = function(words, x) {
    let indices=[];
     for(let i=0;i<words.length;i++){
         if(words[i].includes(x)){
             indices.push(i)
         }
     }
   return indices;
 };


 //Time complexity: O(n⋅m)  Where n is the number of words and m is the average length of each word, since includes() scans the string.
// Space complexity: O(k) Where k is the number of indices stored in the result array.