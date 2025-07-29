/*
    Given the head of a linked list, 
    remove the nth node from the end of the list and return its head.
*/
// Two pass solution
var removeNthFromEnd = function(head, n) {
    // First find length of LL
    let length = 0;
    let first = head;
    while (first) {
        length++;
        first = first.next;
    }
    // To keep track of previous create a sentinel node
    let sentinel = new ListNode();
        sentinel.next=head;
    let prev = sentinel;

    //Iterate through LL till the desired element (you want to remove)
    for (let i = 0; i < length - n; i++) {
        prev = prev.next;
    }
    prev.next = prev.next.next; // Remove the element
    return sentinel.next; // Return new head
};

// Time Complexity	O(n)
// Space Complexity	O(1)

// One pass Solution:
var removeNthFromEnd = function(head, n) {
    // To keep track of previous create a sentinel node
    let sentinel = new ListNode();
        sentinel.next=head;
   
   // Move first pointer ahead by n
    let first = sentinel;
        for (let i = 0; i < n; i++) {
            first = first.next;
        }

        let second=sentinel;
    //Move both pointers one step at a time till first pointer reaches end of LL
    while(first && first.next) {
        first = first.next;
        second=second.next;
    }
    second.next = second.next.next; // Remove the element
    return sentinel.next; // Return new head
};


// Time Complexity	O(n)
// Space Complexity	O(1)