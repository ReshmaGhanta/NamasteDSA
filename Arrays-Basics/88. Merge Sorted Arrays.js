//Approach 1: Brute Force
var merge = function(nums1, m, nums2, n) {
    // Step 1: Copy elements of nums2 into nums1 starting at index m
    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i];
    }

    // Step 2: Sort the combined array
    nums1.sort((a, b) => a - b);
};

//Time: O((m + n) log(m + n)) due to the sort step
//Space: O(1) extra (in-place)


//Approach 1: Brute Force
var merge = function(nums1, m, nums2, n) {
    // Step 1: Make a copy of the first m elements of nums1
   const nums1Copy = nums1.slice(0, m);

 // Step 2: Set up two pointers
 let p1 = 0; // pointer for nums1Copy
 let p2 = 0; // pointer for nums2

 // Step 3: Merge into nums1
 for (let i = 0; i < m + n; i++) {
     if (p1 < m && (p2 >= n || nums1Copy[p1] <= nums2[p2])) {
         nums1[i] = nums1Copy[p1];
         p1++;
     } else {
         nums1[i] = nums2[p2];
         p2++;
     }
 }
};

//Time: O((m + n)) 
//Space: O(m) extra space


//Approach 3: without extra space
var merge = function(nums1, m, nums2, n) {
    let p1=m-1;
    let p2=n-1;

    // Sorting in decreasing order from last element
    for (let i = m + n-1; i >=0; i--) {
            if(p2<0) break;

        if(p1>=0 && nums1[p1]> nums2[p2]){
              nums1[i]=nums1[p1];
              p1--;
        }else{
            nums1[i]=nums2[p2];
            p2--;
        }
    }
};
//Time: O((m + n)) 
//Space: O(1) no extra space