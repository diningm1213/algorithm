/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const lessThanPivot = [];
    const equalToPivot = [];
    const greaterThanPivot = [];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num < pivot) {
            lessThanPivot.push(num);
        } else if (num === pivot) {
            equalToPivot.push(num);
        } else {
            greaterThanPivot.push(num);
        }
    }

    return [...lessThanPivot, ...equalToPivot, ...greaterThanPivot];
};