function solution(s) {
    let ans = 0;
    let x = '';
    let count = 0;
    
    [...s].forEach(c => {
        if (!x || x === c) {
            x = c;
            count++;
        } else {
            count--;
        }
        
        if (count === 0) {
            ans++;
            x = '';
        }
    });
    
    return x ? ans + 1 : ans;
}