/* 
    Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
*/
// Iterative Approach
var swapPairs = function(head) {
    if(!head || !head.next) return head;
    
    let dummy = new ListNode();
    dummy.next=head;

    let prev=dummy;
    let curr=head;
    let nextEle=head.next;

    while(curr && nextEle){
            prev.next=nextEle;
            curr.next= nextEle.next;
            nextEle.next= curr;

            prev=curr;
            curr=prev.next;
            nextEle= curr && curr.next;
    }

    return dummy.next;
};

// Time Complexity	O(n)
// Space Complexity	O(1)


// Recursive Approach
var swapPairs = function(head) {
    if(!head || !head.next) return head;

    let left=head;
    let right= head.next;

    left.next=swapPairs(right.next)
    right.next=left;
    
    return right;
}