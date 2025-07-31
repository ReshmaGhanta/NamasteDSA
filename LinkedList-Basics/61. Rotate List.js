/* 
Given the head of a linked list, rotate the list to the right by k places.
*/

var rotateRight = function(head, k) {
    if(!head || !head.next) return head;
    
   let curr=head;
   let length=0;
   
   // Calculating Length of LL
   while(curr){
       length++;
       curr=curr.next;
   }

   let first=head;
   let second=head;
   
   k=k%length; // to avoid unnecesary rotations

   // Move first pointer to k steps ahead.
    for(let i=0;i<k;i++){
           first= first.next;
       }  
 
  // Move both pointers one step at a time, till first pointer reaches end of List
  while(first && first.next){
       second=second.next;
       first=first.next;
  } 

    // Connect first node to head
     first.next=head;
     
     // Now save the new head
     let newHead= second.next;

     // Now point the second node to null to avoid cycles.
     second.next= null;

   return newHead;
};

// Time Complexity	O(n)
// Space Complexity	O(1)