/**
 * @param {ListNode} head
 * @return {boolean}
 */
// Approach 2: Using fast slow pointers (Floyd's cycle finding algorithm)
var hasCycle = function(head) {
    let slow=head;
    let fast=head;   
    while(fast !== null && fast.next !== null){
        slow=slow.next;
        fast=fast.next.next;
         if (slow === fast) {
            return true;    // cycle detected
        }
    }
    return false;
};


// Time Complexity	O(n)
// Space Complexity	O(1)


// Approach 1: Using Set
var hasCycle = function(head) {
    let set = new Set();
    let curr=head;
    while(curr!==null){
        if(set.has(curr)){
            return true;
        }
        set.add(curr);
        curr=curr.next;
    }
    return false;
};

// Time Complexity	O(n)
// Space Complexity	O(n)