function solution(n) {
    let ans = 0;
    
    for (let i = 0; i < n; i++) {
        while (true) {
            ans++;
            if (ans % 3 !== 0 && !String(ans).match(/3/)) {
                break;
            }
        }
    }
    
    return ans;
}