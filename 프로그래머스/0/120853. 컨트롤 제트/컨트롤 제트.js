function solution(s) {
    const arr = [];
    
    s.split(' ').forEach(c => {
        if (c === 'Z') {
            arr.pop();
        } else {
            arr.push(+c);
        }
    });
    
    return arr.reduce((acc, cur) => acc + cur, 0);
}