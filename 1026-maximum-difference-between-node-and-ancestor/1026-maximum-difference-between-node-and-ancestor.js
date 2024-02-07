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
var maxAncestorDiff = function(root) {
    let max = 0;

    const traversal = (ancestors, node) => {
        const val = node.val;

        ancestors.forEach(ancestor => {
            const gap = Math.abs(ancestor - val);
            if (max < gap)
                max = gap;
        });

        node?.left && traversal([...ancestors, val], node.left);
        node?.right && traversal([...ancestors, val], node.right);
    }

    traversal([], root);

    return max;
};