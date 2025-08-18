
var maxFreqSum = function(s) {
    let vowelFreq=0;
    let consonantFreq=0;

let myMap = new Map();

     for(let i=0;i<s.length;i++){
         if(myMap.has(s[i])){
            let count=myMap.get(s[i]);
            myMap.set(s[i],count+1)
         }else{
             myMap.set(s[i],1)
         }
     }
 

let vowels = new Set(['a', 'e', 'i', 'o', 'u']);


for (let [char, freq] of myMap) {
    if (vowels.has(char)) {
      vowelFreq = Math.max(vowelFreq, freq);
    } else {
      consonantFreq = Math.max(consonantFreq, freq);
    }
  }

    return vowelFreq+consonantFreq;
};
// Time Complexity: O(n)
// Space Complexity: O(n)




// Brute Force
var maxFreqSum = function(s) {
    let vowelFreq=0;
    let consonantFreq=0;

let myMap = new Map();

     for(let i=0;i<s.length;i++){
         if(myMap.has(s[i])){
            let count=myMap.get(s[i]);
            myMap.set(s[i],count+1)
         }else{
             myMap.set(s[i],1)
         }
     }


let vowels = ['a', 'e', 'i', 'o', 'u'];
let consonants = [];

for (let [char] of myMap) {
  if (!vowels.includes(char)) {
    consonants.push(char);
  }
}

for (let j=0;j<vowels.length;j++) {
  if (myMap.has(vowels[j])) {
     vowelFreq=Math.max(vowelFreq,myMap.get(vowels[j]))
  }
}

for (let j=0;j<consonants.length;j++) {
  if (myMap.has(consonants[j])) {
     consonantFreq=Math.max(consonantFreq,myMap.get(consonants[j]))
  }
}
     

    return vowelFreq+consonantFreq;
};

// Time Complexity: O(n)
// Space Complexity: O(n)