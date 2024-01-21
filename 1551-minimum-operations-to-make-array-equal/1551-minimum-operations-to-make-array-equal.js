/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
    let answer = 0;
    const arr = Array.from(Array(n), (_, i) => (2 * i) + 1);
    const avg = n * n / n;

    arr.forEach(n => {
        answer += Math.abs(avg - n)
    });

    return answer / 2;
};