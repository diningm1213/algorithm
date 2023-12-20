/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    return n.split('').reduce((acc, cur) => acc >= cur ? acc : cur, 1);
};