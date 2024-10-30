/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    const head = list1;
    let nextNode = list1;

    for (let i = 0; i <= b; i++) {

        console.log(nextNode.val);
        if (i < a - 1) {
            list1 = list1.next;
        } else if (i === a) {
            list1.next = list2;
        }
        
        nextNode = nextNode.next;
    }

    while (list2.next) {
        list2 = list2.next;
    } 
    list2.next = nextNode;
    
    return head;
};