function solution(nums) {
    const set = new Set(nums);
    const len = parseInt(nums.length / 2);
    return set.size > len ? len : set.size;
}