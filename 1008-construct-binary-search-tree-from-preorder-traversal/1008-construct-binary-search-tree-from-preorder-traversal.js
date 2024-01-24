/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
    let root = new TreeNode(preorder.shift());

    const traversal = (node, arr) => {
        if (arr.length === 0) {
            return;
        }

        const leftArr = [];
        const rightArr = [];

        arr.forEach(n => {
            if (n < node.val) {
                leftArr.push(n);
            } else {
                rightArr.push(n);
            }
        });

        if (leftArr.length) {
            node.left = new TreeNode(leftArr.shift());
            traversal(node.left, leftArr);
        }

        if (rightArr.length) {
            node.right = new TreeNode(rightArr.shift());
            traversal(node.right, rightArr);
        }
    }

    traversal(root, preorder);

    return root;
};