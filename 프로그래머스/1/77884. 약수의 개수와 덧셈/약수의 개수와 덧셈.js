function solution(left, right) {
    let ans = 0;
    
    while (left <= right) {
        ans += Number.isInteger(Math.sqrt(left)) ? -left : left;
        left++;
    }
    
    return ans;
}