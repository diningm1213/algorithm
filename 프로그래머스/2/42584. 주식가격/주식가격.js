function solution(prices) {
    const ans = [];
    const len = prices.length;
    let count = 0;
    
    for (let i = 0; i < len; i++) {
        count = 0;
        for (let j = i + 1; j < len; j++) {
            count++;
            if (prices[i] > prices[j]) {
                break;
            }
        }
        ans.push(count);
    }
    
    return ans;
}