/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    const list = [];
    const traversal = (node) => {
        if (!node) {
            return;
        }
        node?.left && traversal(node.left);
        list.push(node.val);
        node?.right && traversal(node.right);
    }

    traversal(root1);
    traversal(root2);
    
    return list.sort((a, b) => a - b);
};