let arr=[5,2,4,8,1,0]
let n=arr.length;

function bubbleSort(arr,n){

    for(let i=0;i<n-1;i++){
        let isSwapped = false;
        for (let j = 0; j < n - 1 - i; j++){
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1],arr[j]]
                isSwapped=true
            }  
        }
        if (!isSwapped) break;
    }
    return arr;
}


let result= bubbleSort(arr,n);
console.log(result);

// Time Complexity: O(n^2)
// Time Complexity: O(1)