/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//Approach 2: (Fast and slow pointers)
var middleNode = function(head) {
    let slow=head;
    let fast=head;
    while(fast!=null && fast.next!==null){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow;
};

//  Time Complexity	O(n)
//  Space Complexity O(1)


//Approach 1: (Brute force)
var middleNode = function(head) {
    let size=0;
    let curr=head;
    while(curr!==null){
       size++;
       curr=curr.next;
    }
   let mid=Math.floor(size/2);  
     curr=head;
   for(let i=0;i<mid;i++){
       curr=curr.next;
   }
   return curr;
};

// Time Complexity	O(n)
// Space Complexity	O(1)