/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let ans = 0;
    const numsBitwise = nums.reduce((acc, cur) => acc ^ cur, 0).toString(2).split('');
    const kBitwise = k.toString(2).split('');
    
    while (numsBitwise.length || kBitwise.length) {
        const lastNumsBitwise = numsBitwise.pop() || '0';
        const lastkBitwise = kBitwise.pop() || '0';

        if (lastNumsBitwise !== lastkBitwise) {
            ans++;
        }
    }

    return ans;
};