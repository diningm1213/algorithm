function solution(x, y, n) {
    let count = 0;
    let set = new Set([x])
    
    while (set.size) {
        const newSet = new Set();
        
        for (const v of set) {
            if (v === y) {
                return count;
            }
            
            if (v + n <= y) {
                newSet.add(v + n);
            }
            
            if (v * 2 <= y) {
                newSet.add(v * 2);
            }
            
            if (v * 3 <= y) {
                newSet.add(v * 3);
            }
        }
        set = newSet;
        count++;
    }
    
    return -1;
}