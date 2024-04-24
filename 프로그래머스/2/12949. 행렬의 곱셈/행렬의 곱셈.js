function solution(arr1, arr2) {
    const m = arr1.length;
    const n = arr2[0].length;
    const ans = Array.from(Array(m), () => Array(n).fill(0));
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < arr2.length; k++) {
                ans[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    
    return ans;
}