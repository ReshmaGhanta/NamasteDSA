let arr=[5,2,4,8,1,0]
let n=arr.length;

function insertionSort(arr,n){
    for (let i = 1; i < n ; i++){
        let curr=arr[i];
        let prev= i-1;
        while(arr[prev]>curr && prev>=0){
            arr[prev+1]=arr[prev];
            prev--;
        }
        arr[prev+1]=curr;
    }
    return arr;
}


let result= insertionSort(arr,n);
console.log(result);

// Time Complexity: O(n^2)
// Time Complexity: O(1)