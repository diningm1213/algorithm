function solution(array) {
    const obj = {};
    
    array.forEach(n => {
        obj[n] = (obj[n] || 0) + 1;
    });
    
    const entries = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    
    return entries[0][1] === entries[1]?.[1] ? -1 : +entries[0][0];
}