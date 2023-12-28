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
    let maxDepth = 0;
    const leaves = [];
    const recursive = (depth, node) => {
        if (!node || !node?.val) {
            return;
        }
        if (node?.left?.val === undefined && node?.right?.val === undefined) {
            if (maxDepth < depth) {
                maxDepth = depth;
            }
            leaves.push([depth, node.val])
        }

        recursive(depth + 1, node?.left);
        recursive(depth + 1, node?.right);
    }

    recursive(0, root);

    return leaves.filter(leave => leave[0] === maxDepth).reduce((acc, cur) => acc + cur[1], 0);
};