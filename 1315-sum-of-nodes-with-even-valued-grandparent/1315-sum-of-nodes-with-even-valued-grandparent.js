/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumEvenGrandparent = function(root) {
    let answer = 0;
    const recursive = (node, parent, grandParent) => {
        if (grandParent?.val % 2 === 0) {
            answer += node.val;
        }
        node?.left && recursive(node.left, node, parent);
        node?.right && recursive(node.right, node, parent);
    }

    recursive(root, null, null);

    return answer;
};