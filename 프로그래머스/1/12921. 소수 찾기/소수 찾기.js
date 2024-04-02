function solution(n) {
    const memo = Array(n + 1).fill(false);
    memo[0] = true;
    memo[1] = true;
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        for (let j = i + i; j <= n; j += i) {
            memo[j] = true;
        }
    }
    
    console.log(memo);
    
    return memo.filter(v => !v).length
}