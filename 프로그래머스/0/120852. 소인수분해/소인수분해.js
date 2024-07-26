function solution(n) {
    const set = new Set();

    while (n !== 1) {
        for (let i = 2; i <= n; i++) {
            if (n % i === 0) {
                set.add(i)
                n /= i;
                break;
            }
        }
    }
    
    return [...set]
}