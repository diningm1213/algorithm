function solution(n, k) {
    let ans = 0;
    n.toString(k).split('0').map(v => +v).forEach(v => {
        if (v < 2) {
            return;
        }
        for (let i = 2; i <= Math.sqrt(v); i++) {
            if (v % i === 0) {
                return;
            }
        }
        ans++;
    });
    
    return ans;
}