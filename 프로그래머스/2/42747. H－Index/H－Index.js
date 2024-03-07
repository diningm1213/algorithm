function solution(citations) {
    let ans = 0;
    
    for (let i = 0; i < citations.length; i++) {
        const h = i + 1;
        const n = citations.filter(citation => citation >= h).length;
        if (h <= n) {
            ans = h;
        }
    }
    
    return ans;
}