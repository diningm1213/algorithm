function solution(l, r) {
    const LEN = 6;
    const numSet = new Set();
    const nums = Array(LEN).fill(0);
    
    const recursion = (nums, depth) => {
        if (depth === LEN) {
            const n = +nums.join('')
            if (n >= l && n <= r) {
                numSet.add(n);   
            }
            return;
        }
        
        recursion([...nums], depth + 1);
        const newNums = [...nums];
        newNums[depth] = '5';
        recursion([...newNums], depth + 1);
    }
    
    recursion(nums, 0);
    
    return numSet.size ? [...numSet] : [-1];
}