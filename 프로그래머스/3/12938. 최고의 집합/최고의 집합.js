function solution(n, s) {
    if (s < n) {
        return [-1];
    }
    
    const ans = [];
    
    for (;n > 0; n--) {
        const average = Math.floor(s / n);
        ans.push(average);
        s -= average;
    }
    
    return ans;
}