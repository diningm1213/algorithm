/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let arr = [];
    let count = 0;
    const prefixCommonSet = new Set();

    for (let i = 0, len = A.length; i < len; i++) {
        const a = A[i];
        const b = B[i];

        if (prefixCommonSet.has(a)) {
            count++;
        }
        prefixCommonSet.add(a);
        if (prefixCommonSet.has(b)) {
            count++;
        }
        prefixCommonSet.add(b);
        arr.push(count);
    }

    return arr;
};