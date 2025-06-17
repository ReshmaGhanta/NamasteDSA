function countDigits(n) {
    if(n==0) return 1;  // corner case where n is 0

    n=Math.abs(n);  // to handle negative numbers. converts it to positive number

    let count = 0;
  while (n > 0) {
      n = Math.floor(n / 10);
      count++;
   }
    return count;
}

let num = 259;

let result = countDigits(num);
console.log(result)