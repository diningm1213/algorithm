/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    const set = new Set();

    for (let i = 0, len = nums.length; i < len; i++) {
        const num = nums[i];
        set.add(num);
        set.add(parseInt(String(num).split('').reverse().join('')));
    }

    return set.size;
};