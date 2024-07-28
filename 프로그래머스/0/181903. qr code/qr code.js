function solution(q, r, code) {
    let ans = '';
    const len = code.length;
    
    for (let i = r; i < len; i += q) {
        ans += code[i];
    }
    
    return ans;
}