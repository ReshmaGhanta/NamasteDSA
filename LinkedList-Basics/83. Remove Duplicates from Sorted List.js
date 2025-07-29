
/* Given the head of a sorted linked list, 
delete all duplicates such that each element appears only once. 
Return the linked list sorted as well.
*/

var deleteDuplicates = function(head) {
    let curr=head;
    while(curr && curr.next){
        if(curr.val===curr.next.val){
             // Remove (Skip) the duplicate node
            curr.next=curr.next.next;
        }else{
            // Move (forward)to the next node
            curr=curr.next;
        }  
    }
   return head;
};

// Time Complexity	O(n)
// Space Complexity	O(1)