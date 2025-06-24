function isPalindrome(n) {
    if (n < 0) return false;
    let copy = n;
    let rev = 0;

  while (n > 0) {
      let rem = n % 10;
      rev = rev * 10 + rem;
      n = Math.floor(n / 10);
   }
    return rev===copy;
}

let num = 25952;

let result = isPalindrome(num);
console.log(result)