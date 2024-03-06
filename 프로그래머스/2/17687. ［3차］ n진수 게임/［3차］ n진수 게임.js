function solution(n, t, m, p) {
    const arr = [];
    let count = 0;
    
    while(count < t) {
        arr.push(count * m + p - 1);
        count++;
    }
    
    const last = arr.at(-1);
    let s = '';
    count = 0;
    
    while(s.length <= last) {
        s += count.toString(n).toUpperCase();
        count++;
    }
    
    return arr.map(i => s[i]).join('');
}