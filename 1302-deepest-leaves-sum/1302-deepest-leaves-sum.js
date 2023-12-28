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
var deepestLeavesSum = function(root) {
    let depth = 0;
    let answer = 0;
    const dfs = (node, curDepth) => {
        if (!node) {
            return;
        }
        
        if (node.left === null && node.right === null) {
            const val = node.val;
            if (depth < curDepth) {
                depth = curDepth;
                answer = val;
            } else if (depth === curDepth) {
                answer += val;
            }
        } else {
            if (node.left) {
                dfs(node.left, curDepth + 1);
            }
            if (node.right) {
                dfs(node.right, curDepth + 1);
            }
        }
    }

    dfs(root, 0);

    return answer;
};