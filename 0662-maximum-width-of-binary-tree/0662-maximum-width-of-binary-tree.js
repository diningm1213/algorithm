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
var widthOfBinaryTree = function(root) {
    const width = [[0n, 0n]];

    const recursive = (node, index, depth) => {
        console.log(node.val, index, depth)
        if (!width[depth]) {
            width[depth] = [index, index];
        } else {
            width[depth][0] = width[depth][0] < index ? width[depth][0] : index;
            width[depth][1] = width[depth][1] > index ? width[depth][1] : index;
        }
        
        node?.left && recursive(node.left, BigInt(index) * 2n, depth + 1);
        node?.right && recursive(node.right, BigInt(index) * 2n + 1n, depth + 1);
    }

    recursive(root, 0n, 0);

    return Number(width.map(v => v[1] - v[0] + 1n).reduce((acc, cur) => acc > cur ? acc : cur, 0));
};