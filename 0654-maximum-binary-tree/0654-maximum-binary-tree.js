/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    let head = new TreeNode();

    const recursive = (arr, node) => {
        const max = Math.max(...arr);
        const maxIndex = arr.indexOf(max);
        node.val = arr[maxIndex];

        const leftArr = arr.slice(0, maxIndex);
        const rightArr = arr.slice(maxIndex + 1, arr.length);

        if (leftArr.length) {
            node.left = new TreeNode();
            recursive(leftArr, node.left);
        }
        if (rightArr.length) {
            node.right = new TreeNode();
            recursive(rightArr, node.right);
        }
    }

    recursive(nums, head);

    return head;
};