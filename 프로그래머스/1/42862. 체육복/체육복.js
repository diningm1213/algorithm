function solution(n, lost, reserve) {
    const lostSet = new Set(lost.sort());
    const reserveSet = new Set(reserve);
    
    for (const lostNum of lostSet) {
        if (reserveSet.has(lostNum)) {
            lostSet.delete(lostNum);
            reserveSet.delete(lostNum);        
        }
    }
    
    for (const lostNum of lostSet) {
        if (reserveSet.has(lostNum - 1)) {
            lostSet.delete(lostNum);
            reserveSet.delete(lostNum - 1);        
        } else if (reserveSet.has(lostNum + 1)) {
            lostSet.delete(lostNum);
            reserveSet.delete(lostNum + 1);    
        }
    }
    
    return n - lostSet.size;
}