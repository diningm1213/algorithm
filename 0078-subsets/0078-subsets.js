/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const answer = [];
    const len = nums.length;

    const traversal = (arr, remainNums, depth) => {
        if (depth === len) {
            answer.push(arr);
            return;
        }
        
        const num = remainNums.splice(0, 1);
        traversal([...arr], [...remainNums], depth + 1);
        traversal([...arr, num], [...remainNums], depth + 1);
    } 

    traversal([], nums, 0);

    return answer;
};