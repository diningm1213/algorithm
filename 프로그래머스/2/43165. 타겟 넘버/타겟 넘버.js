function solution(numbers, target) {
    let ans = 0;
    
    const traversal = (sum, depth) => {
        if (depth === numbers.length) {
            if (sum === target) {
                ans++;
            }
            return;
        }
        
        traversal(sum + numbers[depth], depth + 1);
        traversal(sum - numbers[depth], depth + 1);
    }
    
    traversal(0, 0);
    
    return ans;
}