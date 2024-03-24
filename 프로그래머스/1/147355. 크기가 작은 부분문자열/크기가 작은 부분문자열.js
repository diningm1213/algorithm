function solution(t, p) {
    let ans = 0;
    let pLen = p.length
    
    for (let i = 0; i <= t.length - pLen; i++) {
        if (t.substring(i, i + pLen) <= p) {
            ans++;
        }
    }
    
    return ans;
}