function solution(triangle) {
    let ans = 0;
    
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            const left = triangle[i - 1][j - 1] || 0;
            const right = triangle[i - 1][j] || 0;
            
            if (left < right) {
                triangle[i][j] += right;                
            } else {
                triangle[i][j] += left;                
            }
            
            if (i === triangle.length - 1) {
                if (ans < triangle[i][j]) {
                    ans = triangle[i][j];
                }
            }
        }
    }
    
    return ans;
}