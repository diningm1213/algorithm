/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const lessThanPivot = [];
    const greaterThanPivot = [];
    let equalCount = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num < pivot) {
            lessThanPivot.push(num);
        } else if (num > pivot) {
            greaterThanPivot.push(num);
        } else {
            equalCount++;
        }
    }

    return [...lessThanPivot, ...Array(equalCount).fill(pivot), ...greaterThanPivot];
};