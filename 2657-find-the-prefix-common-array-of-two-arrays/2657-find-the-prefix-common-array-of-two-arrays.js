/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let arr = [];
    const prefixCommonSet = new Set();

    for (let i = 0, len = A.length; i < len; i++) {
        prefixCommonSet.add(A[i]);
        prefixCommonSet.add(B[i]);
        arr.push((i + 1) * 2 - prefixCommonSet.size);
    }

    return arr;
};