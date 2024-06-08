function solution(numbers) {
    let ans = numbers[0] * numbers[1];
    const len = numbers.length;
    
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            const multi = numbers[i] * numbers[j];
            
            if (ans < multi) {
                ans = multi;
            }
        }
    }
    
    return ans;
}