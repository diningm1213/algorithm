/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const permutations = [];
    const len = nums.length;

    const traversal = (permutation, remainNums) => {
        if (permutation.length === len) {
            permutations.push(permutation);
        }

        for (let i = 0; i < remainNums.length; i++) {
            const num = remainNums[i];
            traversal([...permutation, num], [...remainNums.slice(0, i), ...remainNums.slice(i + 1)]);
        }
    }

    traversal([], nums);

    return permutations;
};