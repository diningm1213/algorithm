function solution(a, b, c, d) {
    const obj = {};
    obj[a] = 1;
    obj[b] = (obj[b] || 0) + 1;
    obj[c] = (obj[c] || 0) + 1;
    obj[d] = (obj[d] || 0) + 1;
    
    const entries = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    const count1 = entries[0][1];
    const count2 = entries[1]?.[1] || 0;
    const p = +entries[0][0];
    const q = +entries[1]?.[0] || 0;
    const r = +entries[2]?.[0] || 0;
    const s = +entries[3]?.[0] || 0;
    
    return count1 === 4 ? 1111 * p :
        count1 === 3 ? (10 * p + q) ** 2 :
        count1 === 2 && count2 === 2 ? (p + q) * Math.abs(p - q) :
        count1 === 2 ? q * r : Math.min(p, q, r, s);
        
}