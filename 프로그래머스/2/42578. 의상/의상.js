function solution(clothes) {
    const clothMap = new Map();
    let count = 1;
    
    clothes.forEach(([name, type]) => {
        clothMap.set(type, (clothMap.get(type) || 0) + 1);
    });
    
    for (const value of clothMap.values()) {
        count *= (value + 1);
    }
    
    return count - 1;
}