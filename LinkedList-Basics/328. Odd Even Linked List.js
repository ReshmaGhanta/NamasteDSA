/*
    Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
    The first node is considered odd, and the second node is even, and so on.
    Note that the relative order inside both the even and odd groups should remain as it was in the input.
    You must solve the problem in O(1) extra space complexity and O(n) time complexity.
*/
var oddEvenList = function(head) {
    if(!head || !head.next) return head;

     let odd=head;
     let even=head.next;
     let evenHead=even;

     while(odd.next && even.next){
            odd.next=odd.next.next;
            even.next=even.next.next;

            odd=odd.next;
            even=even.next;
     }

      odd.next=evenHead;

    return head;
};

// Time Complexity	O(n)
// Space Complexity	O(1)