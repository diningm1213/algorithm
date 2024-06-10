function solution(n) {
    let ans = [];
    let sqrt = Math.sqrt(n);
    
    for (let i = 1; i < sqrt; i++) {
        if (n % i === 0) {
            ans.push(i);
            ans.push(n / i);        
        }
    }
    
    if (n % sqrt === 0) {
        ans.push(sqrt);
    }
    
    return ans.sort((a, b) => a - b);
}