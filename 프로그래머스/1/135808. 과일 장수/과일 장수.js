function solution(k, m, score) {
    let ans = 0;
    score.sort((a, b) => a - b);
    for (let i = score.length % m; i < score.length; i += m) {
        ans += score[i] * m;
    }
    
    return ans;
}