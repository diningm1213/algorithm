/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    const checkStrictlyPalindromic = (b) => {
        const base = n.toString(b).split('');
        let start = 0;
        let end = base.length - 1; 

        while(end > start) {
            if (base[start] !== base[end]) {
                return false;
            }
            start++;
            end--;
        } 
        return true;
    }

    for (let i = 2; i <= n - 2; i++) {
        if (!checkStrictlyPalindromic(i)) {
            return false;
        }
    }

    return true;
};