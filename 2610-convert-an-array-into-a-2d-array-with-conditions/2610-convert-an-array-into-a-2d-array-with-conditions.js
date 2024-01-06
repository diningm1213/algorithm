/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    const answer = []
    const numMap = new Map();
    nums.forEach(num => {
        numMap.set(num, numMap.has(num) ? numMap.get(num) + 1 : 1);
    });

    for (const [key, value] of numMap.entries()) {
        for (let i = 0; i < value; i++) {
            if (answer[i]) {
                answer[i].push(key);
            } else {
                answer[i] = [key]
            }
        }
    }
  
    return answer;
};