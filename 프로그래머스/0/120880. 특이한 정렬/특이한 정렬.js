function solution(numlist, n) {
    return numlist.sort((a, b) => {
        const na = Math.abs(n - a);
        const nb = Math.abs(n - b);
        
        if (na === nb) {
            return b - a;
        }
        
        return na - nb;
    });
}