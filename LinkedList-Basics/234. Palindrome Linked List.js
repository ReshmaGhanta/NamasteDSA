/**
 * @param {ListNode} head
 * @return {boolean}
 */
// Approach 2: Optimal way
/*
*  First find the middle node of the linkedlist
*  Reverse the second half of the linkedlist
*  Compare the firstHalf of the list and reversed secondhalf of list
*  While comparing, compare the values inside the node not the acutal nodes(object references)
*/
var isPalindrome = function(head) {

    //Find the  middle node
        let slow=head;
        let fast=head;
        while(fast!==null && fast.next!==null){
            slow=slow.next;
            fast=fast.next.next;
        }
    
    // Reverse the second half of the list
        let prev=null;
        let curr=slow;
         while(curr!=null){
            let temp=curr.next;
            curr.next=prev;
            prev=curr;
            curr=temp;
         }
    
    // Check for palindrome
          let firstList=head;
          let secondList=prev;
           
           while(secondList!==null){
                if(firstList.val!=secondList.val){
                    return false;
                }
                firstList=firstList.next;
                secondList=secondList.next;
           }
    
        return true;
    };
    
// Time Complexity	O(n)
// Space Complexity	O(1)

/***************************************************************************************************/

// Approach 1: Brute force
/* 
* Convert LL to array
* Check if array is palindrome
*/
var isPalindrome = function(head) {
    let curr=head;
    let arr=[];
    while(curr!==null){
        arr.push(curr.val);
        curr=curr.next;
    }
    let left=0;
    let right=arr.length-1;
    while(left<=arr.length/2){
        if(arr[left]==arr[right]){
             left++;
             right--;
        }else{
            return false;
        }
    }
    return true;
};
// Time Complexity: O(n)
// Space Complexity: O(n)