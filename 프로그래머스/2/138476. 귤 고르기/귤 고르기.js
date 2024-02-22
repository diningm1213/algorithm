function solution(k, tangerine) {
    const tangerineMap = new Map();
    tangerine.forEach(size => {
        tangerineMap.set(size, 
            tangerineMap.has(size) ? 
                tangerineMap.get(size) + 1 : 1);
    });
    
    const countBySize = [...tangerineMap.values()].sort((a, b) => b - a);
    for (let i = 0, len = countBySize.length; i < len; i++) {
        k -= countBySize[i];
        if (k <= 0) {
            return i + 1;
        }
    }
    
}