/* You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. 
The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
*/
var mergeTwoLists = function(l1, l2) {
    let start= new ListNode();
     let curr=start;

     while(l1 && l2){
         if(l1.val<l2.val){
             curr.next=l1;
             l1=l1.next;
         }else{
             curr.next=l2;
             l2=l2.next;
         }
         curr=curr.next;
     }

        if(!l1){
            curr.next=l2;
        }
        if(!l2){
            curr.next=l1;
        }
     return start.next;
};

//Time Complexity: O(m + n)
//Space Complexity: O(1) (in-place)