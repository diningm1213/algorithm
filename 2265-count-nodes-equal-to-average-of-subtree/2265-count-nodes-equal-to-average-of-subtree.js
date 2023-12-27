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
var averageOfSubtree = function(root) {
    let answer = 0;
    const recursive = (node) => {
        if (!node) {
            return [0, 0];
        }
        if  (node?.left?.val === undefined && 
            node?.right?.val === undefined) {
            answer++;
            return [node.val, 1];
        }
        const [leftVal, leftCount] = recursive(node?.left);
        const [rightVal, rightCount] = recursive(node?.right);

        const totalVal = leftVal + rightVal + node.val;
        const totalCount = leftCount + rightCount + 1;
        if (Math.floor(totalVal / totalCount) === node.val) {
            answer++;
        }
        return [totalVal, totalCount];
    }
    recursive(root);

    return answer;
};