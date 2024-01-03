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
var mergeNodes = function(head) {
    let node = head;
    
    while(true) {
        const nextNode = node.next;
        
        if (nextNode.val) {
            node.val += nextNode.val;
            node.next = nextNode.next            
        } else {
            if (!nextNode.next) {
                node.next = null
                break;
            }
            node = nextNode;
        
        }
    }

    return head;
};