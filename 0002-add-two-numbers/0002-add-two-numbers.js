/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let ans = null;
    let head = null;
    let hasRoundNumber = false;

    while (l1?.val !== undefined || l2?.val !== undefined) {
        let newVal = (l1?.val || 0) + (l2?.val || 0);
        hasRoundNumber && newVal++;
        hasRoundNumber = newVal >= 10;
        const newNode = new ListNode(newVal % 10);

        if (!ans) {
            head = newNode
            ans = head;
        } else {
            head.next = newNode;
            head = head.next;
        }
        
        l1 = l1?.next;
        l2 = l2?.next;
    }

    if (hasRoundNumber) {
        head.next = new ListNode(1);
    }

    return ans;
};