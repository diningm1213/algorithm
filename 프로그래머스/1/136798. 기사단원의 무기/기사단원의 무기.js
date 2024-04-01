function solution(number, limit, power) {
    const arr = Array(number).fill(0);
     
    for (let i = 1; i <= number; i++) {
        const sqrt = Math.sqrt(i);
        for (let j = 1; j < sqrt; j++) {
            if (i % j === 0) {
                arr[i - 1] += 2;
            }            
        }
        
        if (i % sqrt === 0) {
            arr[i - 1]++;
        }
    }
    
    return arr.map(v => v > limit ? power : v).reduce((acc, cur) => acc + cur, 0);
}