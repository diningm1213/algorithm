function solution(s) {
    const map = new Map();
    [...s].forEach(c => {
        map.set(c, map.has(c) ? 2 : 1);
    });
    
    return [...map.entries()]
        .filter(([k, v]) => v === 1)
        .map(([k, v]) => k)
        .sort()
        .join('');
}