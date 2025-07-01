let arr=[5,2,4,8,1,0]
let n=arr.length;

function selectionSort(arr,n){

    for (let i = 0; i < n - 1; i++){
        let min = i;
        for (let j = i+1; j < n ; j++){
            if (arr[j] < arr[min]) {
                [arr[j], arr[min]] = [arr[min],arr[j]]
            }  
        }
    }
    return arr;
}


let result= selectionSort(arr,n);
console.log(result);

// Time Complexity: O(n^2)
// Time Complexity: O(1)