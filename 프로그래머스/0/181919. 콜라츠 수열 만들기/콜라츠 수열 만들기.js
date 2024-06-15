function solution(n) {
    const ans = [n];
    
    while (n !== 1) {
        n = n % 2 === 0 ? n / 2 : 3 * n + 1
        ans.push(n);    
    }
    
    return ans;
}