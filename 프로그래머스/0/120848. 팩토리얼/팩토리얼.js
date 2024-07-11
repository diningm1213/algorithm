function solution(n) {
    let i = 1;
    
    while (true) {
        n /= i
        if (n <= 1) {
            break;
        }
        i++;
    }
    
    return n === 1 ? i : i - 1;
}