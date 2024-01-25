/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    const len = nums.length;
    let max = 0;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < len / 2; i++) {
        const last = len - 1;
        const sum = nums[i] + nums[last - i];
        if (max < sum) {
            max = sum;
        }
    }

    return max;
};