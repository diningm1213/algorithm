function solution(code) {
    const ret = [];
    let mode = false;
    
    [...code].forEach((c, i) => {
        if (c === '1') {
            mode = !mode;
            return;
        }
        const odd = i % 2 === 1;
        
        if ((!mode && !odd) || (mode && odd)) {
            ret.push(c);
        }
    });
    
    return ret.length ? ret.join('') : 'EMPTY';
}