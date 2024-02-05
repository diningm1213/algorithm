/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    const arr = Array.from(Array(n), (_, i) => i + 1);
    let i = 0;
    
    for (let j = 1; j < n; j++) {
        const len = arr.length;
        i = (i + k - 1) % len;
        arr.splice(i, 1);
    }

    return arr[0];
};