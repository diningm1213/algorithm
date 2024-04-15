function solution(num) {
    if (num === 1) {
        return 0;
    }
    
    for (let i = 0; i < 500; i++) {
        num = num % 2 === 0 ? num / 2 : num * 3 + 1
        
        if (num === 1) {
            return i + 1;
        }
    }
    
    return -1;
}