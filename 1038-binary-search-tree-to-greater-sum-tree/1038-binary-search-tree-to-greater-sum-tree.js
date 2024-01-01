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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    let sum = 0;
    const dfs = (node) => {
        if (node?.val === undefined) {
            return null;
        }
        if (!node?.right && !node?.left) {
            sum += node.val;
            node.val = sum;
            return node.val;
        }
        const rightVal = dfs(node?.right)
        sum += node.val;
        node.val = sum;
        dfs(node?.left);
    }
    dfs(root);

    return root;
};