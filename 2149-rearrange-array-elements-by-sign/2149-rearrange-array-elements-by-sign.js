/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const answer = [];
    let positiveIndex = 0;
    let negativeIndex = 1;
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num < 0) {
            answer[negativeIndex] = num;
            negativeIndex += 2;
        } else {
            answer[positiveIndex] = num;
            positiveIndex += 2;
        }
    }

    return answer;
};