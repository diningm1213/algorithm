function solution(polynomial) {
    const ans = [];
    let x = 0;
    let n = 0;
    polynomial.split(' + ').forEach(term => {
        if (term.includes('x')) {
            x += +term.replace('x', '') || 1;
        } else {
            n += +term;   
        }
    });
    
    if (x) {
        ans.push(`${x > 1 ? x : ''}x`);
    }
    
    if (n) {
        ans.push(n)
    }
    
    return ans.join(' + ');
}