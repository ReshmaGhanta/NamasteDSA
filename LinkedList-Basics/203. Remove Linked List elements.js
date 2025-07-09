/* Given the head of a linked list and an integer val, 
remove all the nodes of the linked list that has Node.val == val,
 and return the new head. */

 /**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let sentinel= new ListNode(0);
        sentinel.next = head;
    
      let prev=sentinel;
      while(prev!=null && prev.next!==null){
           if(prev.next.val===val){
                prev.next=prev.next.next;
           }else{
               prev=prev.next;
           }
      }
    return sentinel.next;
}

// Time Complexity	O(n)
// Space Complexity	O(1)