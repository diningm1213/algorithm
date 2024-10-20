/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
    const map = new Map();
    const len = nums.length;
    const checked = Array(len).fill(false);

    const recursion = (depth, checked) => {
        if (depth === len) {
            const subset = nums.filter((n, i) => checked[i]);
            const bitwiseOR = subset.reduce((acc, cur) => acc | cur, 0);
            map.set(bitwiseOR, (map.get(bitwiseOR) || 0) + 1);
            return;
        }
        
        recursion(depth + 1, [...checked]);
        checked[depth] = true;
        recursion(depth + 1, [...checked]);
    }    
    
    recursion(0, checked);

    return [...map.entries()].sort((a, b) => b[0] - a[0])[0][1];
};