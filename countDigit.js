function countDigits(n) {
    let count = 0;
    let arr = n.toString().split("").map(Number);

    for (let i = 0; i < arr.length; i++){
          count=count+arr[i]
    }

    return count;
}

let num = 25;

let result = countDigits(num);
console.log(result)