/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    const arr = [];
    let max = 0;
    let node = head;

    while(node?.val) {
        arr.push(node.val);
        node = node.next;
    }

    for (let i = 0, len = arr.length; i < len / 2; i++) {
        const sum = arr[i] + arr[len - 1 - i];
        if (max < sum) {
            max = sum;
        }
    }

    return max;
};