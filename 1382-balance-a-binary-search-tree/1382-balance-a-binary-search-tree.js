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
var balanceBST = function(root) {
    const arr = [];
    const traversal = (node) => {
        arr.push(node.val);
        
        node?.left && traversal(node.left);
        node?.right && traversal(node.right);
    }
    traversal(root);

    arr.sort((a, b) => a - b);

    const bbst = (arr) => {
        const length = arr.length;
        if (!length) {
            return null;
        }
        const mid = parseInt(length / 2);
        const node = new TreeNode(
            arr[mid], 
            bbst(arr.slice(0, mid)), 
            bbst(arr.slice(mid + 1, length))
        );
        
        return node;
    }

    const tree = bbst(arr);
    return tree;
};