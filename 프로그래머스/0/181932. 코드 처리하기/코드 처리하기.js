function solution(code) {
    let ret = '';
    let mode = 0;
    
    [...code].forEach((c, i) => {
        if (c === '1') {
            mode = mode === 0 ? 1 : 0;
            return;
        }
        const check = i % 2 === mode;
        
        if (check) {
            ret += c;
        }
    });
    
    return ret || 'EMPTY';
}