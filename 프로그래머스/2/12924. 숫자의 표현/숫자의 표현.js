function solution(n) {
    let count = 0;
    let left = 1, right = 1;
    
    while (left <= right) {
        const sum = (right + left) * (right - left + 1) / 2;
        if (sum === n) {
            count++;
            left++;
        } else if (sum < n) {
            right++;
        } else {
            left++;   
        }
    }
    
    return count;
}