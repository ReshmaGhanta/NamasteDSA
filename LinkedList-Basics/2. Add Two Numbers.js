/* 
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

var addTwoNumbers = function(l1, l2) {
    let carry=0;
  
    let dummy= new ListNode(0);
    let dummyHead=dummy;

    while( l1|| l2 || carry ){
       let val1 = 0;
       let val2 = 0;

           if (l1) {
               val1 = l1.val;
           }

           if (l2) {
                   val2 = l2.val;
           }
       
      // let sum= (!l1 ? 0: l1.val) + (!l2 ? 0:l2.val) + carry;

      let sum = val1 + val2 + carry;
         carry= Math.floor(sum/10);
       let digit= sum%10;

         let newNode= new ListNode(digit);
          dummy.next=newNode;
          dummy = dummy.next;
         
         if (l1) {
               l1 = l1.next;
           }

         if (l2) {
               l2 = l2.next;
           }
    }

 return dummyHead.next;
};

// Time Complexity	O(n)
// Space Complexity	O(1)