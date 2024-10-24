/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var stringHash = function(s, k) {
    let ans = '';
    let sumHashValue = 0;

    for (let i = 0; i < s.length; i += k) {
        sumHashValue = 0;
        for (let j = 0; j < k; j++) {
            sumHashValue += s[i + j].charCodeAt(0) - 97;
        }
        ans += String.fromCharCode(sumHashValue % 26 + 97);
    }

    return ans;
};