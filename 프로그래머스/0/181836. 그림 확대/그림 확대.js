function solution(picture, k) {
    const ans = [];
    
    picture.forEach(line => {
        const newLine = [...line].map(c => c.repeat(k)).join('');
        for (let i = 0; i < k; i++) {
            ans.push(newLine);    
        }
    });
    
    return ans;
}