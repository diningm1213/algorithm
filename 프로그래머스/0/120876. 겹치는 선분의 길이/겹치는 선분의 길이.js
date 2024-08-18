function solution(lines) {
    const map = new Map();
    
    lines.forEach(([s, e]) => {
        while (s < e) {
            s++;
            const key = `${s - 1}-${s}`
            map.set(key, map.has(key) ? 2 : 1);
        }
    });
    
    return [...map.values()].filter(v => v > 1).length;
}