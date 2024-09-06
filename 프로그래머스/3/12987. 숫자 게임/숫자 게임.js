function solution(A, B) {
    let ans = 0;
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    
    let pA = 0;
    let pB = 0;
    
    while (pA < A.length && pB < B.length) {
        if (A[pA] < B[pB]) {
            ans++;
            pA++;
            pB++;
        } else {
            pB++;
        }
    }
    
    return ans;
}