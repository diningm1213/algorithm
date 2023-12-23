/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
}

var insertGreatestCommonDivisors = function(head) {
    let node = head;
    
    while(node.next) {
        const nextNode = node.next;
        const gcdVal = gcd(node.val, nextNode.val);
        node.next = new ListNode(gcdVal, nextNode);
        node = nextNode;
    }

    return head;
};

