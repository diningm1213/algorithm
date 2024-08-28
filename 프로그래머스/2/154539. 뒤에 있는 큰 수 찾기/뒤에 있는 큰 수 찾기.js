function solution(numbers) {
    const ans = [];
    let back = [];
    
    for (let i = numbers.length - 1; i >= 0; i--) {
        const n = numbers[i];
        let checked = false;
        
        for (let j = 0; j < back.length; j++) {
            const m = back[j];
            if (n < m) {
                checked = true;
                ans.push(m);
                break;
            }
        }
        
        if (!checked) {
            ans.push(-1);
        }
        back = back.filter(v => v > n);
        back.unshift(n);
        
    }
    
    return ans.reverse();
}