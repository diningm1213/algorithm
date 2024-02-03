/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    const partitions = [];
    const set = new Set();
    let substr = '';

    for (let i = 0, len = s.length; i < len; i++) {
        const char = s[i];
        if (set.has(char)) {
            partitions.push(substr);
            set.clear();
            substr = '';
        }
        set.add(char);
        substr+=char;
    }
    partitions.push(substr);

    return partitions.length;
};