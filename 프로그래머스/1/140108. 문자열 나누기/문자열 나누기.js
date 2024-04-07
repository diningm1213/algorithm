function solution(s) {
    let ans = 0;
    let x = '';
    let xCount = 0;
    let yCount = 0;
    
    [...s].forEach(c => {
        if (!x) {
            x = c;
            xCount = 1;
        } else if (x === c) {
            xCount++;
        } else {
            yCount++;
        }
        
        if (xCount === yCount) {
            ans++;
            x = '';
            xCount = 0;
            yCount = 0;
        }
    });
    
    if (x) {
        ans++;
    }
    
    return ans;
}