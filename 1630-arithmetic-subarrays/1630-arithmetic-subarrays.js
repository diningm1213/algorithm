/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    const answer = [];
    const checkArithmeticSubArray =  (subArray) => {
        const diff = subArray[1] - subArray[0];

        for (let i = 1; i < subArray.length - 1; i++) {
            if (diff !== subArray[i + 1] - subArray[i]) {
                return false;
            }
        }
        return true;
    }

    for (let i = 0; i < l.length; i++) {
        const subArray = nums.slice(l[i], r[i] + 1);
        subArray.sort((a, b) => a - b);
        answer.push(checkArithmeticSubArray(subArray));
    }

    return answer;
};