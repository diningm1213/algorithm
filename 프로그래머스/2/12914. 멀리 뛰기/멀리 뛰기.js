function solution(n) {
    if (n === 1) {
        return 1;
    }
    
    if (n === 2) {
        return 2;
    }
    
    let n1 = 1;
    let n2 = 2;
    
    while (n > 2) {
        let temp = (n1 + n2) % 1234567;
        n1 = n2;
        n2 = temp;
        n--;
    }
    
    return n2; 
}