/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let set= new Set();
    while(headA!=null){
        set.add(headA)
        headA=headA.next;
    }
    while(headB!=null){
        if(set.has(headB)) {
            return headB;
        }
        headB=headB.next;
    }
    return null;
};

// Time Complexity: O(n)
// Space Complexity: O(n)